async function downloadPDFFromJSON() {
    const maxRetries = 3; // Максимальное количество попыток скачивания
    const retryDelay = 5000; // Задержка между попытками скачивания (в миллисекундах)
    const jsonURL = '/urls.json'; // URL вашего JSON файла на сервере Vercel

    try {
        const response = await fetch(jsonURL);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке файла JSON: ' + response.statusText);
        }
        const data = await response.json();

        if (!Array.isArray(data.urls)) {
            throw new Error('Ошибка при загрузке файла JSON: data.urls не является массивом.');
        }

        let counter = 1; // Счётчик для добавления порядковых номеров к одинаковым именам файлов
        
        for (let url of data.urls) {
            let lastPart = url.split("/").pop().replaceAll("%", "_");
            console.log(url);
            
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
}

downloadPDFFromJSON();