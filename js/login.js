document.addEventListener('DOMContentLoaded', function() {
    const switchToSignupButton = document.getElementById('switchToSignup');
    const switchToLoginButton = document.getElementById('switchToLogin');
    const formContainer = document.querySelector('.form-container');

    switchToSignupButton.addEventListener('click', function() {
        formContainer.classList.add('active');
    });

    switchToLoginButton.addEventListener('click', function() {
        formContainer.classList.remove('active');
    });
});
