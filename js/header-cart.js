let products=document.querySelector("#products")
let cart=JSON.parse(localStorage.getItem("cart"))
// console.log(document.querySelector("#products"))
if(cart.length>0){
cart.forEach(product => {
  let color = product.Color
  let image = product.Image
  let name = product.Name
  let size = product.Size
  let quantity=product.Quantity
  let price=product.Price
  // let id = ID
  // let UId=UID
  products.innerHTML+=`<div class="product">
  <img class="ip-img"  src="${image}" alt="p-img">
<div id="info">
<p id="name">${name}</p>
<p id="price">Price:$${price}</p>
<p id="color">Color:${color}</p>
<p id="size5">Size:${size}</p>
</div>
</div>
<div id="i-d-b">
<button class="i-button">+</button>
<input type="number" class="number-box" value="${quantity}" min="1" max="5"/>
<button class="i-button">-</button>

</div>  
  
  </div>`
  
});
$(function() {
  $(".i-button").on("click", function() {
    var $button = $(this);
    var $parent = $button.parent(); 
    console.log($parent)
    var oldValue = $parent.find('.number-box').val();
 
    if ($button.text() == "+") {
        if(oldValue<5){
       var newVal = parseFloat(oldValue) + 1;
        }
        else{
             newVal = 5;
        }
     } 
     
     
     else {
        // Don't allow decrementing below zero
       if (oldValue > 1) {
         var newVal = parseFloat(oldValue) - 1;
         } 
         
         else if(oldValue==0)
         {
        
         }
         
         else {
         newVal = 1;
       }
       }
     $parent.find('.number-box').val(newVal);
  });
 });
}


function openNav() {
  document.getElementById("mySidepanel").style.width = "20%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";}




let drpbutton= document.querySelector(".dropdown1")
drpbutton.addEventListener("click",function(){

  let isloggedin = localStorage.getItem("isloggedin")
  
  if(isloggedin){

    document.querySelector(".dropdown-content2").style.display="flex"
  
    
  }
  else{
    document.querySelector(".dropdown-content1").style.display="flex"
    }

  })

