let lightDark = document.getElementById('lightDark')

let para = document.getElementById('para');

let iconsRepresentation = document.querySelector('.iconsRepresentation');

let dualDivs = document.querySelector('.dualDivs');

let header = document.getElementById('header');

let icon = document.querySelector('#icon');

let bell = document.getElementById('bell');

let caret = document.getElementById('caret');

let divTarget = document.querySelectorAll('div')


para.style.marginLeft = '0px';
para.style.background = 'black';
iconsRepresentation.style.background = 'rgba(13, 5, 104, 0.915)';
dualDivs.style.background = 'white';
header.style.background = 'white';
icon.style.color = 'black';
bell.style.color = 'black';
caret.style.color = 'black';
// divTarget.style.background = 'white'



para.addEventListener('click', function () {

    if (para.style.marginLeft == '0px') {
        para.style.marginLeft = '60%';
        para.style.background = 'white';
        lightDark.style.background = 'black';
        iconsRepresentation.style.background = 'black';
        dualDivs.style.background = 'black';
        header.style.background = 'black';
        icon.style.color = 'white';
        bell.style.color = 'white';
        caret.style.color = 'white';



    } else {
        para.style.marginLeft = '0px';
        lightDark.style.background = 'white';
        para.style.background = 'black';
        iconsRepresentation.style.background = 'rgba(13, 5, 104, 0.915)';
        dualDivs.style.background = 'white';
        header.style.background = 'white';
        icon.style.color = 'black';
        bell.style.color = 'black';
        caret.style.color = 'black';

    }


    divTarget.forEach(divs => {
        divs.style.background = 'white';
        if (divs.style.background == 'white'){
               divs.style.background = 'black'
        }else{
            divs.style.background = 'white';  
        }
    })

})



