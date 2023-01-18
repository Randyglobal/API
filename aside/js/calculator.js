//calling screens
let operationScreen = document.querySelector('input.operationInput');

let answerScreen = document.querySelector('input.answerInput');

operationScreen.readOnly = true;
answerScreen.readOnly = true;

let digits = document.querySelectorAll('button.digit');

let arithmeticOperation = document.querySelectorAll('button.operation');

let clearOps = document.querySelectorAll('button.clearOps');

let powerOps = document.querySelectorAll('button.powerOps');

digits.forEach(digit => {
    digit.addEventListener('click', event =>{
        event.preventDefault();
        operationScreen.value += event.target.innerText;
    });
});

arithmeticOperation.forEach(operation =>{
    operation.addEventListener('click', event =>{
        event.preventDefault();
        let clickedOperation = event.target.innerText;
        let result;
        if(clickedOperation == '='){
            result = eval(operationScreen.value);
            answerScreen.value = result;
        }else{
        operationScreen.value += event.target.innerText;
        };
    });
});

clearOps.forEach(clear =>{
  clear.addEventListener('click', function(event){
  let clickedOperation = event.target.innerText

  if(clickedOperation == 'Del'){
    let operationValue = operationScreen.value;
    operationScreen.value = operationValue.slice(0, -1).toString();
  }

  if(clickedOperation == 'CL'){
    operationScreen.value = ''
    answerScreen.value = ''
  }
  });
});

powerOps.forEach(power =>{
    power.addEventListener('click', event=>{
        event.preventDefault();     
        let clickedOperation = event.target.innerText;

        if(clickedOperation == 'ON'){
            let digit = document.getElementById('digit');
            operationScreen.value = 'Welcome'
            answerScreen.value = 'Welcome';
             
            
        }

        if(clickedOperation == 'OFF' || clickedOperation == 'digits'){
            // let digit = document.querySelector('digit');
            operationScreen.value = "Power Off";
            answerScreen.value = "Power Off";
            // digit.innerText += 'Power Off';
        //    digit.addEventListener('click', function(){
        // let clickedOperation = event.target.innerText;
        //     if(clickedOperation = 'OFF'){
        //         digit.value = 'Power Off'
        //         operationScreen.value = 'Power Off';
        //         answerScreen.value = 'Power Off'
        //     }
        //    })

        }
    })
})
