

let product = document.getElementById("product")



let cartData= JSON.parse(localStorage.getItem("cartData")) || []
window.onload= showData(data);
window.onload= showCart(cartData);


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






function showData(data){

  product.innerHTML = ""

  data.map((ele) => {

    product.innerHTML +=`
         <div class="col  ">
                <div class="card h-100  " >
                    <img src="${ele.image}" class="img-fluid " style="height:300px" alt="${ele.title}">
                    <div class="card-body h-100 d-flex justify-content-around flex-column">
                      <h5 class="card-title">${ele.title}</h5>
                      <p class="card-text">Category : ${ele.category}</p>
                     
                      <h5 class="card-text text-danger">Rs.${ele.price}</h5>
                      <a href="#" onclick="addCart(${ele._id})" class="btn btn-primary w-100 my-3">Buy Now</a>
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
  // console.log(id)
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

// console.log(cartData.lenght)
}

document.getElementById("cartLen").innerHTML = cartData.length













