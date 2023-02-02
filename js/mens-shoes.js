var shoesarray=[]
$(document).ready(function() {

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


let s1=new shoes(1,"NCT Sneakers","shoes",{Green:{link1:"images/NCT_Sneakers.webp"},Black:{link1:"images/Slipstream-Sneakers-black.webp"}},159,"M",{Black:{11:100,10:100,9:100,8:100,7:100,6:100},Green:{11:100,10:100,9:100,8:100,7:100,6:100}},["Green","Black"])
let s2=new shoes(2,"Flyer Flex Running Shoes","shoes",{White:{link1:"images/Flyer_Flex_Running_Shoes.webp"},Black:{link1:"images/Flyer-Flex-Running-Shoes-black.webp"}},89,"M",{Black:{11:100,10:100,9:100,8:100,7:100,6:100},white:{11:100,10:100,9:100,8:100,7:100,6:100}},["White","Black"])

let s3=new shoes(3,"Slipstream Lo Trainers","shoes",{Brown:{link1:"images/Slipstream-Lo-Trainers.webp"},Pink:{link1:"images/Slipstream-Lo-Trainers-pink.webp"},Green:{link1:"images/Slipstream-Lo-Trainers-green.webp"}},149,"M",{Brown:{11:100,10:100,9:100,8:100,7:100,6:100},Pink:{11:100,10:100,9:100,8:100,7:100,6:100},Green:{11:100,10:100,9:100,8:100,7:100,6:100}},["Brown","Pink","Green"])
let s4=new shoes(4,"CA Pro Suede FS Sneakers","shoes",{Brown:{link1:"images/CA-Pro-Suede-FS-Sneakers.webp"},Green:{link1:"images/CA-Pro-Suede-FS-Sneakers-green.webp"}},169,"M",{Brown:{11:100,10:100,9:100,8:100,7:100,6:100},Green:{11:100,10:100,9:100,8:100,7:100,6:100}},["Brown","Green"])

let s5=new shoes(5,"Extent Nitro Europa Sneakers","shoes",{Blue:{link1:"images/Extent-Nitro-Europa-Sneakers-blue.webp"},Black:{link1:"images/Extent-Nitro-Europa-Sneakers-black.webp"}},209,"M",{Black:{11:100,10:100,9:100,8:100,7:100,6:100},Blue:{11:100,10:100,9:100,8:100,7:100,6:100}},["Blue","Black"])

let s6=new shoes(6,"Leadcat FTR Comfort Sandals","slides",{Black:{link1:"images/Leadcat-FTR-Comfort-Sandals.webp"}},65,"M",{Black:{11:100,10:100,9:100,8:100,7:100,6:100}},["Black"])
let s7=new shoes(7,"Anzarun Lite Trainers","shoes",{White:{link1:"images/Anzarun-Lite-Trainers.webp"},Black:{link1:"images/Anzarun-Lite-Trainers-pink.webp"},Pink:{link1:"images/Anzarun-Lite-Trainers-black.webp"}},109,"M",{Black:{11:100,10:100,9:100,8:100,7:100,6:100},White:{11:100,10:100,9:100,8:100,7:100,6:100},Pink:{11:100,10:100,9:100,8:100,7:100,6:100}},["Black","White","Pink"])
let s8=new shoes(8,"Leadcat 2","shoes",{Black:{link1:"images/Leadcat-2.webp"},White:{link1:"images/Leadcat-2-white.webp"}},75,"M",{Black:{11:100,10:100,9:100,8:100,7:100,6:100},White:{11:100,10:100,9:100,8:100,7:100,6:100}},["Black","White"])

shoesarray.push(s1,s2,s3,s4,s5,s6,s7,s8);

// $(".content img").attr("src",s1.picture.Link1)
// console.log($(".content").data("id"))


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





});

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



  

  

    
