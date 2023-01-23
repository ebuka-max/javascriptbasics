// const pack = document.querySelector('p')

// // console.log(pack);

// const packs = document.querySelectorAll('p')
// packs.forEach(pack =>{
//     console.log(pack);
// })

// console.log(packs[2]);

// // get an element by id
//  const title = document.getElementById('heading')
//  console.log(title);

// //  get elements by their className

// const errors = document.getElementsByClassName('error')
// console.log(errors);
// console.log(errors[1]);

// // get elements by their tag name
// const para = document.getElementsByTagName('p');
// console.log(para);
// console.log(para[1]);


// How to change a text

const para = document.querySelector('p')
console.log(para.innerHTML);
para.innerHTML = 'Ebuka is great'

const packs = document.querySelectorAll('p');
packs.forEach(pack => {
    console.log(pack.innerHTML);
    pack.innerHTML += ' i want it that way'
})

const content = document.querySelector('#heading');

// console.log(content.innerHTML);
content.innerHTML += '<h3>This is a new content</h3>'

const people = ['Chinedu', 'Nelson', 'Amaka', 'Tochi']
 
// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`
// })

document.body.innerHTML += '<h1>Just trying to understant Javascript</h1>'


// SETTING AND CHANGING ATTRIBUTE

const link = document.querySelector('a')

console.log(link.getAttribute('href'));
link.setAttribute('href', "https://www.facebook.com");
link.innerText = "facebook websites"

const paint = document.querySelector('p');
console.log(paint.getAttribute('class'));

paint.setAttribute('class', 'correct')

paint.setAttribute('style', 'color:red; font-size: 30px;')
