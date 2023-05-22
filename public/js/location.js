const locationFormHandler = async (e) => {
    e.preventDefault();

    const dV = document.querySelector('#location-description');
    const description = dV.value.trim();
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
    
    if(description){
        const res = await fetch('/api/location/',{
            method:'POST',
            body: JSON.stringify({description}),
            headers: {'Content-Type':'application/json'},
        });
        if(res.ok){
            // document.location.replace('/dashboard');
            modal.style.display = "block"; //sucess
            modal.children[0].children[1].textContent = "Location created!"
            dV.value = "";
        }else{
        // When the user clicks the button, open the modal 
            modal.style.display = "block";
            modal.children[0].children[1].textContent = res.statusText;     
        }
    }
}
const locationEditHandler = async (e) => {
  e.preventDefault();

  const id = document.querySelector('#location').dataset.id;
  const dV = document.querySelector('#location-description');
  const description = dV.value.trim();
  // const description = document.querySelector('#location-description').value.trim();
  // Get the modal
  const modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];
  
    
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    if (modal.children[0].children[1].textContent === "Location Updated!") {
      window.location.replace('/api/location');
    }
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      if (modal.children[0].children[1].textContent === "Location Updated!") {
        window.location.replace('/api/location');
      }
      
    }
  }
  
  if(description){
      const res = await fetch(`/api/location/${id}`,{
          method:'PUT',
          body: JSON.stringify({description}),
          headers: {'Content-Type':'application/json'},
      });
      if(res.ok){
          // document.location.replace('/dashboard');
          modal.style.display = "block"; //sucess
          modal.children[0].children[1].textContent = "Location Updated!"
          dV.value = "";
      }else{
      // When the user clicks the button, open the modal 
          modal.style.display = "block";
          modal.children[0].children[1].textContent = res.statusText;     
      }
  }
}
const delButtonHandler = async (event) => {
  event.preventDefault();
  
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
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id);
    const response = await fetch(`/api/location/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/api/location');
    } else {
      // When the user clicks the button, open the modal 
      modal.style.display = "block";   
      modal.children[0].children[1].textContent = res.statusText;
      
    }
  }
};

try {
  document
  .querySelector('.location-form')
  .addEventListener('submit', locationFormHandler);

} catch (error) {
  
}

try {
  document
  .querySelector('.edit-handle')
  .addEventListener('click', locationEditHandler);

} catch (error) {
  
}

try {
  document
  .querySelector('.delete-handle')
  .addEventListener('click', delButtonHandler);
} catch (error) {
  
}

