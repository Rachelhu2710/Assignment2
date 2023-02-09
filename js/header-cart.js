let products=document.querySelector("#products")
let cart=JSON.parse(localStorage.getItem("cart"))
// console.log(document.querySelector("#products"))

cart.forEach(product => {
  let color = product.Color
  let image = product.Image
  let name = product.Name
  let size = product.Size
  let quantity=product.Quantity
  let price=product.Price
  let id = product.ID
  let UId=product.UID
  let pc=product.PRODUCTCODE

  products.innerHTML+=
  `<div class="product" data-id="${id}" data-pc="${pc}" data-size="${size}" data-quantity="${quantity}" data-price="${price}"  data-uid="${UId}">
  
      <img class="ip-img"   src="${image}" alt="p-img">
      <div id="encloser">
      <div id="info">
      <p id="name">${name}</p>
      <p id="price">Price:$${price}</p>
      <p id="color">Color:${color}</p>
      <p id="size5">Size:${size}</p>
      <p id="total-price">  Total price : $${price*quantity}</p>
     </div>     
 
      <div id="i-d-b">
        <button id="add-btn" class="i-button">+</button>
        <input type="number" class="number-box" value="${quantity}" min="1" max="5"/>
        <button id="minus-btn" class="i-button">-</button>
      </div>
    </div>
 </div>  
  
 `
  
});


$(function() {
 
  $(".i-button").on("click", function() {
    var $button = $(this);
    var $parent = $button.parent(); 
    // console.log($parent)
    var oldValue = $parent.find('.number-box').val();
 
    if ($button.text() == "+") {
  
        if(oldValue<5){
       var newVal = parseFloat(oldValue) + 1;
       let re=$button.parent().parent().parent()
       let id=re.attr("data-id")
       let uid=re.attr("data-uid")
       let PC = re.attr("data-pc")
       let Size = re.attr("data-size")
      //  let Price = re.attr("data-price")
      //  let info=$button.parent().parent()
      //  let currentprice=info.children().first().children().last()
      //  console.log(currentprice)
      // currentprice.innerHTML=`Total price : $${Price*newVal}`

       for (let index = 0; index < cart.length; index++) {
        const object = cart[index];
        let thisid=object.ID
        let thisuid=object.UID
        let thisproductcode=object.PRODUCTCODE
        let thissize=object.Size
      
        if(id==thisid && uid==thisuid && PC==thisproductcode && Size==thissize){
          cart[index].Quantity=newVal
           localStorage.setItem("cart",JSON.stringify(cart))
           location.reload();
           
         }
         
       }
       
        }
        else{
             newVal = 5;
        }
     } 
     
     
     else {
        // Don't allow decrementing below zero
       if (oldValue > 1) {
         var newVal = parseFloat(oldValue) - 1;
         let re=$button.parent().parent().parent()
         console.log(re)
      
         let id=re.attr("data-id")
         let uid=re.attr("data-uid")
         let PC = re.attr("data-pc")
         let Size = re.attr("data-size")

         for (let index = 0; index < cart.length; index++) {
          const object = cart[index];
          
          
          let thisid=object.ID
          let thisuid=object.UID
          let thisproductcode=object.PRODUCTCODE
          let thissize=object.Size
        
          if(id==thisid && uid==thisuid && PC==thisproductcode && Size==thissize){
            cart[index].Quantity=newVal
             localStorage.setItem("cart",JSON.stringify(cart))
             location.reload();
           }
           
         }
         } 
         
         else {
         let re=$button.parent().parent().parent()
         let id=re.attr("data-id")
         let uid=re.attr("data-uid")
         let PC = re.attr("data-pc")
         let Size = re.attr("data-size")
         re.remove()
      
       for (let index = 0; index < cart.length; index++) {
        const object = cart[index];
        
        
        let thisid=object.ID
        let thisuid=object.UID
        let thisproductcode=object.PRODUCTCODE
        let thissize=object.Size
      
        if(id==thisid && uid==thisuid && PC==thisproductcode && Size==thissize){
          
           cart.splice(index,1)
           localStorage.setItem("cart",JSON.stringify(cart))
         location.reload();
           if(cart.length<=0)
         { 
          localStorage.setItem("cart",JSON.stringify([]))
         }
         }
         
       }
       }
    
  }
  $parent.find('.number-box').val(newVal);
 });

 });





function openNav() {
  document.getElementById("mySidepanel").style.width = "20%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";}




function openNav1(){

  let isloggedin = localStorage.getItem("isloggedin")
  // console.log(isloggedin)
  if(isloggedin=="true"){

    document.querySelector(".dropdown-content2").style.display="flex"
 
  
    
  }
  else{
    document.querySelector(".dropdown-content1").style.display="flex"
 
    }

  }




  function closeNav1(e) {
    e.parentElement.style.display="none"
    // document.getElementById().style.display = "0";
  }
  







