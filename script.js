document.addEventListener("DOMContentLoaded", function() {
    // Get references to the password and confirm password fields
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("conf-pass");
  
    // Add a submit event listener to the form
    document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Get the values of the password and confirm password fields
      let password = passwordInput.value;
      let confirmPassword = confirmPasswordInput.value;
  
      // Log the values to the console for testing
      console.log("Password: " + password);
      console.log("Confirm Password: " + confirmPassword);

      if (password !== confirmPassword) {
           passwordInput.classList.add('error');
            confirmPasswordInput.classList.add('error');
            passwordInput.setAttribute('title', 'Passwords do not match')
            document.getElementById('error-mess-one').textContent = "Passwords do not match";
      } else {
        passwordInput.classList.remove('error');
        confirmPasswordInput.classList.remove('error');
        document.getElementById('error-mess-one').textContent = ""
      }
  
      
    });
  });









