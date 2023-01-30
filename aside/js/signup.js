let eye = window.document.getElementById('eyeIcon');
let eyeClosed = window.document.getElementById('eyeClosed');
let password = window.document.getElementById('password');
let confirmPassword = window.document.getElementById('confirmPassword');
let userLog = window.document.getElementById('userLog');
let emailLog = window.document.getElementById('emailLog');

let submit = window.document.getElementById('submit');

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

submit.addEventListener('click', event =>{
    event.preventDefault();
    let createdObject = {
      username: userLog.value,
      email: emailLog.value,
      password: confirmPassword.value,
      pass: password.value
    }

    if(confirmPassword.value != password.value){
        alert('Please, confirmed password must match created password');
        return;
    }
    let objectArray = localStorage.getItem('user')
    let {username:userOfName,email:emailOfUser,password:passwordOfUser} = Object;
    if(objectArray){
        objectArray = JSON.parse(objectArray)
    }else{
        objectArray = []
    }

    for(const object of objectArray){
    let {username:userOfName,email:emailOfUser,password:passwordOfUser} = Object;
        if(object.username == userLog.value){
            alert('Sorry Account does exist');
            return
        }
    }
    for(const object of objectArray){
    let {username:userOfName,email:emailOfUser,password:passwordOfUser} = Object;
        if(object.email == emailLog.value){
            alert('Sorry Email does exist');
            return
        }
    }
    for(const object of objectArray){
    let {username:userOfName,email:emailOfUser,password:passwordOfUser} = Object;
        if(object.password == confirmPassword.value){
            alert('Sorry Account does exist');
            return
        }
    }

    objectArray.push(createdObject);
    stroredItem = localStorage.setItem('user', JSON.stringify(objectArray));
    alert(`${userLog.value}'s Account created successfully`)
    document.location = 'dashboard.html';
})


