var clothesarray=[]
$(document).ready(function() {

class shoes{
    constructor(id,name,category,colorspicture,price,gender,sizestock)
    {   this.id=id
        this.name=name
        this.category=category
        this.colorspicture=colorspicture
        this.price=price
        this.gender=gender
        this.sizestock=sizestock
       
    }
}


let s1=new shoes(1,"NCT Sneakers","shoes",{white:{link1:"images/NCT_Sneakers.webp"},black:{link1:"images/Slipstream-Sneakers-black.webp"},Green:{link1:null}},159,"M",{black:{11:100,10:100,9:100,8:100,7:100,6:100},white:{11:100,10:100,9:100,8:100,7:100,6:100},color3:null})
let s2=new shoes(2,"Flyer Flex Running Shoes","shoes",{white:{link1:"images/Flyer_Flex_Running_Shoes.webp"},red:{link1:null},Green:{link1:null}},89,"M",{black:{11:100,10:100,9:100,8:100,7:100,6:100},white:{11:100,10:100,9:100,8:100,7:100,6:100},color3:null})
let s3=new shoes(3,"Slipstream Lo Trainers","shoes",{white:{link1:"images/Slipstream-Lo-Trainers.webp"},red:{link1:null},Green:{link1:null}},149,"M",{black:{11:100,10:100,9:100,8:100,7:100,6:100},white:{11:100,10:100,9:100,8:100,7:100,6:100},color3:null})
let s4=new shoes(4,"CA Pro Suede FS Sneakers","shoes",{white:{link1:"images/CA-Pro-Suede-FS-Sneakers.webp"},red:{link1:null},Green:{link1:null}},169,"M",{black:{11:100,10:100,9:100,8:100,7:100,6:100},white:{11:100,10:100,9:100,8:100,7:100,6:100},color3:null})
let s5=new shoes(5,"Extent Nitro Europa Sneakers","shoes",{white:{link1:"images/Extent-Nitro-Europa-Sneakers-blue.webp"},red:{link1:null},Green:{link1:null}},209,"M",{black:{11:100,10:100,9:100,8:100,7:100,6:100},white:{11:100,10:100,9:100,8:100,7:100,6:100},color3:null})
let s6=new shoes(6,"Leadcat FTR Comfort Sandals","slides",{white:{link1:"images/Leadcat-FTR-Comfort-Sandals.webp"},red:{link1:null},Green:{link1:null}},65,"M",{black:{11:100,10:100,9:100,8:100,7:100,6:100},white:{11:100,10:100,9:100,8:100,7:100,6:100},color3:null})
let s7=new shoes(7,"Anzarun Lite Trainers","shoes",{white:{link1:"images/Anzarun-Lite-Trainers.webp"},red:{link1:null},Green:{link1:null}},109,"M",{black:{11:100,10:100,9:100,8:100,7:100,6:100},white:{11:100,10:100,9:100,8:100,7:100,6:100},color3:null})
let s8=new shoes(8,"Leadcat 2","shoes",{white:{link1:"images/Leadcat-2.webp"},red:{link1:null},Green:{link1:null}},75,"M",{black:{11:100,10:100,9:100,8:100,7:100,6:100},white:{11:100,10:100,9:100,8:100,7:100,6:100},color3:null})
const shoearray=[];
shoearray.push(s1,s2,s3,s4,s5,s6,s7,s8);

// $(".content img").attr("src",s1.picture.Link1)
// console.log($(".content").data("id"))

const content =document.querySelectorAll(".contentshoes")
content.forEach(element  => {
 console.log(element)
     
  shoearray.forEach(el => {


    if(element.getAttribute("data-id")==el.id)
    {
      console.log(element.children[0].setAttribute("src",el.colorspicture.white.link1))
      element.children[1].innerHTML=`${el.name}\t $${el.price}`
    }

    
  });
    
    

    
});




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




let c1 =new clothes(1,"PUMA x MARKET Graphic Tee","t-shirt",{White:{link1:"images/PUMA-x-MARKET-Graphic-Tee-Men-white.webp",link2:"images/PUMA-x-MARKET-Graphic-Tee-Men-white-back.webp"},Black:{link1:"images/PUMA-x-MARKET-Graphic-Tee-Men-black.webp",link2:"images/PUMA-x-MARKET-Graphic-Tee-Men-black-back.webp"}},89,"M",{White:{XS:100,S:100,M:100,L:100},Black:{XS:100,S:100,M:100,L:100}},["White","Black"])
let c2 =new clothes(2,"Fandom Shorts","shorts",{Black:{link1:"images/Fandom-Shorts-Men-Black.webp",link2:"images/Fandom-Shorts-Men-Black-back.webp"},Lavender:{link1:"images/Fandom-Shorts-Men-Lavender.webp",link2:"images/Fandom-Shorts-Men-Lavender-Back.webp"}},30,"M",{Black:{S:100,M:100,L:100},Lavender:{S:100,M:100,L:100}},["Black","Lavender"])
let c3 =new clothes(3,"Classics Straight Sweatpants","sweatpants",{Brown:{link1:"images/Classics-Straight-Sweatpants-Men.webp",link2:null}},109,"M",{Brown:{XS:100,S:100,M:100,L:100}},["Brown"])
let c4 =new clothes(4,"Classics Small Logo Tee","t-shirt",{Blue:{link1:"images/Classics-Small-Logo-Tee-Men-Blue.webp",link2:"images/Classics-Small-Logo-Tee-Men-black.webp"},Black:{link1:"images/Classics-Small-Logo-Tee-Men-black.webp",link2:"images/Classics-Small-Logo-Tee-Men-Blue.webp"}},45,"M",{Blue:{XS:100,S:100,M:100,L:100},Black:{XS:100,S:100,M:100,L:100}},["Blue","Black"])
let c5 =new clothes(5,"Logo Short Sleeve Men","t-shirt",{Brown:{link1:"images/Logo-Short-Sleeve-Men's-Running-Tee-grape.webp",link2:"images/Logo-Short-Sleeve-Men's-Running-Tee-red.webp"},Red:{link1:"images/Logo-Short-Sleeve-Men's-Running-Tee-red.webp",link2:"images/Logo-Short-Sleeve-Men's-Running-Tee-grape.webp"}},55,"M",{Brown:{XS:100,S:100,M:100,L:100},Red:{XS:100,S:100,M:100,L:100}},["Brown","Red"])
let c6 =new clothes(6,"T7 Printed Track Jacket Men","jacket",{Black:{link1:"images/Iconic-T7-Men's-Track-Jacket.webp",link2:null}},85,"M",{Black:{XS:100,S:100,M:100,L:100}},["Black"])
let c7 =new clothes(7,"Classics Relaxed Crewneck Sweatshirt","sweatshirt",{Blue:{link1:"images/Classics-Relaxed-Crewneck-Sweatshirt-Men-Blue.webp" ,link2:"images/Classics-Relaxed-Crewneck-Sweatshirt-Men-Green.webp"},Green:{link1:"images/Classics-Relaxed-Crewneck-Sweatshirt-Men-Green.webp",link2:"images/Classics-Relaxed-Crewneck-Sweatshirt-Men-Blue.webp"}},75,"M",{Blue:{XS:100,S:100,M:100,L:100},Green:{XS:100,S:100,M:100,L:100}},["Blue","Green"])
let c8 =new clothes(8,"Classics Relaxed Hoodie ","hoodie",{Beige:{link1:"images/Classics-Relaxed-Hoodie-Men-Grey.webp" ,link2:"images/Classics-Relaxed-Hoodie-Men-Black.webp"},Black:{link1:"images/Classics-Relaxed-Hoodie-Men-Black.webp",link2:"images/Classics-Relaxed-Hoodie-Men-Grey.webp"}},75,"M",{Beige:{XS:100,S:100,M:100,L:100},Black:{XS:100,S:100,M:100,L:100}},["Beige","Black"])



clothesarray.push(c1,c2,c3,c4,c5,c6,c7,c8)





var clothing =document.querySelectorAll(".contentclothes")

clothing.forEach(element  => {

     
  clothesarray.forEach(el => {


    if(element.getAttribute("data-id")==el.id)
    { let c=el.colorspicture[`${el.color[0]}`].link1
      console.log(c)
      element.children[0].setAttribute("src",c)
      element.children[1].innerHTML=(el.name)+ ' $'+(el.price)
   
    }

    
  });
    
    

    
});





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



let a1 = new accesorires(1,"Metal Cat Cap","cap",{black:{link1:"images/Metal-Cat-Cap-Black.webp"} , blue:{link1:"images/Metal-Cat-Cap-Blue.webp"},green:{link1:"images/Metal-Cat-Cap-Green.webp"}},25,"M",{black:{S:100,M:100,L:100},blue:{S:100,M:100,L:100},green:{S:100,M:100,L:100}})
let a2 = new accesorires(2,"PUMA x PALOMO Cap","cap",{navy:{link1:"images/PUMA-x-PALOMO-Cap.webp"}},25,"M",{navy:{S:100,M:100,L:100}})
let a3 = new accesorires(3,"Seuderia Ferrari SPTWR Race Backpack","bag",{black:{link1:"images/Scuderia-Ferrari-SPTWR-Race-Backpack.webp"}},55,"M",{black:{S:100,M:100,L:100}})
let a4 = new accesorires(4,"Gym Training Bottle","bottle",{black:{link1:"images/Gym-Training-Bottle.webp"}},15,"M",{black:100})
let a5 = new accesorires(4,"PUMA Shaker Bottle","bottle",{black:{link1:"images/PUMA-Shaker-Bottle.webp"}},15,"M",{black:100})
let a6 = new accesorires(5,"PUMA x CHILDHOOD DREAMS Basketball Bucket Hat","hat",{beige:{link1:"images/PUMA-x-CHILDHOOD-DREAMS-Basketball-Bucket-Hat.webp"}},35,"M",{beige:{S:100,M:100,L:100}})
let a7 = new accesorires(4,"Originals PUMA Small shoulder Bag","bag",{black:{link1:"images/Originals-PU-Small-Shoulder-Bag.webp"}},45,"M",{black:100})
let a8 = new accesorires(4,"Running Waist Band","band",{black:{link1:"images/Running-Waist-Band.webp"}},15,"M",{black:100})


let accesoriresarray=[];
accesoriresarray.push(a1,a2,a3,a4,a5,a6,a7,a8)




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
        var x=el.colorspicture[`${el.color[0]}`].link1
        var y=el.colorspicture[`${el.color[1]}`].link1
        if(uid==1)
        {
          item.setAttribute("src",x)
        }
        else if(uid==2)
        {
          item.setAttribute("src",y)
        }
        
        
        
      }
   
    }

    
  });

  

  

    
} 