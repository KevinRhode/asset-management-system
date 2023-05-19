const signupFormHandler = async (e) => {
    e.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
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
    
    if(username && email && password){
        const res = await fetch('/api/user/',{
            method:'POST',
            body: JSON.stringify({username,email,password}),
            headers: {'Content-Type':'application/json'},
        });
        if(res.ok){
            document.location.replace('/dashboard');
        }else{
        // When the user clicks the button, open the modal 
            modal.style.display = "block";        
        }
    }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);