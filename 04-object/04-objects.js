const person = {
    name: 'Anna',
    age: 27,
    isBloger: true,
    languages: ['ru', 'en'],
    address: {
        city: 'Toronto',
        street: 'Prime'
    },
    'complex key' : 'complex value',
    [1 + 2]: 'computed value',
    greet() {
        console.log(this);
        console.log('greet from person')
    },
    arrow: () => {
        console.log('hello arrow');
        console.log(this)
    },
    info() {
        console.log('Person name : ', this.name)
    }
};
// console.log(typeof person); // object
// // console.log(person);
// person.greet();
// person.info();
// person.arrow(); // global object window arrow function doesn't create own context, they relate to the context in which they were defined 
// delete person.address

//Destructoring
const name = 'Mary';

// const {age, name, languages} = person; Error but
// console.log(age, name, languages);
// const {age, name: firstName, languages} = person;
// console.log(age, firstName, languages);

// Iteration Objs

// for (let key in person) {
//     if(person.hasOwnProperty(key)) {
//         console.log(key, person[key]);
//     };
// }

const logger = {
    keys() {
        console.log('Object keys', Object.keys(this));
    },
    keysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log('Key :', key);
            console.log('Values :',this[key]);
        })
    }
};
//all note bind
// const bound = logger.keysAndValues.bind({a:1, b:2, c:10});
// bound();
//short note bind 
// logger.keysAndValues.bind({a:1, b:2, c:10})();
// logger.keys.call(person);
// logger.keys.apply(person);

const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
//Object.create()
const barista = Object.create(job);

barista.position = "barista";
console.log(barista);
barista.showDetails();

const employees = {
    boss: 'Michael',
    secretary: 'Pam',
    sales: 'Jim',
    accountant: 'Oscar'
};

//Object.keys()
const keys = Object.keys(employees);

console.log(keys);

Object.keys(employees).forEach(key => {
    let value = employees[key];
    console.log(`${key}: ${value}`);
});
//length
const length = Object.keys(employees).length;
console.log(length);

//
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};

// Get all values of the object Object.values()
const session2 = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};
const values = Object.values(session2);

console.log(values);