let Username = document.querySelector('.Username');

let Password = document.querySelector('.Password');

let email = document.querySelector('.Email')

let btn = document.querySelector('.submit');


arrayObject=[];

btn.addEventListener('click', function(){
    let putItem ={
        username: Username.value,
        Password: Password.value,
        email: email.value
    }
    
    arrayObject.push(putItem);
    localStorage.setItem('user',JSON.stringify(arrayObject));
})
//     localStorage.setItem('username', Username.value);
//     localStorage.setItem('password', Password.value);

//     function check(){
//         let useArr = localStorage.getItem(Username.value);
//         let passArr = localStorage.getItem(Password.value);

//         let stored = document.getElementById('user');
//         let storedPass = document.getElementById('pass');

//         if(stored == useArr[0] && storedPass == passArr[0]){
//             console.log('User already exists')
//         }else{
//             console.log('Welcome New User')
//     localStorage.setItem('user',JSON.stringify(arrayObject));
       
//         }
//     }
// console.log(check())
// })
// if(localStorage.key([]) == Username.value){
//     console.log('This account already exist')
// }else{
//     localStorage.setItem(Username.value,JSON.stringify(arrayObject));
  
// }

// console.log(localStorage.key([0]))

// Username.forEach(user => {
//     for(var i = 0; i=username.lenght; i++){
//         user.cla
//     }
    
// });
