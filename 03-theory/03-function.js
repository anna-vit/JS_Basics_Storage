// Functions has 2 ways for calling;
// 1st Function Declaration

// function greet (name) {
//     console.log('Hello -', name);
// };

// greet('Hany');

//Function Expression this method differs from the previous syntax.We create a variable next give to it anonymous function 
// const greet2 = function (name) {
//     console.log('Hello -', name);
// }

// greet2('Mary');

// setTimeout(); 1param-func; 2param-sec;
// setTimeout(greet('world'), 1500);
// setTimeout(function(){
//     console.log('Time out')
// },1500);

//setInterval();works every set interval;
// let counter = 0;
// const interval = setInterval(function(){
//     if(counter === 5){
//         clearInterval(interval);
//     } else {
//         console.log(++counter);
//     }
// },2000);

//Arrow function

// function greet (name) {
//     console.log('Hello -', name);
// };
    
// const arrow = (name) => { 
//     console.log('Hello -', name);
// };

// function pow (num, exp) {
//     return Math.pow(num,exp);
// };

// const pow2 = (num,exp) => Math.pow(num,exp); 
// console.log(pow2(2,3));

const sum = (a,b = 2) => a + b;
console.log(sum(40,5)); // 45
console.log(sum(40)); //42

//operator rest (...)

// function sumAll (...numbers) {
//     console.log(numbers)
//     let res = 0;
//     numbers.map((num) => res +=num);
//     console.log(res);
// };

// console.log(sumAll(1,2,3,4,5,6,7)); //28

//Closures Zamukanie функцуя в которо ест другая функция;

function createPerson (name) {
    return function(lastName) {
        console.log(name + ' ' + lastName)
    };
};

const addLastName = createPerson('Anna');

addLastName('Sidorova');