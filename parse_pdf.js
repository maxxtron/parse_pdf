let manuals = ['https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupManual/Manual%20HPX_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupEnergielabel/HPX16A%20Product_Fiche.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupEnergielabel/HPX16A%20bijlage.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupManual/Manual%20HPX_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupEnergielabel/HPX12A%20Product_Fiche.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupEnergielabel/HPX12A%20bijlage.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupManual/Manual%20HPX_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupEnergielabel/HPX06A%20Product_Fiche.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupEnergielabel/HPX06A%20bijlage.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupBrochure/Brochure%20Qwikshift%20EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupManual/Manual%20QSG_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupExplosion/Explosie%20tekening%20QSG_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupScheme/Elektrisch%20schema%20QSG_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupBrochure/Brochure%20Qwikshift%20EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupManual/Manual%20QSG_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupExplosion/Explosie%20tekening%20QSG_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupScheme/Elektrisch%20schema%20QSG_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupBrochure/Brochure%20Qwikshift%20EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupManual/Manual%20QSG_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupExplosion/Explosie%20tekening%20QSG_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupScheme/Elektrisch%20schema%20QSG_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupBrochure/Brochure%20Qwikshift%20EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupManual/Manual%20QSE_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupExplosion/Explosie%20tekening%20QSE_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupScheme/Elektrisch%20schema%20QSE_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupBrochure/Brochure%20Qwikshift%20EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupManual/Manual%20QSE_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupExplosion/Explosie%20tekening%20QSE_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupScheme/Elektrisch%20schema%20QSE_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupBrochure/Brochure%20Qwikshift%20EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupManual/Manual%20QSE_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupExplosion/Explosie%20tekening%20QSE_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupScheme/Elektrisch%20schema%20QSE_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupBrochure/Brochure%20Qwikshift%20EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupManual/Manual%20QSE_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupExplosion/Explosie%20tekening%20QSE_EN.pdf',
'https://winterwarm.compano.com/Data/Environments/000001/Attachment/Bijlage/PRD/ProductGroupScheme/Elektrisch%20schema%20QSE_EN.pdf',]



async function downloadPDF(array) {
    const maxRetries = 3; // Максимальное количество попыток скачивания
    const retryDelay = 5000; // Задержка между попытками скачивания (в миллисекундах)
    
    let counter = 1; // Счётчик для добавления порядковых номеров к одинаковым именам файлов
    
    for (let url of array) {
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
}

downloadPDF(manuals);