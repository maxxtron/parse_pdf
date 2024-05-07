
let manuals = document.querySelectorAll('a[data-event="download-documentation"]');
let name = document.querySelector('h1')
function downloadPDF(array) {
for (let url of array){
const fileName = url?.querySelector('.c-downloads__title')?.textContent;
let lastPart = url.href?.split("/")?.pop()?.replaceAll("%", "_");
console.log(lastPart)
const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/pdf'
        }
    };
    fetch(url)
    .then(response => response?.blob())
    .then(blob => {  
        // Создаем ссылку для скачивания файла
        const url = window?.URL?.createObjectURL(new Blob([blob]));
		console.log(url)
        const a = document?.createElement('a');
        a.href = url;
        // a.download =fileName + ' ' + name.innerText + '.pdf'; // Указываем имя файла для скачивания
        a.download=lastPart
        // Программно нажимаем на ссылку
        a.click();
        window?.URL?.revokeObjectURL(url);
    })
    .catch(error => console.error('Ошибка при загрузке файла:', error));
}
}
downloadPDF(manuals);