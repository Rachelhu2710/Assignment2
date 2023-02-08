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
  let price=product.price
  // let id = ID
  // let UId=UID
  products.innerHTML+=`<div class="product"> <img class="ip-img"  src="${image}" alt="p-img">

<div class="pd"> 
${name}\n
Price:$${price}\n
Color:${color}\n
Size:${size}\n
<button class="i-button">+</button>
<button class="i-button">-</button>
<input type="number" class="number-box" value="${quantity}" min="1" max="5"/>
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