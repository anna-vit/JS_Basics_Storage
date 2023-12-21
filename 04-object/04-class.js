class Students {
    constructor (name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    };
    getInfo() {
        console.log(this);
        return `${this.name}, ${this.age}, ${this.grade}`
    }
}
const table = document.getElementById('table');
const inputAdd = document.getElementById('input-add');
const subtitle = document.getElementById('subtitle');
const addBtn = document.getElementById('add-btn');
// console.dir(subtitle);



let student1 = new Students('Hanna', 20, 105);
let student2 = new Students('Mary', 25, 155);

const arrStudent = [];
arrStudent.push(student1, student2);


function renderTable () {
    table.innerHTML = '';
    if(arrStudent.length > 0) {
        arrStudent.map((student, index) => {
            table.insertAdjacentHTML('beforeend',getTableTemlate(student, index));
        });
    }else { 
        subtitle.innerHTML = 'Add students';
    }
};

renderTable();

function deteteStudent(event) {
    console.log('hi delete', event)
    // if(event.target.id ){}
    arrStudent.forEach((student, index) => {
        if(event.target.id === `delete-btn-${index}`){
            console.log('Delete me', index);
            arrStudent.splice(index,1);
            renderTable();
        }
    });
}

function getTableTemlate (student, index) {
    return `
        <tr id="${index}">
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>
                <button class="btn btn-light text-center delete-btn" id="delete-btn-${index}">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            <td>
        </tr>
        `
};

function getInputValue(elementId) {
    return document.getElementById(elementId).value;
}

function addStudent() {
    const newName = getInputValue('student-name');
    const newAge = getInputValue('student-age');
    const newGrade = getInputValue('student-grade');
    const newStudent = new Students(newName, +newAge, +newGrade);
    arrStudent.push(newStudent);
    console.log(arrStudent);
    renderTable();

};


addBtn.onclick = addStudent;

table.addEventListener('click',deteteStudent);




