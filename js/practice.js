// DOM method or we use DOM to manipulate or control html and css etc... by using javascript 

let Heading = document.getElementsByClassName("#heading") // Heading start with H thom cuz we dont want to mix it from heading (in html) or it wont work when it mixed.
heading.innerHTML = "hello javascript"
console.log(Heading)

// important note: the fomula above only works by using id from html not class , so in js file we use "#" for id