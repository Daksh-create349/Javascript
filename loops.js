// For loop
for (let i = 1; i < 5; i++) {

    console.log(`The number is ${i}`);
    if (i == 2) continue;
}



let lname = "Daksh";
let output = "";

for (let i = 0; i < lname.length; i++) {
    output += i + " ";
}

console.log((output));

// While loop
let n = 1;
while (n < 6) {
    console.log(n);
    n++;
}
 
// Do while loop

do {
    console.log(n);
    n++;
} while (n < 6); 