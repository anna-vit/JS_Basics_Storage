//Theory date
// const now = new Date();

// const start = new Date(1000 * 60 *60 * 24 * 365);
// const date = new Date(2011, 0 , 4, 12, 42);
// console.log(start);
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.setDate(18));
// console.log(now);
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());
// let now = new Date().toString().slice(0,25);

const output = document.getElementById('output');
const btnFull = document.getElementById('full');
const btnDate = document.getElementById('date');
const btnTime = document.getElementById('time');
let mode = 'time';

update();

function update() {
    output.textContent = format(mode);
};

setInterval(() => {
    update();
}, 1000);

function format(formatMode) {
    const now = new Date();
    switch (formatMode) {
        case 'time' : return now.toLocaleTimeString();
        case 'date' : return now.toLocaleDateString();
        case 'full' : return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        default : 
            return now.toLocaleTimeString();
    };
};

function bindMode (name) {
    return function() {
        mode = name;
        update();
    };
};

btnFull.onclick = bindMode('full');
btnDate.onclick = bindMode('date');
btnTime.onclick = bindMode('time');


// function setOutput (value) {
//     output.textContent = value;
// };

// function setFullDate() {
//     let date = new Date().toDateString();
//     let time = new Date().toLocaleTimeString();
//     let fullDate = `${date} ${time}`
//     setOutput(fullDate);
// };

// function setTime () {
//     let time = new Date().toLocaleTimeString();
//     setOutput(time);
// };

// function setDate () {
//     let date = new Date().toLocaleDateString();
//     setOutput(date);
// };

// btnFull.onclick = () => setFullDate();
// btnDate.onclick = () => setDate();
// btnTime.onclick = () => setTime();







