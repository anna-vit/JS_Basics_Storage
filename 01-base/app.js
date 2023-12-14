
// Can Do 
// let $ = 'test';
// let $num = 42;
// let num$ = 49;
// let _ = 12;
// let _num = 13;
// let first_name = 'Elena'; rarely
// let myNum = 34; 
// let num24 = 10;

// Mustn't do 
// let first_name = 'Elena';
// let 42num = '11';
// let my-num = '12';
// let false = 11; don't use reserve-words
// show data 
// alert(firstName);
// console.log(firstName);  
// add script to bottom body is the old way for this manipulation. 
const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divisionBtn = document.getElementById('division');
let action = '+';
// version 1
plusBtn.onclick = function () {
    action = '+';
};
minusBtn.onclick = function () {
    action = '-';
};
multiplyBtn.onclick = function () {
    action = '*';
};
divisionBtn.onclick = function () {
    action = '/';
};

function printResult (result) {
    result < 0 ? resultElement.style.color = 'red' : resultElement.style.color = 'green';
    resultElement.textContent = result;
};

function computeNumberWithAction (input1, input2, actionSymbol) {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    let result;
    switch (actionSymbol) {
        case '+':
            result = num1 + num2
            break;
    
        case '-': 
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
    }
    return result
};

submitBtn.onclick = function () {
    const result = computeNumberWithAction(input1, input2, action);
    printResult(result);
};

// version 2 
// let sum = 0;
// plusBtn.onclick = function () {
//     sum = Number(input1.value) + Number(input2.value);
// };
// minusBtn.onclick = function () {
//     sum = Number(input1.value) - Number(input2.value);
// };


// submitBtn.onclick = function () {
//     resultElement.textContent = sum;
// };
