const shoesarray=[];
$(document).ready(function(){



 
    class shoes{
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
    
    
    let s1=new shoes(1,"PUMA x MARKET Slipstream Sneakers","shoes",{White:{link1:"images/PUMA-x-MARKET-Slipstream-Sneakers-white.webp"},Black:{link1:"images/PUMA-x-MARKET-Slipstream-Sneakers-black.webp"}},149,"F",{White:{11:100,10:100,9:100,8:100,7:100,6:100},Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["White","Black"])
    let s2=new shoes(2,"PUMA x TRC Mira Star","shoes",{White:{link1:"images/TRC-Mira-Star-Quality-Sneakers-Women-black.webp"},Black:{link1:"images/TRC-Mira-Star-Quality-Sneakers-Women-white.webp"}},139,"F",{White:{11:100,10:100,9:100,8:100,7:100,6:100},Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["White","Black"])
    let s3=new shoes(3,"All Day ActiveSneakers","shoes",{White:{link1:"images/All-Day-Active-Sneakers-white.webp"},Black:{link1:"images/All-Day-Active-Sneakers-black.webp"}},120,"F",{White:{11:100,10:100,9:100,8:100,7:100,6:100},Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["White","Black"])
    let s4=new shoes(4,"Slipstream Suede FS","shoes",{Red:{link1:"images/Slipstream-Suede-FS-Sneakers-Red.webp"},Green:{link1:"images/Slipstream-Suede-FS-Sneakers-Green.webp"}},160,"F",{Red:{11:100,10:100,9:100,8:100,7:100,6:100},Green:{11:100,10:100,9:100,8:100,7:100,6:100}},["Red","Green"])
    let s5=new shoes(5,"Softride Ruby Deco Glam","shoes",{Red:{link1:"images/Softride-Ruby-Deco-Glam-Running-Shoes-Women-red.webp"},Black:{link1:"images/Softride-Ruby-Deco-Glam-Running-Shoes-Women-black.webp"}},119,"F",{Red:{11:100,10:100,9:100,8:100,7:100,6:100},Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["Red","Black"])
    let s6=new shoes(6,"Suede Mayu","shoes",{Blue:{link1:"images/Suede-Mayu-Women's-Trainers-blue.webp"},Black:{link1:"images/Suede-Mayu-Women's-Trainers-black.webp"}},139,"F",{Blue:{11:100,10:100,9:100,8:100,7:100,6:100},Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["Blue","Black"])
    let s7=new shoes(7,"Kosmo Rider","shoes",{Pink:{link1:"images/Kosmo-Rider-Feminine-Tech-Sneakers-Women-pink.webp"},White:{link1:"images/Kosmo-Rider-Feminine-Tech-Sneakers-Women-white.webp"}},189,"F",{Pink:{11:100,10:100,9:100,8:100,7:100,6:100},White:{11:100,10:100,9:100,8:100,7:100,6:100}},["Pink","White"])
    let s8=new shoes(8,"RoyalCat Comfort CNY","slides",{White:{link1:"images/RoyalCat-Comfort-Chinese-New-Year-Slides-white.webp"},Black:{link1:"images/RoyalCat-Comfort-Chinese-New-Year-Slides-black.webp"}},35,"F",{White:{11:100,10:100,9:100,8:100,7:100,6:100},Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["White","Black"])



  
    shoesarray.push(s1,s2,s3,s4,s5,s6,s7,s8);




    var shoes1 =document.querySelectorAll(".contentshoes")

    shoes1.forEach(element  => {
    
         
      shoesarray.forEach(el => {
    
    
        if(element.getAttribute("data-id")==el.id)
        { let c=el.colorspicture[`${el.color[0]}`].link1
        //   console.log(c)
          element.children[0].setAttribute("src",c)
          element.children[1].innerHTML=el.name
       
        }
    
        
      });
        
        
    
        
    });
    














})


function hoveritem(e)
  { 
    
    let id =e.getAttribute("data-id")
    let uid =e.getAttribute("data-uid")
    let item =document.getElementById(`item${id}`)



    
  shoesarray.forEach(el => {


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

