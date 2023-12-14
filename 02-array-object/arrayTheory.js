let names = ['Hanna', 'Petar', 'Marry', 'Irina', 'Max', 'David'];

//Array has methods 
//1 add new element to the end of array
// names.push('Alena');
// console.log('Names ', names);

//2 add new element to start of array
// names.unshift('Alena');
// console.log('Names ', names);

// 3 remove first element from the array and return us this first element;
// let firstNAme = names.shift();
// console.log('Names ', names, firstNAme);

//4 remove last element from the array and return us this last element;
// let lastName = names.pop();
// console.log('Names ', names, lastName);

// 5 reverse this method change order in the array; Be careful! the array has been mutated.
// console.log(names.reverse());

// 6 array.toReversed() return new arr, but don't change origin array; 
// console.log(names.toReversed())
// console.log(names);

//7 sort Be careful! the array has been mutated.
// let letters = ['e', 'c', 'd', 'b', 'a'];
// console.log(letters.sort(function(a,b){
//     return a.charCodeAt(0) - b.charCodeAt(0);
// }));
// console.log(letters);

//8 new method toSorted();
// console.log(letters.toSorted());
// console.log(letters);

//9 splice this method takes 1st: 1-index of element (point start) and 2d: how many elements do we want to remove? 
// return us new arr ; it has removed items.Be careful! the array has been mutated.
// console.log(names.splice(2,1));
// console.log('Names ', names);

//10 new method toSpliced();
// console.log(names.toSpliced(0,2));
// console.log('Names ', names);

// 11 indexOf();if this method didn't find the element it return us -1!!!!!
// const greateWoman = 'Marry';
// const index = names.indexOf(greateWoman);
// console.log('index: ' , index, names[index]);

// const greateWoman2 = 'Helen';
// const index2 = names.indexOf(greateWoman2);
// console.log('index: ' , index2, names[index2]);

// 12 with() new method return us new array, didn't change old array. 
// const manName = 'Max';
// const index = names.indexOf(manName);
// console.log('index: ' , index);
// const newNames = names.with(index, 'Danis');
// console.log(names, newNames);

//13 map();!!!! names didn't change any things, always return us new array!!!!!!
// const capitalNames = names.map(function(name){
//     // const newName = name + '!'
//     //if we didn't write return js put default <return value=undefined> so we will have array with values(undefined); 
//     return name.toUpperCase();
// });

// const capitalNames = names.map(function(name, index){
//     if(index === 1){
//         return 'Peter Pet'
//     }
//     return name
// });

// console.log(names);
// console.log(capitalNames);

// 14 includes(); return true or false
// console.log(names.includes('Petar'));

const people = [
    {
        name: 'Hanna',
        budget: 4200
    },
    {
        name: 'Petar',
        budget: 6000
    },
    {
        name: 'Max',
        budget: 2000
    },
    {
        name: 'Marry',
        budget: 12000
    }
];

//task find element in array which has budget === 12000
// 15 find();
// let findPerson = people.find(function(person){
//     return person.budget === 12000;
// });

// console.log(findPerson);

// const findPerson = people.find((person) => person.budget === 12000);
// console.log(findPerson);

// 16 findIndex();return us index which has a object we needed if it doesn't have return -1
// const findIndex = people.findIndex((person) => person.budget === 12000);
// console.log(people[findIndex]);

//17 filter
// const filtered = people.filter((person) => person.budget >= 5000 );
// console.log(filtered);

//task we have to count people budget which > = 5000;
// const sumBudget = people.filter((person) => person.budget >= 5000).reduce(function(accumulator,person){
//     return accumulator + person.budget
// },0);
// console.log(sumBudget);

// 18 reduce(); takes 2 params (1-func;2-initial value(it will be a number, a obj, an arr, a str))
// const sumBudget = people.filter((person) => person.budget >= 5000).map(p => p.budget).reduce((acc,p) => acc + p,0);
// console.log(sumBudget);

//task revert string
// const str = 'Hello, what is up?';
// const reversed = str.split('').toReversed().join('');
//.stlit(); change string to array 
// console.log(str.split('')); // return ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'h', 'a', 't', ' ', 'i', 's', ' ', 'u', 'p', '?']
// .join() The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// console.log(reversed);







