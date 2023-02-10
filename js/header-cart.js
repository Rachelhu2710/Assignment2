let products=document.querySelector("#products")
let cart=JSON.parse(localStorage.getItem("cart"))
let ap=JSON.parse(localStorage.getItem("allproducts"))
let userreward=[]
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
  




function popup(e){
let sbdisplay=document.querySelector("#sb-pop-up")
// sbdisplay.style.display="flex"
sbdisplay.innerHTML=``
let show=[]
let query=document.querySelector(".textbox").value.toUpperCase()
console.log(query)

ap.forEach(element => {
let name=element.name.toUpperCase()
let category=element.category.toUpperCase()
if(name.includes(query)){
  show.push(element)
}
if(category.includes(query)){
show.push(element)
}
});
console.log(show)

  show.forEach(element => {
    let thisname=element.name
    let color=element.color[0]
    let thisimage=element.colorspicture[color].link1
    sbdisplay.innerHTML+=`
    <div class="sps"  onclick="lead(this)" >
    <img class="sp-img"   src="${thisimage}" alt="p-img">
    <p id="spname">${thisname}</p>
    </div>
    
    `

  });


  



}




function loggedout()
{
  
  
const APIKEY="63df8e643bc6b255ed0c46a6";


  //[STEP 3]: get form values when user clicks on send
  //Adapted from restdb api
  let jsondata = {
    "username":localStorage.getItem("username"),
    "password":localStorage.getItem("password"),
    "voucher":localStorage.getItem("rewards"),
    "coins":localStorage.getItem("points")
    
  }   





let settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://assignment-7a34.restdb.io/rest/reward",
  "method": "POST", //[cher] we will use post to send info
  "headers": {
    "content-type": "application/json",
    "x-apikey": APIKEY,
    "cache-control": "no-cache"
    
  }
  ,
  "processData": false,
  "data": JSON.stringify(jsondata),
  // "beforeSend": function(){
  //   //@TODO use loading bar instead
  //   //disable our button or show loading bar
  // //   $("#sub,").prop( "disabled", true);
  // //   //clear our form using the form id and triggering it's reset feature
  // //   $("#add-contact-form").trigger("reset");
  // }
}

$.ajax(settings).done(function (response) {
  console.log(response);
  
  // $("#contact-submit").prop( "disabled", false);
  
  // //@TODO update frontend UI 
  // $("#add-update-msg").show().fadeOut(3000);

  // //update our table 
  // getContacts();
});
  localStorage.setItem("isloggedin",false)
  localStorage.setItem("username","")
  localStorage.setItem("password","")
  localStorage.setItem("rewards","")
  window.location.reload()
}





const APIKEY1="63df8e643bc6b255ed0c46a6";



let settings1 = {
"async": true,
"crossDomain": true,
"url": "https://assignment-7a34.restdb.io/rest/reward",
"method": "GET", //[cher] we will use post to send info
"headers": {
  "content-type": "application/json",
  "x-apikey": APIKEY1,
  "cache-control": "no-cache"
  
}
,


}

$.ajax(settings1).done(function (response) {
response.forEach(element => {
  userreward.push(element)
});
localStorage.setItem("userreward",JSON.stringify(userreward))

});

