let Username = document.querySelector('.Username');

let Password = document.querySelector('.Password');

let btn = document.querySelector('.submit');

// arrayObject=[];

btn.addEventListener('click', function(){
    // let putItem ={
    //     username: Username.value,
    //     Password: Password.value
    // }
    
    // arrayObject.push(putItem);
    // localStorage.setItem(Username.value,JSON.stringify(arrayObject));
   if(localStorage.key([]) == Username.value){
    console.log('Welcome')
   }else{
    console.log('Something went wrong')
   }
})
