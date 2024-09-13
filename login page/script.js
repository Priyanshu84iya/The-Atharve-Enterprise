document.addEventListener('DOMContentLoaded', function() {
    const confirmPassword = document.getElementById('confirm_password');
  
    // Function to toggle confirm password visibility
    function toggleConfirmPasswordVisibility() {
      const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
      confirmPassword.setAttribute('type', type);
    }
  
    // Add event listener to toggle confirm password visibility on double click
    confirmPassword.addEventListener('dblclick', function() {
      toggleConfirmPasswordVisibility();
    });
  });
  