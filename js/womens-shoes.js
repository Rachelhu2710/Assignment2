let productscart=JSON.parse(localStorage.getItem("cart"))
let shoesarray=[];



    for (let index = 1; index < 9;index++){
      shoesarray.push(JSON.parse(localStorage.getItem(`ws${index}`)))
      
    }
    

 




    var shoes1 =document.querySelectorAll(".contentshoes")

    shoes1.forEach(element  => {
    
         
      shoesarray.forEach(el => {
    
    
        if(element.getAttribute("data-id")==el.id)
        { let c=el.colorspicture[`${el.color[0]}`].link1
        //   console.log(c)
          element.children[0].setAttribute("src",c)
          element.children[1].innerHTML=el.name + " $"+el.price
       
        }
    
        
      });
        
        
    
        
    });
    if (document.title=="Women shoes 1") {
      // console.log("hi")
      let id =localStorage.getItem('id')
      let uid =localStorage.getItem('uid')
      // console.log(id)
      // console.log(uid)
      // console.log(shoesarray[0])
      shoesarray.forEach(element => {
        if (id==element.id) {
      
        // console.log("hi")
        let image = document.getElementById("img1");
        let color=element.color[uid]
        // console.log(color)
        // console.log(element.colorspicture.link1)
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
          cat.innerHTML=`<h3>${gender} ${element.category}</h3>`
        }
    
        let price = document.getElementById("price")
        price.innerHTML=`$${element.price}`
        let sizes=document.getElementById("size")
        
        for (const key in element.sizestock[color]) {
    
          sizes.innerHTML+=`<div class="sizes" data-size=${key}><button class="sized" onclick="checkout(this)"><strong>${key}</strong></button></div>`
       
    
        }
        console.log(element.description)
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



    
  shoesarray.forEach(el => {


    if(id==el.id)
    { 
      
       
         
       
        var x=el.colorspicture[`${el.color[uid]}`].link1
       
        
          item.setAttribute("src",x)
          item.parentElement.dataset.uidma=uid
        //   console.log(item.parentElement)

   
    }

    
  });


  

    
} 

function redirect(e)
  {

  let id = e.parentElement.getAttribute('data-id')
  let uid =e.parentElement.getAttribute('data-uidma')
  localStorage.setItem('id',id)
  localStorage.setItem('uid',uid)
  localStorage.setItem('productcode',"ws")
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
 
    shoesarray.forEach(element => {
    
      if (element.id==Id && PC=="ws") {


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
            console.log(productobj)
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























// class shoes{
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


// let s1=new shoes("ws",1,"PUMA x MARKET Slipstream Sneakers","shoes",{White:{link1:"images/PUMA-x-MARKET-Slipstream-Sneakers-white.webp"},Black:{link1:"images/PUMA-x-MARKET-Slipstream-Sneakers-black.webp"}},119,"W",{White:{11:100,10:100,9:100,8:100,7:100,6:100},Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["White","Black"],"The new PUMA x MARKET collab explores camouflage graphics with expressive finishes and detail. This version of the Slipstream is inspired by ???80s basketball and the iconic Slipstream OG, with a streamlined silhouette, leather upper, perforated vamp, and bold MARKET details making it the perfect pair for making a statement off the court.")
// let s2=new shoes("ws",2,"PUMA x TRC Mira Star","shoes",{White:{link1:"images/TRC-Mira-Star-Quality-Sneakers-Women-black.webp"},Black:{link1:"images/TRC-Mira-Star-Quality-Sneakers-Women-white.webp"}},189,"W",{White:{11:100,10:100,9:100,8:100,7:100,6:100},Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["White","Black"],"The TRC Mira Star Quality Sneakers are inspired by the journey towards becoming your truest self. With a mix of textures on the upper, sparkling glitter underlays on the quarter and heel, plus metallic accents, these kicks perfectly combine casual vibes with eye-catching details. Be confident, celebrate yourself, and shine bright when you wear these shoes. Show the world what a star you are.")
// let s3=new shoes("ws",3,"All Day ActiveSneakers","shoes",{White:{link1:"images/All-Day-Active-Sneakers-white.webp"},Black:{link1:"images/All-Day-Active-Sneakers-black.webp"}},109,"W",{White:{11:100,10:100,9:100,8:100,7:100,6:100},Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["White","Black"],"For dedicated athletes, our All Day Active Sneakers are ready to support your active lifestyle. Featuring a breathable mesh upper, comfortable cushioning, a stitched-on heel overlay for added stability, rubber outsole pods for enhanced traction, and a streamlined silhouette, these cool kicks will keep up with your active lifestyle.")
// let s4=new shoes("ws",4,"Slipstream Suede FS","shoes",{Red:{link1:"images/Slipstream-Suede-FS-Sneakers-Red.webp"},Green:{link1:"images/Slipstream-Suede-FS-Sneakers-Green.webp"}},159,"W",{Red:{11:100,10:100,9:100,8:100,7:100,6:100},Green:{11:100,10:100,9:100,8:100,7:100,6:100}},["Red","Green"],"Back in 1987, the PUMA Slipstream entered the scene as a basketball sneaker. A high-flying, slam-dunking, statement-making basketball sneaker. Now, it???s joined by the Slipstream ??? a rework of the original that brings an all-new energy to the game while staying true to the OG???s sporting roots.")
// let s5=new shoes("ws",5,"Softride Ruby Deco Glam","shoes",{Red:{link1:"images/Softride-Ruby-Deco-Glam-Running-Shoes-Women-red.webp"},Black:{link1:"images/Softride-Ruby-Deco-Glam-Running-Shoes-Women-black.webp"}},129,"W",{Red:{11:100,10:100,9:100,8:100,7:100,6:100},Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["Red","Black"],"The Softride Ruby is an unapologetically elegant interpretation of our Softride franchise. The cushioned comfort of our Softride foam meets a pillowy SoftFoam+ sockliner with an extra thick heel for a smooth ride. The unique lacing system gives a secure fit and zoned rubber outsole pods provide traction on the move. Finished with metallic highlights and bold branding, this shoe helps you to shine.")
// let s6=new shoes("ws",6,"Suede Mayu","shoes",{Blue:{link1:"images/Suede-Mayu-Women's-Trainers-blue.webp"},Black:{link1:"images/Suede-Mayu-Women's-Trainers-black.webp"}},169,"W",{Blue:{11:100,10:100,9:100,8:100,7:100,6:100},Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["Blue","Black"],"Updating a classic with future-proof design details, the Mayu is a step forward in streetwear. The bold wrapped platform sole plays with the iconic proportions of the legendary Suede style, producing an irreverent look that can be worn every day. Of course, they???re cool and comfy but the premium suede upper and foil printed PUMA branding elevates them into extraordinary. Timeless for today.")
// let s7=new shoes("ws",7,"Kosmo Rider","shoes",{Pink:{link1:"images/Kosmo-Rider-Feminine-Tech-Sneakers-Women-pink.webp"},White:{link1:"images/Kosmo-Rider-Feminine-Tech-Sneakers-Women-white.webp"}},179,"W",{Pink:{11:100,10:100,9:100,8:100,7:100,6:100},White:{11:100,10:100,9:100,8:100,7:100,6:100}},["Pink","White"],"Inspired by the collision of real life and the digital life, the Kosmo Rider Feminine Tech sneaker has a tech-inspired look featuring new cut lines and panels and a dynamic new tooling. The sneaker???s mesh base has heat-pressed overlays and a TPU PUMA Formstrip with embossed raised lines and texture.")
// let s8=new shoes("ws",8,"RoyalCat Comfort CNY","slides",{White:{link1:"images/RoyalCat-Comfort-Chinese-New-Year-Slides-white.webp"},Black:{link1:"images/RoyalCat-Comfort-Chinese-New-Year-Slides-black.webp"}},55,"W",{White:{11:100,10:100,9:100,8:100,7:100,6:100},Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["White","Black"],"Celebrate the year of the rabbit in these Chinese New Year-themed slides that don our PUMA cat playing alongside rabbits.")




// shoesarray.push(s1,s2,s3,s4,s5,s6,s7,s8);
// const APIKEY="63df8e643bc6b255ed0c46a6";

// shoesarray.forEach(element => {



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
// "url": "https://assignment-7a34.restdb.io/rest/products",
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