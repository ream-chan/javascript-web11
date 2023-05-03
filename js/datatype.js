// data type 
// -------1. string ------
let firstname = "Panha"
let lastname = "Long"
let favorite = 'research and gaming'

let selfintroduction = `hi, im khmer. my name is, 
${lastname} ${firstname}, my favourite is ${favorite}.`


console.log(selfintroduction)
console.log(typeof (firstname))
let numberofapple = "1800"


// -------2. number --------
let myapple = 90
console.log(typeof (numberofapple))
let result = numberofapple / myapple
// let result = numberofapple - myapple
// let result = numberofapple / myapple
// let result = numberofapple * myapple
console.log('---------total apple ', typeof (result), result, '----------')


// backtick
let header = `
     <h1>welcome, developer cambodia </h1>
     <h2>welcome friends </h2>
  `
document.querySelector('.heading').innerHTML = header

// 2. number in detail
let num1 = 40.5
let num2 = "4"
let num3 = 5e-5 // 5 * 10^-5 = 0.00005
let num4 = 5e5 // 5 * 10^5 = 500000
let num5 = 5_000_000
let output = num1 / num2
console.clear()
console.log(output)

// bigint


// boolean (true or false) when use for condition
let loading = true
loading = false

if (loading) {
    // show skeleton
}
else {
    //show real data 
}

// undefined
let age
console.log(age)

// null - empty object

// object 

let student = {
    fullname: "sreyly",
    profile: "https://cdn.pixabay.com/photo/2022/09/30/12/56/cat-7489398__340.jpg",
    age: 20,
    favorite: "play card",

}
console.log(student.fullname, student.age, student.favorite)
//   student = null
console.log(student)

document.querySelector('.row').innerHTML = `
     <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="card border-0 h-100 shadow">
        <img src = ${student.profile} class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${student.fullname}</p>
      </div>
     </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="card border-0 h-100 shadow">
        <img src = ${student.profile} class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${student.fullname}</p>
      </div>
     </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="card border-0 h-100 shadow">
        <img src = ${student.profile} class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${student.fullname}</p>
      </div>
     </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="card border-0 h-100 shadow">
        <img src = ${student.profile} class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${student.fullname}</p>
      </div>
     </div>
    </div>
  `
