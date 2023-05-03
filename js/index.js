// code variable 
// variable
var x = 5;
var y = 900;

console.log(x+y);


let c; // declare variable named: a
c = 100; // assign value: 100 to variable: a
c = 200; // re-assign value to 200
c = "apple" // re-sign value to apple 
console.log(c)

// constant: a special variable that have final value (cannot change)
const school_URL = "istad.co"
// school_URL = "istad.co"


// DOM: document object model ( bridge between html file and user interface )
// DOM: manipulate user interface by using DOM methods
let HEADING = document.getElementById('heading')
console.log(HEADING)
HEADING.innerHTML = "hello friends"
HEADING.setAttribute("class", "text-darkblue")


// document.querySelector
document.querySelector("#heading")