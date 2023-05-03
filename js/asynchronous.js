
function welcomemessage(name){
    console.log(`welcome, ${name}`)
}
let firstname = "ream"
welcomemessage(firstname)
// process synchronous 
let row = document.querySelector(".row")
// fetch api: fetch()
let productapi = 'https://api.escuelajs.co/api/v1/products'
function getallproduct(){
    fetch(productapi, {
        method: 'get' // optional can put method or not , but if other APi strict it better to use method 
    })
    .then(resp => resp.json())
     .then(response => response.map(res => row.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
   <div class="card border-0 shadow-sm h-100" >
        <img src=${res.images[0]} class="card-img-top" alt="...">
       <div class="card-body">
          <p class="card-text">${res.title}</p>
        </div>
     </div>
 </div>
     ` ))
 }
 getallproduct()


let basepath = "https://image.tmdb.org/t/p/w440_and_h660_face/"
let moviesapi = "https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1"
function getpopularmovies(){
       fetch(moviesapi, {
        method: 'get'
       })
       .then (resp => resp.json())
       .then (resp=> resp.results.map(res => row.innerHTML += `
       <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
       <div class="card border-0 shadow-sm h-100" >
           <img src=${basepath+res.poster_path} class="card-img-top" alt="...">
           <div class="card-body">
             <p class="card-text">${res.title}</p>
           </div>
         </div>
   </div>
       `))
}
getpopularmovies()


let 
const fetchuser = async () => {
    const resp = await fetch ('https://api.escuelajs.co/api/v1/users')
    return resp.json()
}
fetchuser()
.then (resp => console.log(resp))
