let accesoriesarray=[];
$(document).ready(function(){

    class accesorires
    { constructor(id,name,category,colorspicture,price,gender,sizestock)
    {
      this.id=id
      this.name=name
      this.category=category
      this.colorspicture=colorspicture //contain picture for each color of product//
      this.price=price
      this.gender=gender
      this.sizestock=sizestock // contains diff sizes for each color of product//
    
    }
    
    
    
    }
    
    
    
    let a1 = new accesorires(1,"Puma High Cut Footie","socks",{White:{link1:"images/PUMA-Unisex-High-Cut-Footie-white.webp"} , Black:{link1:"images/PUMA-Unisex-High-Cut-Footie-black.webp"},Grey:{link1:"images/PUMA-Unisex-High-Cut-Footie-grey.webp"}},15,"F",{White:{S:100,M:100,L:100},Black:{S:100,M:100,L:100},Grey:{S:100,M:100,L:100}},["White","Black","Grey"])
    let a2 = new accesorires(2,"Training Bottle","bottle",{Black:{link1:"images/Training-Bottle-black.webp"} , Red:{link1:"images/Training-Bottle-red.webp"},Pink:{link1:"images/Training-Bottle-pink.webp"}},15,"F",{Black:{S:100,M:100,L:100},Red:{S:100,M:100,L:100},Pink:{S:100,M:100,L:100}},["Black","Red","Pink"])
    let a3 = new accesorires(3,"Result Backpack","bag",{Pink:{link1:"images/Result-Backpack-pink.webp"} , Black:{link1:"images/Result-Backpack-black.webp"}},15,"F",{Pink:{S:100,M:100,L:100},Black:{S:100,M:100,L:100}},["Pink","Black"])   
    let a4 = new accesorires(4,"Phase Packable Shopper","bag",{Black:{link1:"images/Training-Bottle-black.webp"}},20,"F",{Black:{S:100,M:100,L:100}},["Black"])
    let a5 = new accesorires(5,"Yoga Training Mat","mat",{Black:{link1:"images/Yoga-Training-Mat.webp"} },45,"F",{Black:{S:100,M:100,L:100}},["Black"])
    let a6 = new accesorires(6,"Core Seasonal Round Case Bag","bag",{Black:{link1:"images/Women's-Core-Seasonal-Round-Case-Bag.webp"} },35,"F",{Black:{S:100,M:100,L:100}},["Black"])
    let a7 = new accesorires(7,"Core Base Women's Backpack","bag",{Pink:{link1:"images/Core-Base-Women's-Backpack.webp"}},15,"F",{Pink:{S:100,M:100,L:100}},["Pink"])
    let a8 = new accesorires(8,"Core Base Women's Shopper","bag",{Pink:{link1:"images/Core-Base-Women's-Shopper.webp"}},17,"F",{Pink:{S:100,M:100,L:100}},["Pink"])

   
    accesoriesarray.push(a1,a2,a3,a4,a5,a6,a7,a8)
    
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
        




})

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


})