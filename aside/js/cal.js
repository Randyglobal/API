//calling classes for the days, months and current year

const days = document.querySelector(".days");
const currentDate = document.querySelector(".currentDate");
const prevNext = document.querySelectorAll(".icons");
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');

/**
 * getting new dates, current year and month
 */

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

//writing full names of all months

const months = ["January", "Febuary", "March", "April", "May", 
"June", "July", "August", "September", "October", "November","December"];

const calendar = () => {
    let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();//getting first day of the month
    let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currentYear, currentMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate(); //getting last date of previous months

    let liTag = "";

    for(let i = firstDayofMonth; i > 0; i--){
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for(let i = 1; i <= lastDateofMonth; i++){
        let isToday = i === currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
         liTag += `<li class= "${isToday}">${i}</li>`;
    }
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    days.innerHTML = liTag;
}

  calendar();

 prevNext.forEach(icons => {
    icons.addEventListener('click', function(){
        currentMonth = icons.id === "prev"? currentMonth - 1 : currentMonth + 1;
       


        if( currentMonth < 0 || currentMonth > 11){
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();

        }else{
            date = Date();
        }
        calendar();
    });
 });

//  prevNext.forEach(icons => {
//     icons.addEventListener('click', function(){
//         currentMonth = icons.id === "prev"? currentMonth - 1 : currentMonth - 1;
//         // currentMonth = icons.id === "prev"? currentMonth + 1 : currentMonth - 1;


//         if( currentMonth < 0 || currentMonth > 11){
//             date = new Date(currentYear, currentMonth);
//             currentYear = date.getFullYear();
//             currentMonth = date.getMonth();

//         }else{
//             date = Date();
//         }
//         calendar();
//     });
//  });

 
 