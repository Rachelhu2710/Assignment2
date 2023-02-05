var accessoriesarray=[]
$(document).ready(function() {



class accesorires
{ constructor(id,name,category,colorspicture,price,gender,sizestock,color,description)
{
  this.id=id
  this.name=name
  this.category=category
  this.colorspicture=colorspicture //contain picture for each color of product//
  this.price=price
  this.gender=gender
  this.sizestock=sizestock // contains diff sizes for each color of product//
  this.color=color
  this.description=description
}



}



let a1 = new accesorires(1,"Indoor Basketball","Ball",{Orange:{link1:"images/Indoor-Basketball.webp"}},45,"K",{Orange:{S:100,M:100,L:100}},["Orange"],"Play like the pros with our Indoor Basketball, a high-performance piece of sporting equipment engineered for optimal play indoors, so you can play the game you love no matter the conditions outside.")
let a2 = new accesorires(2,"Manchester City FC","Bag",{Blue:{link1:"images/Manchester-City-F.C.webp"}},29,"K",{Blue:{S:100,M:100,L:100}},["Blue"],"Show your support for Man City with this portable bag straight from our ftblLEGACY. It holds 1.5L and is perfect to bring to games at the stadium or to wear around town to show your allegiance to the club.")
let a3 = new accesorires(3,"PUMA x SMILEYWORLD Backpack Youth","Bag",{Pink:{link1:"images/PUMA-x-SMILEYWORLD-Backpack-Youth.webp"}},35,"K",{Pink:{S:100,M:100,L:100}},["Pink"],"Small yet mighty, the Phase Backpack is large enough to tote your must-haves, but bold enough to make an impact. Featuring eye-catching graphics and a comfortable fit, you'll stand out in the hallways.")
let a4 = new accesorires(4,"Small World Pinch Panel Cap Kids","Cap",{Blue:{link1:"images/Small-World-Pinch-Panel-Cap-Kids-blue.webp"},Pink:{link1:"images/Small-World-Pinch-Panel-Cap-Kids-pink.webp"}},25,"K",{Blue:{Fixed:100},Pink:{Fixed: 100}},["Blue","Pink"],"This Small World cap from PUMA is designed for big adventures. With a curved brim to shield their eyes from the sun and a moisture-wicking sweatband to help them keep their cool, this practical piece of headgear is just perfect for little explorers. The cute bug-inspired design adds a sweet touch of style.")
let a5 = new accesorires(5,"Borussia Dortmund ftblCore Fan Football","Ball",{Yellow:{link1:"images/Borussia-Dortmund-ftblCore-Fan-Football.webp"}},35,"K",{Yellow:100},["Yellow"],"Play in the park while showing your support for Borussia Dortmund with the ftblCore Fan Football – complete with the team colours, name, and PUMA wordmark on one side. Heja BVB!")
let a6 = new accesorires(6,"Essentials No.2 Logo Kids Cap","Cap",{Pink:{link1:"images/Essentials-No-pink.webp"},Black:{link1:"images/Essentials-No-black.webp"}},69,"K",{Pink:100,Black:100},["Pink","Black"],"Shade your eyes in essential PUMA style. This classic six-panel baseball cap for juniors features a 3D-embroidered PUMA No.2 Logo on the front and a strap in the back to ensure a customized fit.")
let a7 = new accesorires(7,"Phase Small Youth Backpack","Bag",{Black:{link1:"images/Phase-Small-Youth-Backpack.webp"}},35,"K",{Black:100},["Black"],"Small yet mighty, the Phase Backpack is large enough to tote your must-haves, but bold enough to make an impact. Featuring eye-catching graphics and a comfortable fit, you'll stand out in the hallways.")
let a8 = new accesorires(8,"Kids' 1 Pack Quarter Socks","Socks",{Black:{link1:"images/Kids'-1-Pack-Quarter-Socks-black.webp"},Pink:{link1:"images/Kids'-1-Pack-Quarter-Socks-pink.webp"}},5.9,"K",{Black:{S:100,M:100,L:100},Pink:{S:100,M:100,L:100}},["Black","Pink"],"Featuring a 1 pack, these quarter socks are sure to provide maximum comfort for your little ones.")



accessoriesarray.push(a1,a2,a3,a4,a5,a6,a7,a8)
var accessories1 =document.querySelectorAll(".contentaccesories")

accessories1.forEach(element  => {

     
  accessoriesarray.forEach(el => {


    if(element.getAttribute("data-id")==el.id)
    { let c=el.colorspicture[`${el.color[0]}`].link1
    //   console.log(c)
      element.children[0].setAttribute("src",c)
      element.children[1].innerHTML=el.name+" $"+el.price
   
    }

    
  });
    
    

    
});
// console.log(document.title)
if (document.title=="Kids accessories 1") {
  // console.log("hi")
  let id =localStorage.getItem('id')
  let uid =localStorage.getItem('uid')
  // console.log(id)
  // console.log(uid)
  // console.log(shoesarray[0])
  accessoriesarray.forEach(element => {
    // console.log("hi")
    if (id==element.id) {
  
    // console.log("hi")
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
    else if (element.gender=='K') {
        gender="Kids"
        cat.innerHTML=`${gender} ${element.category}`
      }

    let price = document.getElementById("price")
    price.innerHTML=`$${element.price}`
    let sizes=document.getElementById("size")
    for (const key in element.sizestock[color]) {

      sizes.innerHTML+=`<div class="sizes" data-size=${key}><button onclick="checkout(this)">${key}</button></div>`
   

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



});



function hoveritem(e)
  { 
    
    let id =e.getAttribute("data-id")
    let uid =e.getAttribute("data-uid")
    let item =document.getElementById(`item${id}`)



    
  accessoriesarray.forEach(el => {


    if(id==el.id)
    { 
      if (el.color.length>1) {
       
         
       
        var x=el.colorspicture[`${el.color[uid]}`].link1
       
        
          item.setAttribute("src",x)
          item.parentElement.dataset.uidma=uid
        //   console.log(item.parentElement)

         
        
 
         


    
        
        
        
      }
     
   
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
