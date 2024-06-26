async function downloadPDFFromJSON() {
    const maxRetries = 3; // Максимальное количество попыток скачивания
    const retryDelay = 5000; // Задержка между попытками скачивания (в миллисекундах)
    const jsonURL = '/urls.json'; // URL вашего JSON файла на сервере Vercel
        let status = document.querySelector('.preloader')
        btn = document.querySelector('#btn'),
        icon = document.querySelector('img'),
        info = document.querySelector('.info'),
        ok = document.querySelector('.ok');
    try {
        const response = await fetch(jsonURL);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке файла JSON: ' + response.statusText);
        }
        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error('Ошибка при загрузке файла JSON: данные не являются массивом.');
        }

        let uniqueUrls = [...new Set(data)]; // Удаляем повторяющиеся URL-адреса

        let counter = 1; // Счётчик для добавления порядковых номеров к одинаковым именам файлов
         status.classList.remove('hide');
         info.classList.remove('hide');
         icon.classList.add('hide');
         btn.innerHTML = "Downloading...";
         btn.disabled = true;
         btn.style.backgroundColor = 'grey';
         btn.style.opacity = 0.8;
         btn.style.cursor = 'default';
        for (let [index,url] of uniqueUrls.entries()) {
            let lastPart = url.split("/").pop().replaceAll("%", "_");
            // url = `https://www.munters.com/${url}`;
            info.innerHTML = `Downloading ${index} of ${uniqueUrls.length} files...`
            let retryCount = 0;
            let downloaded = false;
            while (!downloaded && retryCount < maxRetries) {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error('Ошибка при загрузке файла: ' + response.statusText);
                    }
                    const blob = await response.blob();
                    
                    // Добавляем порядковый номер к имени файла, если оно уже существует
                    let filename = lastPart;
                    if (retryCount > 0) {
                        filename = `${lastPart}_${counter}`;
                        counter++;
                    }
                    
                    const fileURL = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = fileURL;
                    a.download = filename;
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(fileURL);
                    document.body.removeChild(a);
                    downloaded = true;
                } catch (error) {
                    console.error(error);
                    retryCount++;
                    await new Promise(resolve => setTimeout(resolve, retryDelay));
                }
            }
            
            if (!downloaded) {
                console.error(`Не удалось скачать файл ${lastPart} после ${maxRetries} попыток.`);
            }
        }
    } catch (error) {
        console.error('Ошибка при загрузке файла JSON:', error);
    }
    status.classList.add('hide');
    icon.classList.remove('hide');
    btn.innerHTML = 'Completed';
    info.classList.add('hide');
    ok.classList.remove('hide');
}
document.addEventListener("DOMContentLoaded", function() {
    if (btn) {
        btn.addEventListener("click", function() {
            downloadPDFFromJSON();
        });
    } else {
        console.error('Кнопка не найдена.');
    }
});
