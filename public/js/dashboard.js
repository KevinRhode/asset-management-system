const assetEditHandler = async (e) => {
    e.preventDefault();
   
    let extract = e.target;
    for (let index = 0; index < 5; index++) {
        if (extract.hasAttribute('data-id')) {
            // console.log(extract);
            index = 5;
            window.location.replace(`/api/asset/edit/${extract.parentElement.dataset.id}`)
        }else{
            extract  = extract.parentElement;
        }        
    } 
}
try {
    document
    .querySelectorAll('.asset-id').forEach(element => {
      element.addEventListener('click', assetEditHandler);
    }); 
} catch (error) {
    
}

