//   CONTROL FLOW
// FOR LOOP

for (let i=1; i<10; i++ ){
    console.log('the count loop for', i);
}

const country = ['Ghana', 'America', 'Togo', 'Nigeria', 'Chicago', 'Korea', 'Spain', 'Ukraine', 'Mexico', 'China']

for (let i = 0; i < country.length; i++) {
    console.log(country[i]); 
}

// WHILE LOOP

let i = 0;
while(i<5){
    console.log('this is loop', i);
    i++
}

// CONDITIONAL STATEMENTS
let names =  ['williams', 'charles', 'mike', 'Bimbola', 'Ade']

if(names.length >4){
    console.log('there are many names');
} 

// const password = 'p@ssword';

// if (password.length >= 8) {
//     console.log('the length of the password is OK');
    
// }

// ELLSE STATEMENTS 
// const password1 = 'p@ss';
// if (password1 >=8) {
//     console.log('the length of the password is OK');
// } else{
//     console.log('the length of the password is not OK');
// }

// ELSE IF
// const password = "p@ssken"
// if (password.length >= 14) {
//     console.log('The pass ia a very strong type');   
// } else if(password.length >=9){
//     console.log('the length of that password is ok');
// } else {
//     console.log('This is a short password');
// }


// LOGICAL OPERATORS -0R || and  AND &&
const password = 'password';
if (password.length >=17  && password.includes('@')) {
    console.log('This password is more than required');
    
} else if(password.length >=10 || password.includes('@') && password.length > 5){
     console.log('This password is really well done');
} else {
    console.log('this password does not meet with the desired requirements');
}

// LOGICAL NOT (!)

let client = false;
if (!client) {
    console.log('you are welcome to our elegant services');
}
console.log(true);
console.log(false);
