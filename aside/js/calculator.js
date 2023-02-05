//calling screens
let operationScreen = document.querySelector('input.operationInput');

let answerScreen = document.querySelector('input.answerInput');

let inputOperation = document.querySelector('input.inputOperation');

operationScreen.readOnly = true;
answerScreen.readOnly = true;

let digits = document.querySelectorAll('button.digit');

//convert

let digit = document.querySelectorAll('button.digits');

let from = document.getElementById('from');

let to = document.querySelector('.to');

let convert = document.getElementById('convert');

let result = document.getElementById('result')

let arithmeticOperation = document.querySelectorAll('button.operation');

let clearOps = document.querySelectorAll('button.clearOps');

let powerOps = document.querySelectorAll('button.powerOps');

digits.forEach(digit => {
    digit.addEventListener('click', event =>{
        event.preventDefault();
        operationScreen.value += event.target.innerText;
    });
});


digit.forEach(digits =>{
  digits.addEventListener('click', event =>{
   event.preventDefault();
   inputOperation.value += event.target.innerText;
   inputOperation.style.fontSize = '17px'

   let clickedFunction = event.target.innerText;
   if(clickedFunction == 'Del'){
    inputOperation.value = '';
   }
  })
})

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

convert.addEventListener('click', event => {
    event.preventDefault();
    let takeCurrency = from.value;
    let toCurrency = to.value;
    let amount = inputOperation.value;

    if (amount == '' || amount == '0'){
        amount.value = '1';
        amount  = 1;
    }

    fetch(`https://v6.exchangerate-api.com/v6/153b1a58634c88c2dd612729/latest/USD${takeCurrency}`)
    .then(response => 
        response.json()
    )
    // .then(result => {
    //     let exchangeRate = result.conversion_rates[toCurrency.value];
    //     console.log(exchangeRate)
    // })
    .then(data => {
        let rate = data.rates[toCurrency.value];
        let total = rate * amount;
        result.innerHTML = `${amount} ${takeCurrency} = ${total} ${toCurrency}`
    })
})
