let productscart=JSON.parse(localStorage.getItem("cart"))
let accesoriesarray=[];
for (let index = 1; index < 9;index++){
  accesoriesarray.push(JSON.parse(localStorage.getItem(`wa${index}`)))
  
}

  
    var accessories1 =document.querySelectorAll(".contentaccessories")

    accessories1.forEach(element  => {
      accesoriesarray.forEach(el => {
    
        if(element.getAttribute("data-id")==el.id)
        { let c=el.colorspicture[`${el.color[0]}`].link1
          // console.log(c)
          element.children[0].setAttribute("src",c)
          element.children[1].innerHTML=el.name+" $"+el.price
       
        }
    
        
      });
    });
    if (document.title=="Women accessories 1") {
      // console.log("hi")
      let id =localStorage.getItem('id')
      let uid =localStorage.getItem('uid')
      // console.log(id)
      // console.log(uid)
      // console.log(shoesarray[0])
      accesoriesarray.forEach(element => {
        if (id==element.id) {
      
        // console.log("hi")
        let image = document.getElementById("img1");
        let color=element.color[uid]
        // console.log(color)
        // console.log(element.colorspicture.link1)
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
    // console.log(uid)
    accesoriesarray.forEach(el => {
      // console.log(id)
      // console.log(el.id)
      // console.log(el)
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
    localStorage.setItem('productcode',"wa")
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
    
      if (element.id==Id && PC=="wa") {


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



// let a1 = new accesorires("wa",1,"Puma High Cut Footie","socks",{White:{link1:"images/PUMA-Unisex-High-Cut-Footie-white.webp"} , Black:{link1:"images/PUMA-Unisex-High-Cut-Footie-black.webp"},Grey:{link1:"images/PUMA-Unisex-High-Cut-Footie-grey.webp"}},6.90,"W",{White:{S:100,M:100,L:100},Black:{S:100,M:100,L:100},Grey:{S:100,M:100,L:100}},["White","Black","Grey"],"The high-cut unisex footies from PUMA are ideal for sneakers. The high-cut gives you the security they will stay in place, but be invisible socks. Get all the performance from PUMA quality socks without any of the show.")
// let a2 = new accesorires("wa",2,"Training Bottle","bottle",{Black:{link1:"images/Training-Bottle-black.webp"} , Red:{link1:"images/Training-Bottle-red.webp"},Pink:{link1:"images/Training-Bottle-pink.webp"}},25,"W",{Black:{S:100,M:100,L:100},Red:{S:100,M:100,L:100},Pink:{S:100,M:100,L:100}},["Black","Red","Pink"],"Stay hydrated when you're on the go with the Core Training Bottle. Sleek lines, a sport cap and bold PUMA branding will have quenching your thirst in style.")
// let a3 = new accesorires("wa",3,"Result Backpack","bag",{Pink:{link1:"images/Result-Backpack-pink.webp"} , Black:{link1:"images/Result-Backpack-black.webp"}},75,"W",{Pink:{S:100,M:100,L:100},Black:{S:100,M:100,L:100}},["Pink","Black"],"Too cool for school: This stunning functional backpack is the perfect practical piece for heading back to work or the classroom this autumn. With plenty of secure and sturdy pockets and compartments for all your essentials, you'll be fully prepared what's ahead.")   
// let a4 = new accesorires("wa",4,"Phase Packable Shopper","bag",{Black:{link1:"images/PUMA-Phase-Packable-Shopper.webp"}},25,"W",{Black:{S:100,M:100,L:100}},["Black"],"Form meets function for the perfect packable. From big to small and back again, this convertible favourite packs a punch with bold PUMA branding and simple details. Grab it on your way to the shops or take it along as the perfect holiday basic.")
// let a5 = new accesorires("wa",5,"Yoga Training Mat","mat",{Black:{link1:"images/Yoga-Training-Mat.webp"} },75,"W",{Black:{S:100,M:100,L:100}},["Black"],"Create a safe space for practice whenever and wherever you are with our on-the-go yoga training mat. Plush and supportive for joints, supremely comfortable all round, and featuring dual texturing patterns for enhanced traction with straps for convenient carry and bold PUMA branding, you'll bring centred sophistication both to and from the studio.")
// let a6 = new accesorires("wa",6,"Core Seasonal Round Case Bag","bag",{Black:{link1:"images/Women's-Core-Seasonal-Round-Case-Bag.webp"} },29,"W",{Black:{S:100,M:100,L:100}},["Black"],"Practical and trendy, this Women's Core Seasonal Round Case Bag provides a functional silhouette in a lightweight sporty material, making it the perfect companion for every occassion.")
// let a7 = new accesorires("wa",7,"Core Base Women's Backpack","bag",{Pink:{link1:"images/Core-Base-Women's-Backpack.webp"}},45,"W",{Pink:{S:100,M:100,L:100}},["Pink"],"This sweet backpack is a great grab-and-go option for a day around town. Featuring two zip compartments, adjustable PUMA-branded shoulder straps and chic metallic PUMA Wordmark branding on the front, this pack will surely become your go-to fave.")
// let a8 = new accesorires("wa",8,"Core Base Women's Shopper","bag",{Pink:{link1:"images/Core-Base-Women's-Shopper.webp"}},30,"W",{Pink:{S:100,M:100,L:100}},["Pink"],"This sweet backpack is a great grab-and-go option for a day around town. ")


// accesoriesarray.push(a1,a2,a3,a4,a5,a6,a7,a8)






// const APIKEY="63df8e643bc6b255ed0c46a6";

// accesoriesarray.forEach(element => {



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

// })
