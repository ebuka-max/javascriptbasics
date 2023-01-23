// let X;
// let Y;

// X=prompt('Enter a number');
// Y=prompt('Enter another number');
// let result = Number(X) + Number(Y);

// alert(`we have ${result} number of carts`)

console.log('how are you');

let age = 35;

let year = 2022;

console.log(age, year);

var score = 95;
console.log(score);

let grade = 'Excellent';
console.log(grade);

// STRING CONCATENATION

let name = 'John'
let amount = "1 million"
word = 'Mr ' + name + ' has ' + amount + ' naira'
console.log(word);
console.log('Mr ' + name + ' has ' + amount + ' naira');

//  STRING METHOD
write = name.toUpperCase()
console.log(write);

statement = word.toUpperCase();
console.log(statement);

console.log(name.length);
console.log(word.length);
console.log(word.indexOf('M'));
console.log(word.indexOf('r'));
console.log(word.indexOf('a'));

let email = 'lawrence@yahoo.com';
console.log(email.length);
 
// l a w r e n c e @ y a h o o . c o m

// console.log(name.toUpperCase());
// console.log(word.toUpperCase());


// SLICE METHOD
console.log(word.slice(0,4))
console.log(email.slice(0,7));
console.log(email.slice(0,14));
console.log(email.slice(5,13));

console.log(email.substr(5,13));
console.log(email.substr(9,13));

// math Operators +, -. *, /, **. %
console.log(10+2);
console.log(20-14);
console.log(100*3);
console.log(100/2);

let division = 400/50;
console.log(division);

console.log(100**3);
console.log(10**2);
console.log(10**4);
console.log(5**2);

// double absterics is raise to power  5**2 is like 5 raise to power 2

console.log(29%3);

console.log(38%5);



// TEMPLATE STRING OR TEMPLATE LITERALS
let word2 = 'Mr ' + name + ' has ' + amount + ' naira'
console.log(word2);

let word3 = `Mr ${name} has ${amount} naira`
console.log(word3);

// ARRAYS 
let hero = ['spider', 'batman', 'GreenLatern', 'BlackPanther', 'spiderman']
console.log(hero);

console.log(typeof hero);
console.log(hero.length);
console.log(hero[2]);
console.log(hero[0]);


// ARRAYS METHOD
let vigilante = hero.join('-')
console.log(vigilante);
console.log(hero.join('-'));

let vigilante1 = hero.concat('sango', 'hulk')
console.log(vigilante1);

let vigilante2 = hero.push('superman')
console.log(vigilante2);
console.log(hero);

let vigilante3 = hero.push('flash')
console.log(vigilante3);
console.log(hero);

let vigilante4 = hero.pop()
console.log(vigilante4);
console.log(hero);

// console.log(hero.splice(3));
console.log(hero.splice(1,5));
// console.log(hero.splice(2,4));

// BOOLEAN
// boolean & comparison 

let age1 = 60;

// console.log(age1 == 55);
// console.log(age1 == 60);
// console.log(age1 != 60);
// console.log(age1 >= 55);
// console.log(age1 <= 75);


// let name1 = "joshua";

// console.log(name1 == 'ehis');
// console.log(name1 == 'joshua');
// console.log(name1 > 'Joshua');
// console.log(name1 > 'coshua');
// console.log(name1 < 'Koshua');

// LOOSE COMPARISON (different types can still be equal)
console.log(age1 == 60);
console.log(age1 == '60');


// STRICT COMPARISON (different types cannot still be equal)

console.log(age1 === 60);
console.log(age1 === '60');

if (age1 > 65) {
    console.log('you are not getting any younger');
} else{
    console.log('There is still time to enjoy life');
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}