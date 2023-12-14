//Theory
// const array = [1, 2, 3, 5, 20, 42];
// const arrayStrings = ['a', 'b', 'c'];
// const array1 = new Array(1,2,3,5,10);
// // console.log(array1);
// // console.log(array1.length);
// // console.log(array1[1]);

// //last elem array

// console.log(array[array.length - 1]);
// array[0] = 'hi';
// console.log(array);


const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

// console.log(inputElement.value);

const notes = ['notes 1', 'notes 2', 'notes 3'];

// function render () {
//     // for (let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes[i]));
//     // };
//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend',getNoteTemplate(note));
//     }
// };

// render();

createBtn.onclick = function () {
    if(inputElement.value.length === 0) {
        return
    };
    let newNote = {
        title: inputElement.value,
        completed: false
    }
    notes2.push(newNote);
    render(notes2);
    inputElement.value = '';
}

// function getNoteTemplate (title) {
//     return `
//         <li class="list-group-item d-flex justify-content-between aling-items-center rounded-2">
//             <span>${title}</span>
//             <span>
//                 <span class="btn btn-small btn-success">
//                     <i class="fa-solid fa-check"></i>
//                 </span>
//                 <span class="btn btn-small btn-danger">
//                     <i class="fa-solid fa-xmark"></i>
//                 </span>
//             </span>
//         </li>
//         `
// }


// Object theory

// const person = {
//     firstName: 'Hanna',
//     lastName: 'Pet',
//     year: 1996,
//     married: true,
//     languages: ['ru', 'en', 'de'],
//     getFullName: function() {
//         console.log(person.firstName)
//     }
// };
// console.log(person.lastName);
// console.log(person['languages']);
// const key = 'married';
// console.log(person[key]);

const notes2 = [{
    title: 'notes 1',
    completed: false
},
{
    title: 'notes 2',
    completed: true
},
];

function render () {
    listElement.innerHTML = '';
    if(notes2.length === 0){
        listElement.innerHTML = '<p> Not notes </p>';
    };
    for (let i = 0; i < notes2.length; i++) {
        listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes2[i], i));
    };
    // for (let note of notes2) {
    //     listElement.insertAdjacentHTML('beforeend',getNoteTemplate(note));
    // }
};

render();

listElement.onclick = function (event) {
    // console.log(event.target.dataset.index, event.target.dataset.type);
    if(event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index);
        const type = event.target.dataset.type;

        if(type === 'toggle') {
            console.log('toggle', index);
            notes2[index].completed = !notes2[index].completed;
        } else if (type === 'remove') {
            console.log('remove', index);
            notes2.splice(index,1);
        }
        render();
    };
};

function getNoteTemplate (note, index) {
    return `
        <li class="list-group-item d-flex justify-content-between aling-items-center rounded-2">
            <span class="${note.completed ?'text-decoration-line-through' : '' }">${note.title}</span>
            <span>
                <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" >
                    <i class="fa-solid fa-check" data-index="${index}" data-type="toggle"></i>
                </span>
                <span class="btn btn-small btn-danger">
                    <i class="fa-solid fa-xmark" data-index="${index}" data-type="remove"></i>
                </span>
            </span>
        </li>
        `
}