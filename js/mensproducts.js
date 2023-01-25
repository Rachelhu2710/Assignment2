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


let s1=new shoes(1,"NCT Sneakers","shoes",{white:{link1:"images/NCT_Sneakers.webp"},red:{link1:null},Green:{link1:null}},130,"M",{11:100,10:100,9:100,8:100,7:100,6:100})
let s2=new shoes(2,"Flyer Flex Running Shoes","shoes",{white:{link1:"images/Flyer_Flex_Running_Shoes.webp"},red:{link1:null},Green:{link1:null}},130,"M",{11:100,10:100,9:100,8:100,7:100,6:100})
let s3=new shoes(3,"Slipstream Lo Trainers","shoes",{white:{link1:"images/Slipstream-Lo-Trainers.webp"},red:{link1:null},Green:{link1:null}},110,"M",{11:100,10:100,9:100,8:100,7:100,6:100})
let s4=new shoes(4,"CA Pro Suede FS Sneakers","shoes",{white:{link1:"images/Slipstream-Lo-Trainers.webp"},red:{link1:null},Green:{link1:null}},160,"M",{11:100,10:100,9:100,8:100,7:100,6:100})
let s5=new shoes(5,"Softride Enzo NXT Men","shoes",{white:{link1:"images/Softride-Enzo-NXT-Men's-Running-Shoes.webp"},red:{link1:null},Green:{link1:null}},130,"M",{11:100,10:100,9:100,8:100,7:100,6:100})
let s6=new shoes(6,"Leadcat FTR Comfort Sandals","slides",{white:{link1:"images/Leadcat-FTR-Comfort-Sandals.webp"},red:{link1:null},Green:{link1:null}},120,"M",{11:100,10:100,9:100,8:100,7:100,6:100})
let s7=new shoes(7,"Anzarun Lite Trainers","shoes",{white:{link1:"images/Anzarun-Lite-Trainers.webp"},red:{link1:null},Green:{link1:null}},170,"M",{11:100,10:100,9:100,8:100,7:100,6:100})
let s8=new shoes(8,"Leadcat 2","shoes",{white:{link1:"images/Leadcat-2.webp"},red:{link1:null},Green:{link1:null}},170,"M",{11:100,10:100,9:100,8:100,7:100,6:100})
const shoearray=[];
shoearray.push(s1,s2,s3,s4,s5,s6,s7,s8);

// $(".content img").attr("src",s1.picture.Link1)
// console.log($(".content").data("id"))

const content =document.querySelectorAll(".content")
console.log(content)
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
    constructor(id,name,category,colorspicture,colors,price,gender,sizestock)
    {   this.id=id
        this.name=name
        this.category=category
        this.colorspicture=colorspicture
        this.price=price
        this.gender=gender
        this.sizestock=sizestock
       
    }
}




let c1 =new clothes(1,"PUMA x MARKET Graphic Tee","t-shirt",{White:{link1:"images/PUMA-x-MARKET-Graphic-Tee-Men-white.webp",link2:"images/PUMA-x-MARKET-Graphic-Tee-Men-white-back.webp"},Black:{link1:"images/PUMA-x-MARKET-Graphic-Tee-Men-black.webp",link2:"images/PUMA-x-MARKET-Graphic-Tee-Men-black-back.webp"}},35,"M",{S:100,M:100,L:100})
let c2 =new clothes(2,"Fandom Shorts","shorts",{Black:{link1:"images/Fandom-Shorts-Men-Black.webp",link2:"images/Fandom-Shorts-Men-Black-back.webp"},Lavender:{link1:"images/Fandom-Shorts-Men-Lavender.webp",link2:"images/Fandom-Shorts-Men-Lavender-Back.webp"}},30,"M",{S:100,M:100,L:100})
let c3 =new clothes(3,"Classics Straigt Sweatpants","sweatpants",{grey:{link1:"images/Classics-Straight-Sweatpants-Men.webp",link2:null},Lavender:{link1:null,link2:null}},30,"M",{S:100,M:100,L:100})
let c4 =new clothes(4,"Classics Small Logo Tee","t-shirt",{blue:{link1:"images/Classics-Small-Logo-Tee-Men.webp",link2:null},Lavender:{link1:null,link2:null}},25,"M",{S:100,M:100,L:100})
let c5 =new clothes(5,"Logo Short Sleeve Men","t-shirt",{brown:{link1:"images/Logo-Short-Sleeve-Men's-Running-Tee.webp",link2:null},Lavender:{link1:null,link2:null}},35,"M",{S:100,M:100,L:100})
let c6 =new clothes(6,"T7 Printed Track Jacket Men","jacket",{black:{link1:"images/T7-Printed-Track-Jacket-Men.webp",link2:null},Lavender:{link1:null,link2:null}},85,"M",{S:100,M:100,L:100})
let c7 =new clothes(7,"Classics Relaxed Crewneck Sweatshirt","sweatshirt",{blue:{link1:"images/Classics-Relaxed-Crewneck-Sweatshirt-Men.webp" ,link2:null},Lavender:{link1:null,link2:null}},75,"M",{S:100,M:100,L:100})
let c8 =new clothes(8,"Classics Relaxed Hoodie ","hoodie",{beige:{link1:"images/Classics-Relaxed-Hoodie-Men.webp" ,link2:null},Lavender:{link1:null,link2:null}},75,"M",{S:100,M:100,L:100})


var clothesarray=[]
clothesarray.push(c1,c2,c3,c4,c5,c6,c7,c8)





const clothing =document.querySelectorAll(".content")
console.log(content)
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











});
