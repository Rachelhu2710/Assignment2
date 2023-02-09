let productscart=[]
var clothesarray=[]

for (let index = 1; index < 9;index++){
  clothesarray.push(JSON.parse(localStorage.getItem(`mc${index}`)))
  
}


var clothing =document.querySelectorAll(".contentclothes")

clothing.forEach(element  => {

     
  clothesarray.forEach(el => {


    if(element.getAttribute("data-id")==el.id)
    { 
      let c=el.colorspicture[`${el.color[0]}`].link1
      // console.log(c)
      element.children[0].setAttribute("src",c)
      element.children[1].innerHTML=el.name+" $"+el.price
   
    }

    
  });
    
    

    
});
if (document.title=="Mens clothes 1") {
  // console.log("hi")
  let id =localStorage.getItem('id')
  let uid =localStorage.getItem('uid')
  // console.log(id)
  // console.log(uid)
  // console.log(shoesarray[0])
  clothesarray.forEach(element => {
    if (id==element.id) {
  
      // console.log("hi")
    let image = document.getElementById("img1");
    let color=element.color[uid]
    console.log(element.colorspicture[color])
    image.setAttribute("src",element.colorspicture[color].link1)
    let tilte1=document.getElementById("title")
    tilte1.innerHTML=`<h1>${element.name}</h1>`
    let cat=document.getElementById("cat")
    if (element.gender=='M') {
      gender="Mens"
      cat.innerHTML=`<h3>${gender} ${element.category}</h3>`
    }
    else if (element.gender=='W') {
      gender="Womens"
      cat.innerHTML=`${gender} ${element.category}`
    }

    let price = document.getElementById("price")
    price.innerHTML=`$${element.price}`
    let sizes=document.getElementById("size")
    
    for (const key in element.sizestock[color]) {
      
      sizes.innerHTML+=`<div class="sizes" data-size=${key}><button class="sized" onclick="checkout(this)">${key}</button></div>`
   

    }
    console.log(element.description)
    let description=document.getElementById("description")
    description.innerHTML=element.description
    $('button').on('click',function (e){
      e.preventDefault();
    $(this).css('background-color', 'grey');
    })
    }
    

  });
  
}





function hoveritem(e)
  { 
    
    let id =e.getAttribute("data-id")
    let uid =e.getAttribute("data-uid")
    let item =document.getElementById(`item${id}`)



    
  clothesarray.forEach(el => {


    if(id==el.id)
    { 

        var x=el.colorspicture[`${el.color[uid]}`].link1
       
        
          item.setAttribute("src",x)
          item.parentElement.dataset.uidma=uid
          console.log(item.parentElement)

   
    }

    
  });


  

    
} 


function redirect(e)
  {

  let id = e.parentElement.getAttribute('data-id')
  let uid =e.parentElement.getAttribute('data-uidma')
 
  localStorage.setItem('id',id)
  localStorage.setItem('uid',uid)


  }
  
  function checkout(e)
{
  let sizeButtons = document.querySelectorAll('.sizes');
  sizeButtons.forEach(button => {
    button.addEventListener('click', function() { 
      let cart = document.getElementById("cart")
      cart.innerHTML += `<a href='checkout.html' id ='addtobag'>Add To Bag</a> `
      let size = e.parentElement.getAttribute('data-size')
      localStorage.setItem("size", size)
    });
  });
}


















// var clothesarray=[]



// class clothes{
//   constructor(productcode,id,name,category,colorspicture,price,gender,sizestock,color,description)
//   {   this.productcode=productcode  
//       this.id=id
//       this.name=name
//       this.category=category
//       this.colorspicture=colorspicture
//       this.price=price
//       this.gender=gender
//       this.sizestock=sizestock
//       this.color=color
//       this.description=description
     
//   }
// }




// let c1 =new clothes("mc",1,"PUMA x MARKET Graphic Tee","t-shirt",{White:{link1:"images/PUMA-x-MARKET-Graphic-Tee-Men-white.webp",link2:"images/PUMA-x-MARKET-Graphic-Tee-Men-white-back.webp"},Black:{link1:"images/PUMA-x-MARKET-Graphic-Tee-Men-black.webp",link2:"images/PUMA-x-MARKET-Graphic-Tee-Men-black-back.webp"}},35,"M",{White:{S:100,M:100,L:100},Black:{S:100,M:100,L:100}},["White","Black"],"PUMA x MARKET combines East and West coast sensibilities, fusing laid-back style with innovation. Want to go big on print? What’s bigger than the great outdoors? We’ve given this tee a nature-inspired rubber graphic and relaxed fit combination that’s sure to inspire alfresco adventures")
// let c2 =new clothes("mc",2,"Fandom Shorts","shorts",{Black:{link1:"images/Fandom-Shorts-Men-Black.webp",link2:"images/Fandom-Shorts-Men-Black-back.webp"},Lavender:{link1:"images/Fandom-Shorts-Men-Lavender.webp",link2:"images/Fandom-Shorts-Men-Lavender-Back.webp"}},30,"M",{Black:{S:100,M:100,L:100},Lavender:{S:100,M:100,L:100}},["Black","Lavender"],"Stand out from the crowd in these Fandom Shorts. They feature a host of pockets for your most important items, along with chenille branding on the leg.")
// let c3 =new clothes("mc",3,"Classics Straigt Sweatpants","sweatpants",{Brown:{link1:"images/Classics-Straight-Sweatpants-Men.webp",link2:null}},30,"M",{Brown:{S:100,M:100,L:100}},["Brown"],"Our Classics collection is filled with no-frills items, like these sweatpants – including an open cuff and pintuck details.")
// let c4 =new clothes("mc",4,"Classics Small Logo Tee","t-shirt",{Blue:{link1:"images/Classics-Small-Logo-Tee-Men-Blue.webp",link2:"images/Classics-Small-Logo-Tee-Men-black.webp"},Black:{link1:"images/Classics-Small-Logo-Tee-Men-black.webp",link2:"images/Classics-Small-Logo-Tee-Men-Blue.webp"}},25,"M",{Blue:{S:100,M:100,L:100},Black:{S:100,M:100,L:100}},["Blue","Black"]," Our Classics collection is PUMA at its ost pared back. So, rep a simple style that pairs with just about anything in this logo tee.")
// let c5 =new clothes("mc",5,"Logo Short Sleeve Men","t-shirt",{Brown:{link1:"images/Logo-Short-Sleeve-Men's-Running-Tee-grape.webp",link2:"images/Logo-Short-Sleeve-Men's-Running-Tee-red.webp"},Red:{link1:"images/Logo-Short-Sleeve-Men's-Running-Tee-red.webp",link2:"images/Logo-Short-Sleeve-Men's-Running-Tee-grape.webp"}},35,"M",{Brown:{S:100,M:100,L:100},Red:{S:100,M:100,L:100}},["Brown","Red"],"Keep yourself at the front of the pack with the fashion and function of our Running collection, the latest in running technology that's perfect for uncompromising athletes, no matter if you're a casual jogger or aspiring Olympian. Our Logo Short Sleeve Tee was designed to provide runners with the perfect base layer. Featuring a stylish graphic at the chest, it's equipped with dryCELL technology to enhance comfort and 360-degree reflectivity to boost safety in low light conditions.")
// let c6 =new clothes("mc",6,"T7 Printed Track Jacket Men","jacket",{Black:{link1:"images/T7-Printed-Track-Jacket-Men.webp",link2:null}},85,"M",{Black:{S:100,M:100,L:100}},["Black"],"A PUMA original, the T7 track-inspired collection made a name for itself with 7cm signature stripes and quickly became as popular on city streets as it was on the training grounds. Hidden away in our archives, the suit has been faithfully replicated, and is just as iconic today as it was back then. With sleeve striping and a sleek fit, this sporty jacket will have you bringing the classics back in style.")
// let c7 =new clothes("mc",7,"Classics Relaxed Crewneck Sweatshirt","sweatshirt",{Blue:{link1:"images/Classics-Relaxed-Crewneck-Sweatshirt-Men-Blue.webp" ,link2:"images/Classics-Relaxed-Crewneck-Sweatshirt-Men-Green.webp"},Green:{link1:"images/Classics-Relaxed-Crewneck-Sweatshirt-Men-Green.webp",link2:"images/Classics-Relaxed-Crewneck-Sweatshirt-Men-Blue.webp"}},75,"M",{Blue:{S:100,M:100,L:100},Green:{S:100,M:100,L:100}},["Blue","Green"],"Our Classics collection is filled with no-frills items – like this relaxed crewneck sweatshirt.")
// let c8 =new clothes("mc",8,"Classics Relaxed Hoodie ","hoodie",{Beige:{link1:"images/Classics-Relaxed-Hoodie-Men-Grey.webp" ,link2:"images/Classics-Relaxed-Hoodie-Men-Black.webp"},Black:{link1:"images/Classics-Relaxed-Hoodie-Men-Black.webp",link2:"images/Classics-Relaxed-Hoodie-Men-Grey.webp"}},75,"M",{Beige:{S:100,M:100,L:100},Black:{S:100,M:100,L:100}},["Beige","Black"],"Our Classics collection is filled with no-frills items, like this relaxed hoodie – perfect for wearing to training or the couch.")



// clothesarray.push(c1,c2,c3,c4,c5,c6,c7,c8)




// const APIKEY="63e3eb01478852088da67ee5";

// clothesarray.forEach(element => {



// //[STEP 3]: get form values when user clicks on send
// //Adapted from restdb api
// let jsondata = {
//   "productcode":element.productcode ,
//   "id":element.id,
//   "name":element.name,
//   "category":element.category,
//   "colorspicture":element.colorspicture,
//   "price":element.price,
//   "gender":element.gender,
//   "sizestock":element.sizestock,
//   "color":element.color,
//   "description":element.description
  
// }   





// let settings = {
// "async": true,
// "crossDomain": true,
// "url": "https://dbasg2-7182.restdb.io/rest/products",
// "method": "POST", //[cher] we will use post to send info
// "headers": {
//   "content-type": "application/json",
//   "x-apikey": APIKEY,
//   "cache-control": "no-cache"
  
// }
// ,
// "processData": false,
// "data": JSON.stringify(jsondata),
// // "beforeSend": function(){
// //   //@TODO use loading bar instead
// //   //disable our button or show loading bar
// // //   $("#sub,").prop( "disabled", true);
// // //   //clear our form using the form id and triggering it's reset feature
// // //   $("#add-contact-form").trigger("reset");
// // }
// }

// $.ajax(settings).done(function (response) {
// console.log(response);

// // $("#contact-submit").prop( "disabled", false);

// // //@TODO update frontend UI 
// // $("#add-update-msg").show().fadeOut(3000);

// // //update our table 
// // getContacts();
// });



// });





