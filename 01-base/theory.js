// _______________Operators
let a = 10;
let b = 5;
let c = 32;
// c = c + a; c += a;
// c = c - a; c -= a;
// c = c * a; c *= a;
// c = c / a; c /= a;
// ** vozvedenie v stetpen c = 4 ** 2

console.log(c);

// Data types
const age = 29; //number 
const name = 'Hanna';  //string   
const isProgramer = true; //boolen

console.log(typeof age, typeof name, typeof isProgramer);
// if we declare a variable without values. Js gives type to undefined by defult; for example:
let x //undefined 
console.log(typeof x);

// null but if we check in with type of, we will see that it has object of data type;
// Also it is a historical mistake in the launguege. 
console.log(typeof NaN); //number not a namber

const fullAge = 29;
const birthYear = 1996;
const carentYear = 2023;

// operators <, >, <=, >=;

const n1 = 42;
const n2 = '42';
console.log(n1 == n2); // check in these variables for values not type of but "===" check in with values and type of
console.log(n1 === n2); 


