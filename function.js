// function declaration
function greet() {
    console.log('goodmorning');
}
greet();

// function expression
const speak = function () {
    console.log('are we treating anything today');
}
speak();

// argument and parameters

const talk = function (name) {
    console.log(`your name is ${name}`);
}
talk('tobi')

const salute = function (time, money) {
    console.log(`i made about ${money} ${time}`);
}
salute('This morning', '3 Million Naira')

// RETURNING VALUES

// const calcArea = function(radius){
//     let area = 3.14 * radius**2
//     console.log(area);
// }
// calcArea(10);
// calcArea(20);

// ALTERNATIVELY
// const calcArea = function (radius) {
//     let area = 3.14 * radius ** 2
//     return area
// }

// const chit = calcArea(20)
// console.log(calcArea(20));
//  calcArea(20)

// ARROW FUNCTION
const calcArea = (radius) => {
    return area = 3.14 * radius ** 2
}
console.log(calcArea(20));

const say = () => {
    console.log('come over here');
}
say()

const bill = (products, tax) => {
    let total = 0;
    for(let a=0; a < products.length; a++){
        total += products[a] + products[a]*tax;  
        
    }
    console.log(total);
    
   
    
}

bill([20, 30, 50], 0.2)

console.log('just a seperation');


const fill = (products, tax) => {
    let sale = 0

    for(let k=0; k < products.length; k++){
        sale = products[k] + products[k]*tax
        console.log(sale);
    }
}

fill([20, 30, 50], 0.2)


let people = ['samuel', 'Ehis', 'chidinma', 'medina', 'gerald', 'silas', 'deybour', 'toby']

// for LOOP
// for(let s=0; s < people.length; s++){
//     console.log(people[s]);
// }


// people.forEach(person => {
//     console.log(person);
// })

// people.forEach((person, index) => {
//     console.log(index, person);
// })

// people.forEach((person, index) => {
//     console.log(`${index}  GoodMorning ${person}`);
// })

// // let numbers = [30, 50, 25, 100, 10] list out the number whose value is alredy multiplied by 4

// const names = ['samuel', 'Ehis', 'chidinma', 'medina', 'gerald', 'silas', 'deybour', 'toby']
// const peoples = document.querySelector('.peoples');

// let output = ""
// names.forEach(name => {
//     output += `<h1 style="color: blue;">${name}</h1>`
// })
// peoples.innerHTML = output;






