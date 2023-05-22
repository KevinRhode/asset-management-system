const typeFormHandler = async (e) => {
    e.preventDefault();

    const dV = document.querySelector('#type-description');
    const description = dV.value.trim();
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
    
    if(dV){
        const res = await fetch('/api/type/',{
            method:'POST',
            body: JSON.stringify({description}),
            headers: {'Content-Type':'application/json'},
        });
        if(res.ok){
            // document.type.replace('/dashboard');
            modal.style.display = "block"; //sucess
            modal.children[0].children[1].textContent = "Type created!"
            dV.value = "";
        }else{
        // When the user clicks the button, open the modal 
            modal.style.display = "block";   
            modal.children[0].children[1].textContent = res.statusText;

        }
    }
}
const typeEditHandler = async(e) =>{
  e.preventDefault();
  
  console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  const dV = document.querySelector('#type-description');
  const description = dV.value.trim();
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
  
  if(dV){
      const res = await fetch(`/api/type/${id}`,{
          method:'PUT',
          body: JSON.stringify({description}),
          headers: {'Content-Type':'application/json'},
      });
      if(res.ok){
          // document.type.replace('/dashboard');
          modal.style.display = "block"; //sucess
          modal.children[0].children[1].textContent = "Type Updated!"
          window.location.replace('/api/type')
      }else{
      // When the user clicks the button, open the modal 
          modal.style.display = "block";   
          modal.children[0].children[1].textContent = res.statusText;

      }
  }
}
const delButtonHandler = async (event) => {
  event.preventDefault();
  
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id);
    const response = await fetch(`/api/type/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/api/type');
      
    } else {
      // When the user clicks the button, open the modal 
      modal.style.display = "block";   
      modal.children[0].children[1].textContent = res.statusText;
      
    }
  }
};
try {
  document
  .querySelector('.type-form')
  .addEventListener('submit', typeFormHandler);

} catch (error) {
  
}
try {
  document
  .querySelector('.edit-handle')
  .addEventListener('click', typeEditHandler);
} catch (error) {
  
}
try {
  document
  .querySelector('.delete-handle')
  .addEventListener('click', delButtonHandler);
} catch (error) {
  
}

