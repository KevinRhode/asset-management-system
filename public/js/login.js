const loginFormHandler = async (e) => {
    e.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
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
    try {
      if(username && password){
        const res = await fetch('/api/user/login',{
            method:'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
        });
        if(res.ok){
            document.location.replace('/dashboard');
        }else{
        // When the user clicks the button, open the modal 
            modal.style.display = "block"; 
            modal.children[0].children[1].textContent; 
            console.log(modal.children[0].children[1].textContent);   
            modal.children[0].children[1].textContent = res.statusText;   
        }
    }
    } catch (error) {
      console.log(error);
    }

    
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);