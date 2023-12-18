// const num = 42; //integer
// const float = 42.42; //float

// const pow  = 10e3; //10 000
// const big = 1_000_000;

// console.log(Number('42'));
//console.dir show us Number as an object
// console.dir(Number);

// console.log(Number.MAX_SAFE_INTEGER);
// // Math is an object which has math consts and math's functions;
// console.log(Math.pow(2,53)-1);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);
// let notNum = 23 / undefined;
// console.log(Number.isNaN(notNum)); //true;


// const strInt = '42';
// const strFloat = '42.42';

// console.log(Number(strInt)); //42 type is number
// console.log(Number(strFloat)); // 42.42 type is number
// console.log(Number.parseInt(strInt)); //42 type is number
// console.log(Number.parseInt(strFloat)); // 42, it gives us only first part before point
// console.log(Number.parseFloat(strFloat)); // 42.42
// console.log(+strInt, +strFloat); // 42, 42.42 type is number

// let num2 = 0.1 + 0.2; //0.30000000000000004
// console.log(num2.toFixed(1)); // toFixed return us type string
// console.log(+num2.toFixed(1)); //type number we add <+>;

//BidInt (work with huge numbers)

// console.log(Number.MAX_SAFE_INTEGER + 5665577489839); 
// // console.log(BigInt(Number.MAX_SAFE_INTEGER) + 5665577489839);Error Cannot mix BigInt and other types, use explicit conversions
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 5665577489839n);

//Math

// console.log(Math.E); //2.718281828459045
// console.log(Math.PI);//3.141592653589793
// console.log(Math.sqrt(25));// 5
// console.log(Math.pow(2,3));//8
// console.log(Math.abs(-42));//42
// console.log(Math.max(2,5,42,199,0)); // 199
// console.log(Math.floor(4.9)); //4
// console.log(Math.ceil(4.9)); // 5

// function getRandomNumber (min, max) {
//     return Math.random() * (max - min + 1) + min
// };

// const num = getRandomNumber(10, 100);
// console.log(num);


