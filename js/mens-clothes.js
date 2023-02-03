var clothesarray=[]
$(document).ready(function() {



class clothes{
    constructor(id,name,category,colorspicture,price,gender,sizestock,color)
    {   this.id=id
        this.name=name
        this.category=category
        this.colorspicture=colorspicture
        this.price=price
        this.gender=gender
        this.sizestock=sizestock
        this.color=color
       
    }
}




let c1 =new clothes(1,"PUMA x MARKET Graphic Tee","t-shirt",{White:{link1:"images/PUMA-x-MARKET-Graphic-Tee-Men-white.webp",link2:"images/PUMA-x-MARKET-Graphic-Tee-Men-white-back.webp"},Black:{link1:"images/PUMA-x-MARKET-Graphic-Tee-Men-black.webp",link2:"images/PUMA-x-MARKET-Graphic-Tee-Men-black-back.webp"}},35,"M",{White:{S:100,M:100,L:100},Black:{S:100,M:100,L:100}},["White","Black"])
let c2 =new clothes(2,"Fandom Shorts","shorts",{Black:{link1:"images/Fandom-Shorts-Men-Black.webp",link2:"images/Fandom-Shorts-Men-Black-back.webp"},Lavender:{link1:"images/Fandom-Shorts-Men-Lavender.webp",link2:"images/Fandom-Shorts-Men-Lavender-Back.webp"}},30,"M",{Black:{S:100,M:100,L:100},Lavender:{S:100,M:100,L:100}},["Black","Lavender"])
let c3 =new clothes(3,"Classics Straigt Sweatpants","sweatpants",{Brown:{link1:"images/Classics-Straight-Sweatpants-Men.webp",link2:null}},30,"M",{Brown:{S:100,M:100,L:100}},["Brown"])
let c4 =new clothes(4,"Classics Small Logo Tee","t-shirt",{Blue:{link1:"images/Classics-Small-Logo-Tee-Men-Blue.webp",link2:"images/Classics-Small-Logo-Tee-Men-black.webp"},Black:{link1:"images/Classics-Small-Logo-Tee-Men-black.webp",link2:"images/Classics-Small-Logo-Tee-Men-Blue.webp"}},25,"M",{Blue:{S:100,M:100,L:100},Black:{S:100,M:100,L:100}},["Blue","Black"])
let c5 =new clothes(5,"Logo Short Sleeve Men","t-shirt",{Brown:{link1:"images/Logo-Short-Sleeve-Men's-Running-Tee-grape.webp",link2:"images/Logo-Short-Sleeve-Men's-Running-Tee-red.webp"},Red:{link1:"images/Logo-Short-Sleeve-Men's-Running-Tee-red.webp",link2:"images/Logo-Short-Sleeve-Men's-Running-Tee-grape.webp"}},35,"M",{Brown:{S:100,M:100,L:100},Red:{S:100,M:100,L:100}},["Brown","Red"])
let c6 =new clothes(6,"T7 Printed Track Jacket Men","jacket",{Black:{link1:"images/T7-Printed-Track-Jacket-Men.webp",link2:null}},85,"M",{Black:{S:100,M:100,L:100}},["Black"])
let c7 =new clothes(7,"Classics Relaxed Crewneck Sweatshirt","sweatshirt",{Blue:{link1:"images/Classics-Relaxed-Crewneck-Sweatshirt-Men-Blue.webp" ,link2:"images/Classics-Relaxed-Crewneck-Sweatshirt-Men-Green.webp"},Green:{link1:"images/Classics-Relaxed-Crewneck-Sweatshirt-Men-Green.webp",link2:"images/Classics-Relaxed-Crewneck-Sweatshirt-Men-Blue.webp"}},75,"M",{Blue:{S:100,M:100,L:100},Green:{S:100,M:100,L:100}},["Blue","Green"])
let c8 =new clothes(8,"Classics Relaxed Hoodie ","hoodie",{Beige:{link1:"images/Classics-Relaxed-Hoodie-Men-Grey.webp" ,link2:"images/Classics-Relaxed-Hoodie-Men-Black.webp"},Black:{link1:"images/Classics-Relaxed-Hoodie-Men-Black.webp",link2:"images/Classics-Relaxed-Hoodie-Men-Grey.webp"}},75,"M",{Beige:{S:100,M:100,L:100},Black:{S:100,M:100,L:100}},["Beige","Black"])



clothesarray.push(c1,c2,c3,c4,c5,c6,c7,c8)

// clothesarray.forEach(element => {
//     console.log(element)
// });



var clothing =document.querySelectorAll(".contentclothes")

clothing.forEach(element  => {

     
  clothesarray.forEach(el => {


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



    
  clothesarray.forEach(el => {


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


