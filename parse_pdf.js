
let manuals = document.querySelectorAll('a[data-event="download-documentation"]');
let name = document.querySelector('h1')
function downloadPDF(array) {
for (let url of array){
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
        const url = window?.URL?.createObjectURL(new Blob([blob]));
        const a = document?.createElement('a');
        a.href = url;
        a.download=lastPart
        a.click();
        window?.URL?.revokeObjectURL(url);
    })
    .catch(error => console.error('Ошибка при загрузке файла:', error));
}
}
downloadPDF(manuals);