let productscart=JSON.parse(localStorage.getItem("cart"))
let accesoriesarray=[]

for (let index = 1; index < 9;index++){
  accesoriesarray.push(JSON.parse(localStorage.getItem(`ma${index}`)))
  
}
// console.log(accesoriesarray)


 
var accesories1 =document.querySelectorAll(".contentaccesories")

accesories1.forEach(element  => {
  // console.log("hi")

     
accesoriesarray.forEach(el => {

// console.log("s")
    if(element.getAttribute("data-id")==el.id)
    { let c=el.colorspicture[`${el.color[0]}`].link1
      // console.log(c)
      element.children[0].setAttribute("src",c)
      element.children[1].innerHTML=el.name+" $"+el.price
   
    }

    
  });
    
    

    
});

if (document.title=="Mens accessories 1") {
  let id =localStorage.getItem('id')
  let uid =localStorage.getItem('uid')
   accesoriesarray.forEach(element => {
    console.log(element)
    if (id==element.id) {
    let image = document.getElementById("img1");
    let color=element.color[uid]

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
    
    for (const key in element.sizestock[color]) 
    {
      sizes.innerHTML+=`<div class="sizes" data-size=${key}><button class="sized" onclick="checkout(this)"><strong>${key}</strong></button></div>`
    }
    let description=document.getElementById("description")
    description.innerHTML=element.description
    $('button').on('click',function (e){
      e.preventDefault();
      let buttons = $(".sizes");
      let thisbutton  = $(this).parent().data("size")
      buttons.each(function(){
        let data = $(this).data("size")
        console.log (thisbutton)
        if (data == thisbutton)
        {
          console.log(data)
          $(this).children("button").css('background-color', 'grey');
        }
        else{
          $(this).children("button").css('background-color', '#EEEBE7');

        }
      })
    
    })
    }
    

  });
}





function hoveritem(e)
  { 
    
    let id =e.getAttribute("data-id")
    let uid =e.getAttribute("data-uid")
    let item =document.getElementById(`item${id}`)



    
  accesoriesarray.forEach(el => {

    
    if(id==el.id)
    { 

    
       
        var x=el.colorspicture[`${el.color[uid]}`].link1
       
        
          item.setAttribute("src",x)
          item.parentElement.dataset.uidma=uid
          // console.log(item.parentElement)

         
        
 
         


    
        
        
        

     
   
    }

    
  });


  

    
} 

function redirect(e)
  {

  let id = e.parentElement.getAttribute('data-id')
  let uid =e.parentElement.getAttribute('data-uidma')
  
  localStorage.setItem('id',id)
  localStorage.setItem('uid',uid)
  localStorage.setItem('productcode',"ma")


  }
  function checkout(e)
  {
       let cart = document.getElementById("cart")
      cart.innerHTML = `<a  onclick="addtocart()" id ='addtobag'>Add To Bag</a> `
      let size = e.parentElement.getAttribute('data-size')
      localStorage.setItem("size", size)
      // console.log("hello")
      // console.log(cart.innerHTML)
  }


function addtocart(){


    let Id = localStorage.getItem("id")
    let Uid=localStorage.getItem("uid")
    let PC=localStorage.getItem("productcode")
 
    accesoriesarray.forEach(element => {
    
      if (element.id==Id && PC=="ma") {


        if (productscart.length>0) { 
          let incart=true;
          for (let index = 0; index < productscart.length; index++) {
            
           let el = productscart[index];
         
            if (el.ID==Id && el.UID==Uid && el.Size==localStorage.getItem("size")) {
              productscart[index].Quantity+=1
              incart=false
               break
              
            }
            
          }
          if(incart)
          {
            let color = element.color[Uid]
            let image = element.colorspicture[color].link1
            let name = element.name
            let size = localStorage.getItem("size")
            let quantity=1
            let id = Id
            let UId=Uid
            let price=element.price
            let Productcode=PC
            let productobj={ID:id,UID:UId,Name:name,Size:size,Color:color,Image:image,Quantity:quantity,Price:price,PRODUCTCODE:Productcode}
            productscart.push(productobj)

          }
        
        }
         
      
       else{
        let color = element.color[Uid]
        let image = element.colorspicture[color].link1
        let name = element.name
        let size = localStorage.getItem("size")
        let quantity=1
        let id = Id
        let UId=Uid
        let price=element.price
        let ProductCode=PC
        let productobj={ID:id,UID:UId,Name:name,Size:size,Color:color,Image:image,Quantity:quantity,Price:price,PRODUCTCODE:ProductCode}
        console.log(productobj)
        productscart.push(productobj)
        console.log("no")
        
       }
        
      }
      
    });
    localStorage.setItem("cart",JSON.stringify(productscart))
    console.log(localStorage.getItem("cart"))
    window.location.reload();

}
































  // class accesorires
  // { constructor(productcode,id,name,category,colorspicture,price,gender,sizestock,color,description)
  // { this.productcode=productcode
  //   this.id=id
  //   this.name=name
  //   this.category=category
  //   this.colorspicture=colorspicture //contain picture for each color of product//
  //   this.price=price
  //   this.gender=gender
  //   this.sizestock=sizestock // contains diff sizes for each color of product//
  //   this.color=color
  //   this.description=description
  // }
  
  
  
  // }
  
  
  
  // let a1 = new accesorires("ma",1,"Metal Cat Cap","cap",{Black:{link1:"images/Metal-Cat-Cap-Black.webp"} , Blue:{link1:"images/Metal-Cat-Cap-Blue.webp"},Green:{link1:"images/Metal-Cat-Cap-Green.webp"}},35,"M",{Black:{S:100,M:100,L:100},Blue:{S:100,M:100,L:100},Green:{S:100,M:100,L:100}},["Black","Blue","Green"],"This adjustable golf cap is designed for the athlete, on and off the golf course. Make a statement without saying a word with multiple colours to choose from.")
  // let a2 = new accesorires("ma",2,"PUMA x PALOMO Cap","cap",{Navy:{link1:"images/PUMA-x-PALOMO-Cap.webp"}},69,"M",{Navy:{S:100,M:100,L:100}},["Navy"],"The first PUMA x PALOMO collection is inspired by the rebellious athletes who defied stereotypes and ruled sport through the ???70s. Each item is genderless, with a retro colour palette and intricate branded details ??? just like this cap. It has a classic six-panel construction and colourful embroidery on the front")
  // let a3 = new accesorires("ma",3,"Seuderia Ferrari SPTWR Race Backpack","bag",{Black:{link1:"images/Scuderia-Ferrari-SPTWR-Race-Backpack.webp"}},119,"M",{Black:{S:100,M:100,L:100}},["Black"],"The thrill of high speed. The roar of the engine. The G-force as you round those corners. The feel of a Scuderia Ferrari at your fingertips. With epaulette details inspired by race suits, a sleek outline and an official Scuderia Ferrari crest, this backpack channels the elegance and energy of an F1 automobile.")
  // let a4 = new accesorires("ma",4,"Gym Training Bottle","bottle",{Black:{link1:"images/Gym-Training-Bottle.webp"}},29,"M",{Black:100},["Black"],"We decided to redesign the gym junkie's constant companion, your water bottle. Embrace the latest in style and convenience with our Gym Training Bottle. This bottle features a convenient carry handle for easy carrying and a straw for seamless sipping while on the go.")
  // let a5 = new accesorires("ma",5,"PUMA Shaker Bottle","bottle",{Black:{link1:"images/PUMA-Shaker-Bottle.webp"}},25,"M",{Black:100},["Black"],"Whether you're headed to the gym, school or out for a day of errands, the PUMA Shaker Bottle is the perfect companion. Use it with the metal ball for mixing protein or other powders, or without it for everything else. A medium-sized spout prevents you from spilling, but is wide enough to quench your thirst quickly.")
  // let a6 = new accesorires("ma",6,"PUMA x CHILDHOOD DREAMS Basketball Bucket Hat","hat",{Beige:{link1:"images/PUMA-x-CHILDHOOD-DREAMS-Basketball-Bucket-Hat.webp"}},69,"M",{Beige:{S:100,M:100,L:100}},["Beige"],"This bucket hat is what hoop dreams are made of. Featuring perfect patchwork panels and statement PUMA branding, it's the ultimate post-game statement.")
  // let a7 = new accesorires("ma",7,"Originals PUMA Small shoulder Bag","bag",{Black:{link1:"images/Originals-PU-Small-Shoulder-Bag.webp"}},65,"M",{Black:100},["Black"],"Athletic elegance meets eminent practicality in this compact shoulder bag. It features a two-way zip opening and internal pockets for stashing your essentials, plus an adjustable webbing shoulder strap for an easy, comfortable carry. Sleek PU fabrication and an authentic PUMA Archive No. 1 Logo in metallic gold round off this chic piece from the Originals collection.")
  // let a8 = new accesorires("ma",8,"Running Waist Band","band",{Black:{link1:"images/Running-Waist-Band.webp"}},49,"M",{Black:100},["Black"],"Focus on the finish line and don't sweat the small stuff thanks to the PR Running Waist Band, designed to help you carry all the small belongings you need on your run. Made using elastic, it moves with you for optimum comfort and contains an internal mesh pocket for storing your essentials. Practical and fuss-free, this accessory is perfect for runners who just want to get down to business.")
  








//   const APIKEY="63df8e643bc6b255ed0c46a6";

// accessoriesarray.forEach(element => {



//   //[STEP 3]: get form values when user clicks on send
//   //Adapted from restdb api
//   let jsondata = {
//     "productcode":element.productcode ,
//     "id":element.id,
//     "name":element.name,
//     "category":element.category,
//     "colorspicture":element.colorspicture,
//     "price":element.price,
//     "gender":element.gender,
//     "sizestock":element.sizestock,
//     "color":element.color,
//     "description":element.description
    
//   }   





// let settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://assignment-7a34.restdb.io/rest/products",
//   "method": "POST", //[cher] we will use post to send info
//   "headers": {
//     "content-type": "application/json",
//     "x-apikey": APIKEY,
//     "cache-control": "no-cache"
    
//   }
//   ,
//   "processData": false,
//   "data": JSON.stringify(jsondata),
//   // "beforeSend": function(){
//   //   //@TODO use loading bar instead
//   //   //disable our button or show loading bar
//   // //   $("#sub,").prop( "disabled", true);
//   // //   //clear our form using the form id and triggering it's reset feature
//   // //   $("#add-contact-form").trigger("reset");
//   // }
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
  
//   // $("#contact-submit").prop( "disabled", false);
  
//   // //@TODO update frontend UI 
//   // $("#add-update-msg").show().fadeOut(3000);

//   // //update our table 
//   // getContacts();
// });



// });



// var accessories1 =document.querySelectorAll(".contentaccesories")

// accessories1.forEach(element  => {

     
//   accessoriesarray.forEach(el => {


//     if(element.getAttribute("data-id")==el.id)
//     { let c=el.colorspicture[`${el.color[0]}`].link1
//     //   console.log(c)
//       element.children[0].setAttribute("src",c)
//       element.children[1].innerHTML=el.name+" $"+el.price
   
//     }

    
//   });
    
    

    
// });
// if (document.title=="Mens accessories 1") {
//   // console.log("hi")
//   let id =localStorage.getItem('id')
//   let uid =localStorage.getItem('uid')
//   // console.log(id)
//   // console.log(uid)
//   // console.log(shoesarray[0])
//   accessoriesarray.forEach(element => {
//     console.log("hi")
//     if (id==element.id) {
  
//     // console.log("hi")
//     let image = document.getElementById("img1");
//     let color=element.color[uid]
//     image.setAttribute("src",element.colorspicture[color].link1)
//     let tilte1=document.getElementById("title")
//     tilte1.innerHTML=`<h1>${element.name}</h1>`
//     let cat=document.getElementById("cat")
//     if (element.gender=='M') {
//       gender="Mens"
//       cat.innerHTML=`<h3>${gender} ${element.category}</h3>`
//     }
//     else if (element.gender=='W') {
//       gender="Womens"
//       cat.innerHTML=`${gender} ${element.category}`
//     }

//     let price = document.getElementById("price")
//     price.innerHTML=`$${element.price}`
//     let sizes=document.getElementById("size")
    
//     for (const key in element.sizestock[color]) {

//       sizes.innerHTML+=`<div class="sizes" data-size=${key}><button onclick="checkout(this)">${key}</button></div>`
   

//     }
//     console.log(element.description)
//     let description=document.getElementById("description")
//     description.innerHTML=element.description
//     $('button').on('click',function (e){
//       e.preventDefault();
//     $(this).css('background-color', 'grey');
//     })
//     }
    

//   });
  
// }