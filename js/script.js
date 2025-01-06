

let product = document.getElementById("product")

activeUser = JSON.parse(localStorage.getItem("activeUser"))

let cartData= JSON.parse(localStorage.getItem("cartData")) || []

window.onload= showData(data);
window.onload= moreModal(data);


document.getElementById("cartLen").innerHTML = cartData.length





let auth = document.getElementById("auth")

auth.innerHTML = `

${

  activeUser
  ?

  `
    
                        <li><a class="dropdown-item"> <b>Name : </b>${activeUser.name}</a></li>
          <li><a class="dropdown-item" > <b>Email : </b>${activeUser.email}</a></li>
          <li><a class="dropdown-item" ><b>Number : </b>${activeUser.phone}</a></li>
             <li><hr class="dropdown-divider"></li>
             <li><a class="dropdown-item" >
             <button class="btn btn-danger w-100" onclick="logOut()">
  LogOut
</button>
             
             
             </a></li>

             
                 

  `
:

`
   <div style="width:300px">
                    <li><h4>No User Found</h4></li>
                    <li><p>Login First</p></li>
                      <li><hr class="dropdown-divider"></li>
                    <li>     <a href="register.html"><button  class="btn btn-danger w-100 mb-2">👤SignIn</button></a></li>
                    <li>   <a href="login.html" ><button  class="btn btn-warning w-100">👤Login</button></a></li>
                 
   </div>
             

`
}


`

function logOut(){

   localStorage.removeItem("activeUser");
   location.reload();
}




document.getElementById("search").addEventListener("keyup",function(e){

  let val = e.target.value.toUpperCase()

  let searchData = data.filter((ele) =>  !ele.title.toUpperCase().indexOf(val) || !ele.category.toUpperCase().indexOf(val))


  showData(searchData)
})


function lsort(){
  let sortedData = data.sort((a,b) => a.price - b.price) 
  showData(sortedData)
}
function hsort(){
  let sortedData = data.sort((a,b) => b.price - a.price) 
  showData(sortedData)
}

function electronic(){

  let category = data.filter((ele) => ele.category == "Electronics" )
  showData(category)
}
function homeDecor(){

  let category = data.filter((ele) => ele.category == "Home Decoration" )
  showData(category)
}
function fashion(){

  let category = data.filter((ele) => ele.category == "Fashion" )
  showData(category)
}
function equipment(){

  let category = data.filter((ele) => ele.category == "Equipments" )
  showData(category)
}
function beautyProd(){

  let category = data.filter((ele) => ele.category == "Beauty Product" )
  showData(category)
}

function checkData(id){
  let cartData= JSON.parse(localStorage.getItem("cartData")) || []

  cartData = cartData.filter((ele) => ele._id == id)

  return !cartData[0]
 
}


function checkQuentity(id){

 let cData = cartData.filter((ele)=> ele._id == id)

return cData[0].quentity
 
}

function inCount(id){
  cartData =cartData.map((ele) =>{
    if(ele._id == id){
      ele.quentity += 1;

    }
    return ele
  })
  setcartData(cartData)
  showData(data)
  showCart(cartData)

 
}
function decCount(id){
  cartData =cartData.map((ele) =>{
    if(ele._id == id){
      if(ele.quentity > 1){
        ele.quentity -= 1;
      }
      else{
        return ele =null
      }
    }
    return ele
  }).filter((ele) => ele!=null)

  setcartData(cartData)
  showData(data)
  showCart(cartData)


}



function showData(data){

  product.innerHTML = ""

  data.map((ele) => {

    product.innerHTML +=`
         <div class="col-lg-3  col-md-4 col-sm-6 col-6 " >
                <div class="card h-100  " >
                <div class="ratio ratio-4x3">
                    <img src="${ele.image}" class="img-fluid " style="" alt="${ele.title}">
                </div>
                    <div class="card-body h-100 shadow py-0 d-flex  justify-content-end   flex-column ">
                      <h5 class="card-title">${ele.title}</h5>
                      <p class="card-text">Category : ${ele.category}</p>
                     
                      <h6 class="card-text text-danger">💲<span class="text-decoration-line-through">${ele.oldPrice}</span> ${ele.price}</h6>
        <div class="">
        <h5>
<div class="rating">
  <input value="5" name="rating" id="star5" type="radio">
  <label for="star5"></label>
  <input value="4" name="rating" id="star4" type="radio">
  <label for="star4"></label>
  <input value="3" name="rating" id="star3" type="radio">
  <label for="star3"></label>
  <input value="2" name="rating" id="star2" type="radio">
  <label for="star2"></label>
  <input value="1" name="rating" id="star1" type="radio">
  <label for="star1"></label>
</div>
</h5>
                     
        
          ${!checkData(ele._id) && activeUser ? `  
  <div class="btn-group w-100 mt-2 mb-3 " role="group" aria-label="Basic example">
  <button type="button" class="btn btn-dark btn-sm"  onclick="inCount(${ele._id})">
    <i class="ri-add-fill  "></i></button>
  <button type="button" class="btn btn-outline-dark disabled btn-sm">



  ${checkQuentity(ele._id)}
    </button>
  <button type="button" class="btn btn-danger btn-sm" onclick="decCount(${ele._id})"><i class="ri-subtract-fill"  ></i></button>
</div>
        ` : ` 
            
              <div class="row mb-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 gy-1">
                <div class="col ">
  
                <button class="cartBtn rounded" onclick="addCart(${ele._id})" class="btn btn-warning w-100">
  <svg class="cart" fill="white" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
  Buy Now
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" class="product"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"></path></svg>
</button>
                </div>
                <div class="col ">
                 <button type="button" onclick="moreModal(${ele._id})" class="btn btn-secondary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                       <span>More Info</span>
                      </button>
                </div>
              </div>
       
        
        
       
        `}
                      
                
        </div>
                    </div>
                  </div>
            </div>
    
    `
})
}





function moreModal(id){

   
  let modalBody = document.getElementById("modalBody")

  modalBody.innerHTML = " "
  
   data.filter((ele) => ele._id == id).map((ele) =>   {

  modalBody.innerHTML = `
           <div class="row gy-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1  h-100">
          <div class=" border">
            <div class="box">
              <img src="${ele.image}" class="img-fluid " alt="${ele.title}">
            </div>
          </div>
          <div class=" ">
            <div class="box  px-5 h-100">
              <div class="title mt-5">
                <h1 class="card-title">${ele.title}</h1>
              </div>
              <hr>
              <div class="category mt-4">
        <h4 class="card-text">Category : ${ele.category}</h4>
              </div>
              <hr>
              <div class="category mt-4">
           <h4 class="card-text">Brand : ${ele.brand}</h4>
              </div>
              <hr>
              <div class="price mt-4">
              <h4 class="card-text"> Price:💲<span class="text-decoration-line-through">${ele.oldPrice}</span> ${ele.price}</h4>
              </div>
              <hr>
              <div class="price mt-4">
              <h4 class="card-text"> description: <span>${ele.des}</span></h4>
              </div>
              <hr>
            </div>
          </div>
        </div>

      `
    })
}


























function setcartData(cd){
localStorage.setItem("cartData",JSON.stringify(cd))
}




function addCart(id){
  
 if(activeUser){
  let addCartData = data.filter((ele) => ele._id == id)

  addCartData.map((ele) => {
    if(ele._id == id){
      ele.quentity = 1 
    }
    return ele
  })

cartData = [...cartData, ...addCartData]

// console.log(cartData)

setcartData(cartData)

// console.log(cartData)


document.getElementById("cartLen").innerHTML = cartData.length
showData(data)
// console.log(cartData.length)
 }

 else{

  location.href = "register.html"
 }

}

document.getElementById("cartLen").innerHTML = cartData.length
















