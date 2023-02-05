//creating a list of other people

const caption = [
    {
        id: 1,
        name: 'SDD',
        job: 'Hardware Engineer',
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'Tata Ngwa',
        job: 'Software Engineer',
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officia quos aperiam consequatur.cold-pressed four dollar toast everyday carry I'm baby meggings twee health goth +1",
    },
    {
        id: 3,
        name: 'Imbia Randy',
        job: 'Backend Dev',
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry ",
    },
    {
        id: 4,
        name: 'Ande Tracy',
        job: 'Full stack Dev',
        text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officia quos aperiam consequatur.cold-pressed four dollar toast everyday carry I'm baby meggings twee health goth +1",
    },
    {
        id: 5,
        name: 'Ismael Youssef',
        job: 'Designer',
        text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry ",
    },
    {
        id: 6,
        name: 'Treasure',
        job: 'Frontend',
        text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officia quos aperiam consequatur.cold-pressed four dollar toast everyday carry I'm baby meggings twee health goth +1",
    },
    {
    id: 7,
    name: 'Kenfack Merveille',
    job: 'Digital Marketting',
    text:
    "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry ",
},
{
    id: 8,
    name: 'Garry Bale',
    job: 'Business Man',
    text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},
{
    id: 6,
    name: 'Nya Love',
    job: 'Frontend',
    text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officia quos aperiam consequatur.cold-pressed four dollar toast everyday carry I'm baby meggings twee health goth +1",
},

]


//calling the person in the dom

let names = document.querySelector('.names');
let job = document.querySelector('.job');
let info = document.querySelector('.info');

//calling icons

let left = document.getElementById('left');

let right =  document.getElementById('right');

let currentReview = 0;

window.addEventListener('DOMContentLoaded', function(){
    let item = caption[currentReview];
    console.log(item)
    names.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function otherPersons(person) {
    let item = caption[person];

    names.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

right.addEventListener('click', function(){
    currentReview++
    if(currentReview > caption.length - 1){
    currentReview = 0;
    }
    otherPersons(currentReview)
});

left.addEventListener('click', function(){
    currentReview--
    if(currentReview < 0){
    currentReview = caption.length - 1;
    }
    otherPersons(currentReview)
})
