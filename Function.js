//Defining the function
function sayhello(fname) {
    console.log(`Hello, ${fname}!`);
}

const sayhellotwo = function(fname) {
    console.log(`Hello, ${fname}!`);
}
let fname = "Daksh";

//Calling the function
sayhello("Srivastava");
sayhello(fname);
sayhellotwo("Kumar");

//Function ref
sayhello;

console.log(null === 0);

let greet = function(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet("Daksh"));
console.log(greet());


