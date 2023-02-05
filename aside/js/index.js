let eye = window.document.getElementById('eyeIcon');
let eyeClosed = window.document.getElementById('eyeClosed');
let Password = window.document.getElementById('Password');
let UserLogo1 = window.document.getElementById('UserLogo1');
let submit = window.document.getElementById('submit');




eye.style.display = 'block';
eye.style.marginLeft = '-40px';
eyeClosed.style.display = 'none';
Password.type = 'password';

eye.addEventListener('click', function () {
    if (Password.type = 'password' && eyeClosed.style.display == 'none') {
        Password.type = 'text';
        eyeClosed.style.display = 'block'
        eyeClosed.style.color = 'rgb(93, 196, 230)';
        eyeClosed.style.marginLeft = '-40px';

        // eyeClosed.style.Bottom = '50px'
    } else {
        eyeClosed.style.display = 'none';
        Password.type = 'password';


    }
})
eyeClosed.addEventListener('click', function () {
    if (Password.type = 'password' && eye.style.display == 'block') {
        Password.type = 'password';
        eyeClosed.style.display = 'none';
        eyeClosed.style.color = 'rgb(93, 196, 230)';
        // eyeClosed.style.Bottom = '50px'
    } else {
        eyeClosed.style.display = 'none';
        Password.type = 'password';

    }
});

submit.addEventListener('click', event => {
    event.preventDefault();
  
    let username = UserLogo1.value;
    let password = Password.value;
  
    getElement = localStorage.getItem('user')
  
    if(getElement){
      getElement = JSON.parse(getElement)
    }else{
      alert('Account does not exist')
    }
  
    for(const user of getElement){
      let correctValues = Object.values(user)
      if(correctValues.includes(username) && correctValues.includes(password)){
          alert(`Welcome to User-Utils ${user.username}`);
          document.location = 'dashboard.html';
      }
      else{
        continue
      }
      return
    }
    alert('Sorry Invalid details try again')
  });
  submit.onclick = () => {
    localStorage.setItem('label', UserLogo1.value);
}



