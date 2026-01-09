//All Console Functions
console.log("This is the First.js file.");
console.info("First.js is executing.");
console.error("This is an error message from First.js.");
console.warn("This is a warning from First.js.");
console.debug("Debugging information from First.js.");

//Variable Basic
a = 2;
b = 3;
console.log(a + b);

//let func and backticks
let fname = 'Daksh'; 
let lname = 'Srivastava';
let mname = `Kumar`;
let greet = ` "Hello" ${fname}`; 
console.log(greet);

let age;
let job = null;
console.log(age);
console.log(job);

//Boolean
let isloggedin = false;
console.log(isloggedin);

//Object
let name = {
    firstName: 'Daksh',
    lastName: 'Srivastava',
    age: 18,
    subjects:{
        subject1: 'C++',
        subject2: 'JavaScript'
    }
};
console.log(name);
console.log(name.firstName);

//if else
    let age_year = Number(prompt("Enter your age: "));
if (age_year >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("Not eligible to vote");
}

alert("This is an alert from First.js");
prompt("Enter your name:","Daksh");
confirm("Do you want to proceed?");

console.log(typeof NaN);