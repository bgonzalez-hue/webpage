// This file contains the JavaScript code that handles the login form submission, including validation of the input fields and any necessary interactions with the user.

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (validateForm(username, password)) {
            alert('Login successful!');
            // Here you can add further logic for successful login
        } else {
            alert('Please enter a valid username and password.');
        }
    });

    function validateForm(username, password) {
        return username.trim() !== '' && password.trim() !== '';
    }
});