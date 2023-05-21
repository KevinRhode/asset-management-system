const locationFormHandler = async (e) => {
    e.preventDefault();

    
    const description = document.querySelector('#location-description').value.trim();
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
    
    if(description){
        const res = await fetch('/api/location/',{
            method:'POST',
            body: JSON.stringify({username,email,password}),
            headers: {'Content-Type':'application/json'},
        });
        if(res.ok){
            // document.location.replace('/dashboard');
            modal.style.display = "block"; //sucess
            modal.textContent = "Location created!"
        }else{
        // When the user clicks the button, open the modal 
            modal.style.display = "block";        
        }
    }
}

document
  .querySelector('.location-form')
  .addEventListener('submit', locationFormHandler);