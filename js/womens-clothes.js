let productscart=JSON.parse(localStorage.getItem("cart"))
const clothesarray=[];



for (let index = 1; index < 9;index++){
  clothesarray.push(JSON.parse(localStorage.getItem(`wc${index}`)))
  
}


    var clothing =document.querySelectorAll(".contentclothes")

    clothing.forEach(element  => {
    
         
      clothesarray.forEach(el => {
    
    
        if(element.getAttribute("data-id")==el.id)
        { let c=el.colorspicture[`${el.color[0]}`].link1
        //   console.log(c)
          element.children[0].setAttribute("src",c)
          element.children[1].innerHTML=el.name + " $"+el.price       
        }
    
        
      });
        
        
    
        
    });
    if (document.title=="Women clothes 1") {
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



    
  clothesarray.forEach(el => {


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
  localStorage.setItem('productcode',"wc")
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
 
    clothesarray.forEach(element => {
    console.log(element)
      if (element.id==Id && PC=="wc") {


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
            let Productcode=PC
            let productobj={ID:id,UID:UId,Name:name,Size:size,Color:color,Image:image,Quantity:quantity,Price:price,PRODUCTCODE:Productcode}
        productscart.push(productobj)
        // console.log("no")
        
       }
        
      }
      
    });
    localStorage.setItem("cart",JSON.stringify(productscart))
    console.log(localStorage.getItem("cart"))
    window.location.reload();

}






























// class clothes{
//   constructor(productcode,id,name,category,colorspicture,price,gender,sizestock,color,description)
//   { this.productcode=productcode  
//     this.id=id
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


// let c1=new clothes("wc",1,"PUMA x KOCH?? Cropped Short Sleeve Tee","t-shirt",{Black:{link1:"images/PUMA-x-KOCH??-Cropped-Short-Sleeve-Tee-Women-black.webp"},Brown:{link1:"images/PUMA-x-KOCH??-Cropped-Short-Sleeve-Tee-Women-brown.webp"},White:{link1:"images/PUMA-x-KOCH??-Cropped-Short-Sleeve-Tee-Women-white.webp"}},149,"W",{Black:{S:100,M:100,L:100},Brown:{S:100,M:100,L:100},White:{S:100,M:100,L:100}},["Black","Brown","White"],"This one???s for the movers and shakers: the brand new PUMA x KOCH?? collab is sport-progressive and technical with a fashion edge. Time to mix things up. Shaped for a cropped fit, this tee is perfect for switching up your off-duty style. From the mesh inserts to graphic heat transfers, wear to clash, to match (with other items in the collection) or whatever you want.")
// let c2=new clothes("wc",2,"PUMA x VOUGE Leggings","leggings",{Blue:{link1:"images/PUMA-x-VOGUE-Leggings-Women-blue.webp"},Grey:{link1:"images/PUMA-x-VOGUE-Leggings-Women-grey.webp"}},109,"W",{Blue:{S:100,M:100,L:100},Grey:{S:100,M:100,L:100}},["Blue","Grey"],"The PUMA x VOGUE collection stands where the gym meets the runway, and these leggings adopt this mantra to the max. Its tight and flexible construction harkens to PUMA???s athletic heritage, while the magazine???s name and jacquard lines deliver a pop of character beyond the playing field.")
// let c3=new clothes("wc",3,"Studio Ultrabare Strappy Training Bra","bra",{Blue:{link1:"images/Studio-Ultrabare-Strappy-Training-Bra-Women-blue.webp"},Black:{link1:"images/Studio-Ultrabare-Strappy-Training-Bra-Women-black.webp"},Brown:{link1:"images/Studio-Ultrabare-Strappy-Training-Bra-Women-brown.webp"}},65,"W",{Blue:{S:100,M:100,L:100},Black:{S:100,M:100,L:100},Brown:{S:100,M:100,L:100}},["Blue","Black","Brown"],"Grab this training bra before you hit the studio. It offers low-impact support for gentle training sessions, plus PUMA???s Ultrabare fabric gives a feeling of freedom and unrestricted movement. The flattering strappy silhouette???s got you covered in the style stakes too, for an all-round winner.")
// let c4=new clothes("wc",4,"PUMA x AMI Tee","t-shirt",{Blue:{link1:"images/PUMA-x-AMI-Tee-blue.webp"},Orange:{link1:"images/PUMA-x-AMI-Tee-orange.webp"}},129,"W",{Blue:{S:100,M:100,L:100},Orange:{S:100,M:100,L:100}},["Blue","Orange"],"WE ARE F(AMI)LY. This tee from the second season of PUMA x AMI is guided by the creative vision of the Parisian label, finding the balance between relaxed and refined, amiable and edgy, streetwear and sportswear ??? just like every item from season one.")
// let c5=new clothes("wc",5,"PUMA x AMI Hoodie","hoodie",{Orange:{link1:"images/PUMA-x-AMI-Hoodie-orange.webp"},Black:{link1:"images/PUMA-x-AMI-Hoodie-black.webp"}},259,"W",{Orange:{S:100,M:100,L:100},Black:{S:100,M:100,L:100}},["Orange","Black"],"WE ARE F(AMI)LY. This hoodie from the second season of PUMA x AMI is guided by the creative vision of the Parisian label, finding the balance between relaxed and refined, amiable and edgy, streetwear and sportswear ??? just like every item from season one.")
// let c6=new clothes("wc",6,"PUMA x AMI Half Zip Sweatshirt","sweatshirt",{Blue:{link1:"images/PUMA-x-AMI-Half-Zip-Sweatshirt-blue.webp"},Purple:{link1:"images/PUMA-x-AMI-Half-Zip-Sweatshirt-purple.webp"}},259,"W",{Blue:{S:100,M:100,L:100},Purple:{S:100,M:100,L:100}},["Blue","Purple"],"WE ARE F(AMI)LY. This half-zip sweatshirt from the second season of PUMA x AMI is guided by the creative vision of the Parisian label, finding the balance between relaxed and refined, amiable and edgy, streetwear and sportswear ??? just like every item from season one.")
// let c7=new clothes("wc",7,"T7 Synthetic Mini Skirt","skirt",{Black:{link1:"images/T7-Synthetic-Mini-Skirt-Women-black.webp"},White:{link1:"images/T7-Synthetic-Mini-Skirt-Women-white.webp"}},89,"W",{Black:{S:100,M:100,L:100},White:{S:100,M:100,L:100}},["Black","White"],"Slip into the signature style that started it all with our T7 line, named for its most iconic element ??? the 7cm racing stripes that catapulted PUMA into fashion stardom. Our T7 mini skirt was designed for the daring, featuring its namesake T7 stripes that scream attitude.")
// let c8=new clothes("wc",8,"Elastic 3","shorts",{Black:{link1:"images/Elastic-3-Women's-Training-Shorts-black.webp"},Grey:{link1:"images/Elastic-3-Women's-Training-Shorts-grey.webp"}},55,"W",{Black:{S:100,M:100,L:100},Grey:{S:100,M:100,L:100}},["Black","Grey"],"These shorts are an essential addition to your workout wardrobe. A comfy elastic waistband provides a secure fit, while PUMA's moisture-wicking dryCELL technology keeps you dry, even as your training heats up.")





// clothesarray.push(c1,c2,c3,c4,c5,c6,c7,c8);
// const APIKEY="63df8e643bc6b255ed0c46a6";

// clothesarray.forEach(element => {



// //[STEP 3]: get form values when user clicks on send
// //Adapted from restdb api
// let jsondata = {
// "productcode":element.productcode ,
// "id":element.id,
// "name":element.name,
// "category":element.category,
// "colorspicture":element.colorspicture,
// "price":element.price,
// "gender":element.gender,
// "sizestock":element.sizestock,
// "color":element.color,
// "description":element.description

// }   





// let settings = {
// "async": true,
// "crossDomain": true,
// "url": "https://assignment-7a34.restdb.io/rest/products",
// "method": "POST", //[cher] we will use post to send info
// "headers": {
// "content-type": "application/json",
// "x-apikey": APIKEY,
// "cache-control": "no-cache"

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