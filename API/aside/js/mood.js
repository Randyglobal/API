let lightDark = document.getElementById('lightDark')

let para = document.getElementById('para');

let iconsRepresentation = document.querySelector('.iconsRepresentation');

let dualDivs = document.querySelector('.dualDivs');

let header = document.getElementById('header');

let icon = document.querySelector('#icon');

let bell = document.getElementById('bell');

let caret = document.getElementById('caret');

let heading = document.querySelector('.heading');

let welcome = document.querySelector('.welcome');

let welcomeProfile = document.querySelector('.welcomeProfile');

let list = document.getElementById('list');

let faCaret = document.querySelector('.faCaret')


para.style.marginLeft = '0px';
para.style.background = 'black';
iconsRepresentation.style.background = 'rgba(13, 5, 104, 0.915)';
dualDivs.style.background = 'white';
header.style.background = 'white';
// icon.style.color = 'black';
bell.style.color = 'black';
caret.style.color = 'black';
heading.style.color = 'black';
welcome.style.color = 'black';
welcomeProfile.style.background = 'white';
list.style.display = 'none'





para.addEventListener('click', function () {

    if (para.style.marginLeft == '0px') {
        para.style.marginLeft = '60%';
        para.style.background = 'white';
        lightDark.style.background = 'black';
        iconsRepresentation.style.background = 'black';
        dualDivs.style.background = 'black';
        header.style.background = 'black';
        // icon.style.color = 'white';
        bell.style.color = 'white';
        caret.style.color = 'white';
        heading.style.color = 'white';
        welcome.style.color = 'white';
        welcomeProfile.style.background = 'black';
        welcomeProfile.style.boxShadow = '1px 3px 4px 1px white';








    } else {
        para.style.marginLeft = '0px';
        lightDark.style.background = 'white';
        para.style.background = 'black';
        iconsRepresentation.style.background = 'rgba(13, 5, 104, 0.915)';
        dualDivs.style.background = 'white';
        header.style.background = 'white';
        // icon.style.color = 'black';
        bell.style.color = 'black';
        caret.style.color = 'black';
        heading.style.color = 'black';
        welcome.style.color = 'black';
        welcomeProfile.style.background = 'white';




    }


    //     heading.forEach(head => {
    //         head.style.color = 'white';
    //         if (head.style.color == 'white'){
    //             head.style.color = 'black'
    //         }else{
    //             head.style.color = 'white';  
    //         }
    //     })

});
faCaret.addEventListener('click', function () {
    if (list.style.display == 'none') {
        list.style.display = 'block'

    } else {
        list.style.display = 'none'

    }
})

