let eye = window.document.getElementById('eyeIcon');
let eyeClosed = window.document.getElementById('eyeClosed');
let password = window.document.getElementById('password');
let confirmPassword = window.document.getElementById('confirmPassword');

eye.style.display = 'block';
eyeClosed.style.display = 'none';
password.type = 'password';
confirmPassword.type = 'password';


eye.addEventListener('click', function () {
    if (password.type = 'password' && eyeClosed.style.display == 'none') {
        password.type = 'text';
        confirmPassword.type = 'text'
        eyeClosed.style.display = 'block'
        eyeClosed.style.color = 'rgb(93, 196, 230)';

        // eyeClosed.style.Bottom = '50px'
    } else {
        eyeClosed.style.display = 'none';
        password.type = 'password';
confirmPassword.type = 'password';


    }
})
eyeClosed.addEventListener('click', function () {
    if (password.type = 'password' && eye.style.display == 'block') {
        password.type = 'password';
        confirmPassword.type = 'password';
        eyeClosed.style.display = 'none';
        eyeClosed.style.color = 'rgb(93, 196, 230)';
        // eyeClosed.style.Bottom = '50px'
    } else {
        eyeClosed.style.display = 'none';
        password.type = 'password';
confirmPassword.type = 'password';


    }
});