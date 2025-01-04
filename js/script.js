

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
                    <img src="${ele.image}" class="img-fluid " style="height:300px" alt="${ele.title}">
                    <div class="card-body py-0 h-100 d-flex justify-content-around flex-column ">
                      <h5 class="card-title">${ele.title}</h5>
                      <p class="card-text">Category : ${ele.category}</p>
                     
                      <h5 class="card-text text-danger">💲<span class="text-decoration-line-through">${ele.oldPrice}</span> ${ele.price}</h5>
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
            <button type="button"   onclick="addCart(${ele._id})" class="btn btn-primary w-100">Buy Now </button>
                
                </div>
                <div class="col ">
                 <button type="button" onclick="moreModal(${ele._id})" class="btn btn-secondary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                       More Info
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
















