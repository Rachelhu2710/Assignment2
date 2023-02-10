let Products=document.querySelector("#cart-overview")
let cart1 = JSON.parse(localStorage.getItem("cart"))
let tp=0;

cart1.forEach(product => {
    let color = product.Color
    let image = product.Image
    let name = product.Name
    let size = product.Size
    let quantity=product.Quantity
    let price=product.Price
    let id = product.ID
    let UId=product.UID
    let pc=product.PRODUCTCODE
  
  
    Products.innerHTML+=
    `<div class="product1" data-id="${id}" data-pc="${pc}" data-size="${size}" data-quantity="${quantity}" data-price="${price}"  data-uid="${UId}">
    
        <img class="ip-img1"   src="${image}" alt="p-img">
        <div id="encloser1">
        <div id="info1">
        <p id="name1">${name}</p>
        <p id="price1">Price:$${price}</p>
        <p id="color1">Color:${color}</p>
        <p id="size51">Size:${size}</p>
        <p id="total-price1"> Total price : $${price*quantity}</p>
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

cart1.forEach(product=>{

    let QUANTITY=product.Quantity
    let PRICE=product.Price
    tp+=(QUANTITY*PRICE)
    

  })
  let calc=document.querySelector("#calculation")
  console.log(calc)
  console.log(tp)
  calc.innerHTML=`Total cart Price:$${tp}`


  function showcheckout(){
   let cform=document.querySelector("#checkout-form")
   console.log(cform)
   cform.style.display="flex"

  }