const Medinna = document.querySelector("body > h1")
console.log(Medinna);

const Tony = document.querySelectorAll('p');
console.log(Tony[2]);

// Tony.forEach(kenny =>{
//     console.log(kenny);
// })

console.log('this is my braking point to list out items');

// for(let i=0; i<Tony.length; i++){
//     console.log(Tony[i]);
// }

// const Gerald = document.getElementById('pack')
// console.log(Gerald);

const sam = document.querySelector('p')
console.log(sam.innerHTML);

sam.innerHTML = 'i want to catch some fun'

const Sams = document.querySelectorAll('p');

Sams.forEach(Sam => {
    console.log(Sam.innerHTML)
    Sam.innerText += ' another statement'
});

// CHANGING STYLES

const head = document.querySelector('h4')
head.setAttribute('style', 'margin:50px; color: blue; font-size: 20px;')

console.log(head.style);


const wrapper = document.querySelector('.wrapper');

wrapper.style.color = "brown"
wrapper.style.fontSize = "30px"
wrapper.style.margin = 0
wrapper.style.padding = 0





