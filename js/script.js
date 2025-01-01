

let product = document.getElementById("product")



let cartData= JSON.parse(localStorage.getItem("cartData")) || []

window.onload= showData(data);
window.onload= moreModal(data);


document.getElementById("cartLen").innerHTML = cartData.length


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


function showData(data){

  product.innerHTML = ""

  data.map((ele) => {

    product.innerHTML +=`
         <div class="col  " >
                <div class="card h-100  " >
                    <img src="${ele.image}" class="img-fluid " style="height:300px" alt="${ele.title}">
                    <div class="card-body h-100 d-flex justify-content-around flex-column">
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
                     
        
          ${!checkData(ele._id) ? `  
  <div class="btn-group w-100 mt-2" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-dark btn-sm"  onclick="inCount(${ele._id})">
    <i class="ri-add-fill  "></i></button>
  <button type="button" class="btn btn-outline-dark disabled btn-sm">
    ${ele.quentity}
    </button>
  <button type="button" class="btn btn-danger btn-sm" onclick="decCount(${ele._id})"><i class="ri-subtract-fill"  ></i></button>
</div>
        ` : ` <button type="button"   onclick="addCart(${ele._id})" class="btn btn-primary my-3">Buy Now </button>
        
        <button type="button" onclick="moreModal(${ele._id})" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                       More Info
                      </button>
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
           <div class="row gy-3 h-100">
          <div class="col-5 border">
            <div class="box">
              <img src="${ele.image}" class="img-fluid " alt="${ele.title}">
            </div>
          </div>
          <div class="col-7 ">
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

document.getElementById("cartLen").innerHTML = cartData.length
















