
// let manuals = document.querySelectorAll('a[data-event="download-documentation"]');
let manuals = ['https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupBrochure/Brochure%20WCU%20EN.pdf','https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupManual/Manual%20WCU_EN.pdf']
let name = document.querySelector('h1')
function downloadPDF(array) {
    console.log(manuals)
for (let url of array){
let lastPart = url.href?.split("/")?.pop()?.replaceAll("%", "_");
console.log(url)
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