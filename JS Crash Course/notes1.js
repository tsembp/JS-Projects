/* VARIABLES */
// let: can re-assign values whereas const cannot
// const: constant


/* PRIMITIVE DATA TYPES */
// String, Numbers, Boolean, null, undefined, Symbol
const name = "Panagiotis"; // " " or ' ' will work
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // equal to const z = undefined


/* STRINGS */
console.log(`My name is ${name} and I am ${age} years old.`); // or same as java with +

// methods
const s = "Testing String";
console.log(s.substring(0,5)); // charAt(5) is not included


/* ARRAYS */
const fruits = ["apple", "pear", "banana", 10, true];
fruits.push("mango"); // adds mango at end of fruits
fruits.unshift("orange"); // adds orange at begining of fruits
const index = fruits.indexOf("oranges");


/* OBJ LITERALS */
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "badminton"],
    address: { // we can have object literal inside another obj lit
        street: "50 main St",
        city: "Boston",
        state: "MA"
    }
}

const { firstName, lastName, address: { city }} = person
console.log(city);

person.email = "johndoe@gmail.com"; // automatically addds email to person obj
console.log(person);

// array of object literals
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: true
    }
];
console.log(todos[1].text); // to print Meeting with boss

// convert todos to json
const todoJSON = JSON.stringify(todos);


/* LOOPS */
// for and while same as java
for(let todo of todos){ // for each todo in todos
    // statement
}

// forEach
todos.forEach(function(todo){ 
    // statement for each todo
});

// map - returns array
const todoText = todos.map(function(todo) {
    return todo.text;
});

// filter - creates new table based on filters
const filtered = todos.filter(function(todo){
    return todo.isCompleted == true; // get only completed todos
}).map(function(todo){
    return todo.text; // get text of filtered todos
});


/* CONDITIONALS */
// == compares value
// === compares data type


/* OOP */
function Person(firstName, lastName, dob){ // constructor function
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${firstName}  ${lastName}`;
    }
}

const person1 = new Person("John", "Doe", "6-4-2004"); // instanciate object
console.log(person1.dob);
console.log(person1.getBirthYear());

// classes - same as above but preetier way
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName = function(){
        return `${firstName}  ${lastName}`;
    }
}