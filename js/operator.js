
// ----------- Assignment operator

let firstName = "John"
let num1 = 50
num1 += 50 // num1 = num1 + 50
let num2 = 110
num2 = -10 // num2 = num2 - 10
console.log(num1, num2)

// --------------String 
let fullname = "sorn"
 fullname += firstName

console.log(fullname)

// ----------array --- can store multiple variable in single name 
let student1 = {
    fullname: "sreyly",
    profile: "https://cdn.pixabay.com/photo/2022/09/30/12/56/cat-7489398__340.jpg",
    age: 20,
    favorite: "play card",
}
let student2 = {
    fullname: "sreyka",
    profile: "https://cdn.pixabay.com/photo/2022/09/30/12/56/cat-7489398__340.jpg",
    age: 20,
    favorite: "play card",

}
let student3 = {
    fullname: "ly",
    profile: "https://cdn.pixabay.com/photo/2022/09/30/12/56/cat-7489398__340.jpg",
    age: 20,
    favorite: "play card",

}
let student4 = {
    fullname: "liza",
    profile: "https://cdn.pixabay.com/photo/2022/09/30/12/56/cat-7489398__340.jpg",
    age: 20,
    favorite: "play card",

}
let products =[student1, student2, student3, student4]

let ROW = document.querySelector(".row")

//loop to iterate 
//  products.map(product => ROW.innerHTML += `
//     <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//         <div class="card">
//             <img src=${product.profile} class="card-img-top" alt"...">
//             <div class="card-body">
//                <p class="card-text">${product.favorite}</p>
//             </div>
//         </div>
//     </div>

// `)
console.clear()
// Arithmethic operator --- (+,-,/,*,++,--,**)

let age = 25
let myfriendage = ++age // increase value 1 more and then assign to myfriend
console.log(`my friend age: ${myfriendage}, and my age is ${age}`)

let result = 3**3
console.log(result)
// document.write(`
//   <h1>let result = 3**2 is equal to super 3 <sup> 2</sup> </h1>
// `)

//comparison Operator (==, !=, > , < , >=, <= ===)

let a = 50;
let b = "50";

if (a===b){
    console.log ("yes, it is  equal to both type and value")
}
else{
    console.log( "no, it is not equal to both type and value")
}

// logical operator 
const x = 5 , y = 3
// (x > 3) && (y < 5) true , && = all condition must come true in order to activate
console.log((x > 6) && (y < 5))

// ternary operator 
// codition ? expression_1 : expression_2
let Age = 18

let output =  Age >= 18 ? " you are legal to vote ": "you are not legal to vote "
console.log(output)

// ------- use case for ternary operator -----

let loading = false 

let noData = document.querySelector(".noData")
let hasData = document.querySelector('.hasData')

let feedback = prompt("Do you wanna see the data of card?")
console.log(feedback)

feedback !=  "yes" ? noData.innerHTML +=`
<div class="card" aria-hidden="true">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX///+hoaGenp6ampr39/fHx8fOzs7j4+P8/Pyvr6/d3d3FxcX29va6urqYmJjs7OzU1NSlpaW1tbWtra3n5+e/v78TS0zBAAACkUlEQVR4nO3b63KCMBCGYUwUUVEO6v3fagWVY4LYZMbZnff51xaZ5jON7CZNEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQb5tvI8qzX4/nH84XG5Upfj2ir2V2E5fZ/XpIX9saMnhkYLIkiyRJjdgMoiEDMmiQgfwM8rSu77ew2wnPoLTmwdZBs0J2BuXrYckcQm4nOoP+WcmWAbcTnUHZPy9eA24nOoN7n0HI54ToDM5k8PjluwyqgNuJzqDoaugPg8gWZ4noDAYLwuIg75fLeeHHsjNIzrZJwWwW+0DNsmEWPjiEZ5AcD8ZUu8VZ8HyQMifvBdIz+PS33i8adu+7Qn4Gn1Tdupl7rlCfQb9seosK7RkcBy1o30iVZ5CPOtDW3WhQnsF13IV3v0p3BqfJRoSpXVepzmA/24+yqeMyzRm4tqOs44lSUwa3yfgOri25av5CPRnklR33VlPnrqSZV09qMsiqSWV082xOz1uPajJ49pTM/f115k6guWa6JGjJ4N1lt8fXN2rv/vysjFaSQdFXBc/KKF04ptFPliclGVR9Bu27XCyeVOkmy5OODAZN9rYyyip/AIPJ8qIig+PoXbf7YdPdncFoSdCQQT4ZceV+MhiFMBy0hgyu0yGvOLI17KwpyGBaHK5jtt0N5GcwLw7XZdB31sRn8O+ziqYro8Vn4CwOV+k6a9Iz+PwRsKC7h+gMfMXhKu/OmuwM/MXhKq8yWnYG/uJw5Uxoy2jRGZTBZ/jboxuSM1guDtdNhKazJjiDbNMe0AxzKUVnkO+jEJxBxNtJzWCTxlNLzSB8KehJ/H+mJGYAjaDjzj9SnHZRuXZiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECXP1XDHv7U4SNFAAAAAElFTkSuQmCC" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>
`
:
products.map(product => hasData.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <img src=${product.profile} class="card-img-top" alt"...">
            <div class="card-body">
               <p class="card-text">${product.favorite}</p>
            </div>
        </div>
    </div>

`)
