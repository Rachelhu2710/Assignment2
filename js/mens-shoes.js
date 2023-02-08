let productscart=JSON.parse(localStorage.getItem("cart"))
let shoesarray=[]

for (let index = 1; index < 9;index++){
  shoesarray.push(JSON.parse(localStorage.getItem(`ms${index}`)))
  
}


// console.log(shoesarray)

var shoes1 =document.querySelectorAll(".contentshoes")
  

shoes1.forEach(element  => {
  // console.log("hi")

     
 shoesarray.forEach(el => {

// console.log("s")
    if(element.getAttribute("data-id")==el.id)
    { let c=el.colorspicture[`${el.color[0]}`].link1
      // console.log(c)
      element.children[0].setAttribute("src",c)
      element.children[1].innerHTML=el.name+" $"+el.price
   
    }

    
  });
    
    

    
});
// console.log(document.title)

if (document.title=="Mens shoes 1") {
  // console.log("hi")
  let id =localStorage.getItem('id')
  let uid =localStorage.getItem('uid')
  // console.log(id)
  // console.log(uid)
  // console.log(shoesarray[0])
  // console.log(shoesarray)
  shoesarray.forEach(element => {
   
    if (id==element.id) {
  
    // console.log("hi")
    let image = document.getElementById("img1");
    let color=element.color[uid]
    // console.log(element.color[0])
    // console.log(element.colorspicture[color].link1)
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
      sizes.innerHTML+=`<div class="sizes" data-size=${key}><button onclick="checkout(this)">${key}</button></div>`
    }
    // console.log(element.description)
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
    // console.log(uid)



    
  shoesarray.forEach(el => {


    if(id==el.id)
    { 
      // console.log(el.color.length)
      // if (el.color.length>1) {
       
        var x=el.colorspicture[`${el.color[uid]}`].link1
       
        
          item.setAttribute("src",x)
          item.parentElement.dataset.uidma=uid
          // console.log(item.parentElement)

        
        
        
      // }
     
   
    }

    
  });


  

    
} 



// let product =  document.querySelector("")

function redirect(e)
{
let id = e.parentElement.getAttribute('data-id')
let uid =e.parentElement.getAttribute('data-uidma')
localStorage.setItem('id',id)
localStorage.setItem('uid',uid)
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
 
    shoesarray.forEach(element => {
    
      if (element.id==Id) {
        if (productscart.length>0) { 
        //  console.log(productscart.length)

          for (let index = 0; index < productscart.length; index++) {
            
           let el = productscart[index];
         
            if (el.ID==Id && el.UID==Uid && el.Size==localStorage.getItem("size")) {
              productscart[index].Quantity+=1
               break
              
            }
            else{
              let color = element.color[Uid]
              let image = element.colorspicture[color].link1
              let name = element.name
              let size = localStorage.getItem("size")
              let quantity=0
              let id = Id
              let UId=Uid
              let productobj={ID:id,UID:UId,Name:name,Size:size,Color:color,Image:image,Quantity:quantity}
              productscart.push(productobj)
              // console.log("bye")
              // break
            }
     
            
            
          }
        }
         
      
       else{
        let color = element.color[Uid]
        let image = element.colorspicture[color].link1
        let name = element.name
        let size = localStorage.getItem("size")
        let quantity=0
        let id = Id
        let UId=Uid
        let productobj={ID:id,UID:UId,Name:name,Size:size,Color:color,Image:image,Quantity:quantity}
        productscart.push(productobj)
        // console.log("no")
        
       }
        
      }
      
    });
    localStorage.setItem("cart",JSON.stringify(productscart))
    console.log(localStorage.getItem("cart"))

}





















  ///////////////////////////
  

// var shoes1 =document.querySelectorAll(".contentshoes")

// shoes1.forEach(element  => {

     
//   shoesarray.forEach(el => {


//     if(element.getAttribute("data-id")==el.id)
//     { let c=el.colorspicture[`${el.color[0]}`].link1
//       // console.log(c)
//       element.children[0].setAttribute("src",c)
//       element.children[1].innerHTML=el.name+" $"+el.price
   
//     }

    
//   });
    
    

    
// });



// if (document.title=="Mens shoes 1") {
//   // console.log("hi")
//   let id =localStorage.getItem('id')
//   let uid =localStorage.getItem('uid')
//   // console.log(id)
//   // console.log(uid)
//   // console.log(shoesarray[0])
//   shoesarray.forEach(element => {
   
//     if (id==element.id) {
  
//     // console.log("hi")
//     let image = document.getElementById("img1");
//     let color=element.color[uid]
//     // console.log(element.color[0])
//     // console.log(element.colorspicture.link1)
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
    
//     for (const key in element.sizestock[color]) 
//     {
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




// function hoveritem(e)
//   { 
    
//     let id =e.getAttribute("data-id")
//     let uid =e.getAttribute("data-uid")
//     let item =document.getElementById(`item${id}`)
//     console.log(uid)



    
//   shoesarray.forEach(el => {


//     if(id==el.id)
//     { 
//       console.log(el.color.length)
//       // if (el.color.length>1) {
       
         
       
//         var x=el.colorspicture[`${el.color[uid]}`].link1
       
        
//           item.setAttribute("src",x)
//           item.parentElement.dataset.uidma=uid
//           // console.log(item.parentElement)

        
        
        
//       // }
     
   
//     }

    
//   });


  

    
// } 


// // let product =  document.querySelector("")

// function redirect(e)
// {
// let id = e.parentElement.getAttribute('data-id')
// let uid =e.parentElement.getAttribute('data-uidma')
// localStorage.setItem('id',id)
// localStorage.setItem('uid',uid)
// }

// function checkout(e)
// {
//   let sizeButtons = document.querySelectorAll('.sizes');
//   sizeButtons.forEach(button => {
//     button.addEventListener('click', function() { 
//       let cart = document.getElementById("cart")
//       cart.innerHTML += `<a href='checkout.html' id ='addtobag'>Add To Bag</a> `
//       let size = e.parentElement.getAttribute('data-size')
//       localStorage.setItem("size", size)
//     });
//   });
// }





// var shoesarray=[]


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


// let s1=new shoes("ms",1,"NCT Sneakers","shoes",{Green:{link1:"images/NCT_Sneakers.webp"},Black:{link1:"images/Slipstream-Sneakers-black.webp"}},159,"M",{Black:{11:100,10:100,9:100,8:100,7:100,6:100},Green:{11:100,10:100,9:100,8:100,7:100,6:100}},["Green","Black"]," A high-flying, slam-dunking, statement-making basketball sneaker. Now it’s joined by the Slipstream – a rework of the original that brings an all-new energy to the game while staying true to the OG’s sporting roots.")
// let s2=new shoes("ms",2,"Flyer Flex Running Shoes","shoes",{White:{link1:"images/Flyer_Flex_Running_Shoes.webp"},Black:{link1:"images/Flyer-Flex-Running-Shoes-black.webp"}},89,"M",{Black:{11:100,10:100,9:100,8:100,7:100,6:100},White:{11:100,10:100,9:100,8:100,7:100,6:100}},["White","Black"],"Building on the wildly successful Flyer Runner platform, the Flyer Flex brings a whole new style and bold new silhouette. There are flex grooves running the full length of the tooling, as well as rubber coverage in the heel and toe to give you durability and traction. Engineered for runners, designed to turn heads, these are likely to become your go to shoes whenever you're out on a run.")

// let s3=new shoes("ms",3,"Slipstream Lo Trainers","shoes",{Brown:{link1:"images/Slipstream-Lo-Trainers.webp"},Pink:{link1:"images/Slipstream-Lo-Trainers-pink.webp"},Green:{link1:"images/Slipstream-Lo-Trainers-green.webp"}},149,"M",{Brown:{11:100,10:100,9:100,8:100,7:100,6:100},Pink:{11:100,10:100,9:100,8:100,7:100,6:100},Green:{11:100,10:100,9:100,8:100,7:100,6:100}},["Brown","Pink","Green"],"Released as a competitive basketball shoe in 1987 when sneaker culture was kicking off, the Slipstream Lo was then reissued in the 2000s and gained a reputation as the “The Beast” thanks to its crazy colourways. These iconic kicks have been reimagined and updated for the sneaker fanatics of today, while staying true to their basketball heritage. Embrace this classic shoe and celebrate the modern twists added by its varied leather textures and moulded TPU eyestay.")
// let s4=new shoes("ms",4,"CA Pro Suede FS Sneakers","shoes",{Brown:{link1:"images/CA-Pro-Suede-FS-Sneakers.webp"},Green:{link1:"images/CA-Pro-Suede-FS-Sneakers-green.webp"}},169,"M",{Brown:{11:100,10:100,9:100,8:100,7:100,6:100},Green:{11:100,10:100,9:100,8:100,7:100,6:100}},["Brown","Green"],"Our CA Pro takes inspiration from the original California we released back in the ‘80s. It has a look that’s both classic and modern, featuring a perforated toe – just like the OG – statement panelling, and the famous PUMA Formstrip. On this pair, the clean-cut leather upper has a flash of coloured suede across the Formstrip that gives a nod to our sporting heritage.")

// let s5=new shoes("ms",5,"Extent Nitro Europa Sneakers","shoes",{Blue:{link1:"images/Extent-Nitro-Europa-Sneakers-blue.webp"},Black:{link1:"images/Extent-Nitro-Europa-Sneakers-black.webp"}},209,"M",{Black:{11:100,10:100,9:100,8:100,7:100,6:100},Blue:{11:100,10:100,9:100,8:100,7:100,6:100}},["Blue","Black"]," Our interpretation of where tech meets fashion and performance meets design, the Extent Nitro features a full-length, lightweight nitrogen-injected midsole that’s encapsulated by a heel stabilizing foam to create an aesthetical and technical balance. In the Europa iteration, the two-layered mesh upper contains a mix of suede and textile overlays and is designed and constructed around the idea of caging, thanks to a hidden supporting structure that holds up the lightweight fabric.")

// let s6=new shoes("ms",6,"Leadcat FTR Comfort Sandals","slides",{Black:{link1:"images/Leadcat-FTR-Comfort-Sandals.webp"}},65,"M",{Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["Black"],"Stay a step ahead of the pack in superior comfort with our Leadcat FTR Comfort Sandals, an iconic PUMA silhouette with innovative accents including a CMEVA midsole and moulded footbed for the uncompromising street style fan.")
// let s7=new shoes("ms",7,"Anzarun Lite Trainers","shoes",{White:{link1:"images/Anzarun-Lite-Trainers.webp"},Black:{link1:"images/Anzarun-Lite-Trainers-black.webp"},Pink:{link1:"images/Anzarun-Lite-Trainers-pink.webp"}},109,"M",{Black:{11:100,10:100,9:100,8:100,7:100,6:100},White:{11:100,10:100,9:100,8:100,7:100,6:100},Pink:{11:100,10:100,9:100,8:100,7:100,6:100}},["White","Black","Pink"],"The freshest look for any occasion, the Anzarun Lite Trainers are PUMA's most refined shoe yet. Featuring the breezy Anzarun DNA mesh upper, a cushy SoftFoam+ sockliner and discreet PUMA branding throughout, you're sure to look great, wherever the day takes you.")
// let s8=new shoes("ms",8,"Leadcat 2","shoes",{Black:{link1:"images/Leadcat-2.webp"},White:{link1:"images/Leadcat-2-white.webp"}},75,"M",{Black:{11:100,10:100,9:100,8:100,7:100,6:100},White:{11:100,10:100,9:100,8:100,7:100,6:100}},["Black","White"]," You've never been a follower of fashion – you've always been a leader. And with these eye-catching Leadcat sandals, that tradition continues. With an ultra plush footbed and a premium suede strap, these are sandals expressly designed for those who never compromise.")

// shoesarray.push(s1,s2,s3,s4,s5,s6,s7,s8);




// const APIKEY="63df8e643bc6b255ed0c46a6";

// shoesarray.forEach(element => {



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


// for (let index = 1; index < 9;index++){
//   shoesarray.push(JSON.parse(localStorage.getItem(`ms${index}`)))
  
// }
