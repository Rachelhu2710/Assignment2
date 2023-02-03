var accessoriesarray=[]
$(document).ready(function() {



class accesorires
{ constructor(id,name,category,colorspicture,price,gender,sizestock,color)
{
  this.id=id
  this.name=name
  this.category=category
  this.colorspicture=colorspicture //contain picture for each color of product//
  this.price=price
  this.gender=gender
  this.sizestock=sizestock // contains diff sizes for each color of product//
  this.color=color
}



}



let a1 = new accesorires(1,"Metal Cat Cap","cap",{Black:{link1:"images/Metal-Cat-Cap-Black.webp"} , Blue:{link1:"images/Metal-Cat-Cap-Blue.webp"},Green:{link1:"images/Metal-Cat-Cap-Green.webp"}},25,"M",{Black:{S:100,M:100,L:100},Blue:{S:100,M:100,L:100},Green:{S:100,M:100,L:100}},["Black","Blue","Green"])
let a2 = new accesorires(2,"PUMA x PALOMO Cap","cap",{Navy:{link1:"images/PUMA-x-PALOMO-Cap.webp"}},25,"M",{Navy:{S:100,M:100,L:100}},["Navy"])
let a3 = new accesorires(3,"Seuderia Ferrari SPTWR Race Backpack","bag",{Black:{link1:"images/Scuderia-Ferrari-SPTWR-Race-Backpack.webp"}},55,"M",{Black:{S:100,M:100,L:100}},["Black"])
let a4 = new accesorires(4,"Gym Training Bottle","bottle",{Black:{link1:"images/Gym-Training-Bottle.webp"}},15,"M",{Black:100},["Black"])
let a5 = new accesorires(5,"PUMA Shaker Bottle","bottle",{Black:{link1:"images/PUMA-Shaker-Bottle.webp"}},15,"M",{Black:100},["Black"])
let a6 = new accesorires(6,"PUMA x CHILDHOOD DREAMS Basketball Bucket Hat","hat",{Beige:{link1:"images/PUMA-x-CHILDHOOD-DREAMS-Basketball-Bucket-Hat.webp"}},35,"M",{Beige:{S:100,M:100,L:100}},["Beige"])
let a7 = new accesorires(7,"Originals PUMA Small shoulder Bag","bag",{Black:{link1:"images/Originals-PU-Small-Shoulder-Bag.webp"}},45,"M",{Black:100},["Black"])
let a8 = new accesorires(8,"Running Waist Band","band",{Black:{link1:"images/Running-Waist-Band.webp"}},15,"M",{Black:100},["Black"])



accessoriesarray.push(a1,a2,a3,a4,a5,a6,a7,a8)
var accessories1 =document.querySelectorAll(".contentaccesories")

accessories1.forEach(element  => {

     
  accessoriesarray.forEach(el => {


    if(element.getAttribute("data-id")==el.id)
    { let c=el.colorspicture[`${el.color[0]}`].link1
    //   console.log(c)
      element.children[0].setAttribute("src",c)
      element.children[1].innerHTML=el.name
   
    }

    
  });
    
    

    
});




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


