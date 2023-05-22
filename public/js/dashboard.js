const assetEditHandler = async (e) => {
    e.preventDefault();
    console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
    const eleName = document.querySelector('#asset-name');
    const name = eleName.value.trim();
    const eleDescription = document.querySelector('#asset-description');
    const description = eleDescription.value.trim();
    const eleLocaiton = document.querySelector('#location-select');
    const location_id = eleLocaiton.value.trim();
    const eleType = document.querySelector('#type-select');
    const type_id = eleType.value.trim();
    // const description = document.querySelector('#location-description').value.trim();
    // Get the modal
    const modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    
      
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    if(name && description && location_id && type_id){
        const res = await fetch('/api/asset/',{
            method:'POST',
            body: JSON.stringify({name,description,location_id,type_id}),
            headers: {'Content-Type':'application/json'},
        });
        if(res.ok){
            // document.location.replace('/dashboard');
            modal.style.display = "block"; //sucess
            modal.children[0].children[1].textContent = "Asset created!"
            eleName.value = "";
            eleDescription.value = "";
            eleLocaiton.value = "";
            eleType.value = "";

        }else{
        // When the user clicks the button, open the modal 
            modal.style.display = "block";
            modal.children[0].children[1].textContent = res.statusText;     
        }
    }
}

document
  .querySelector('li')
  .addEventListener('click', assetFormHandler);