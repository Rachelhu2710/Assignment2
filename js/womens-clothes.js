const clothesarray=[];
$(document).ready(function(){




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
    
    
    let c1=new clothes(1,"PUMA x KOCHÉ Cropped Short Sleeve Tee","t-shirt",{Black:{link1:"images/PUMA-x-KOCHÉ-Cropped-Short-Sleeve-Tee-Women-black.webp"},Brown:{link1:"images/PUMA-x-KOCHÉ-Cropped-Short-Sleeve-Tee-Women-brown.webp"},White:{link1:"images/PUMA-x-KOCHÉ-Cropped-Short-Sleeve-Tee-Women-white.webp"}},42,"F",{Black:{S:100,M:100,L:100},Brown:{S:100,M:100,L:100},White:{S:100,M:100,L:100}},["Black","Brown","White"])
    let c2=new clothes(2,"PUMA x VOUGE Leggings","leggings",{Blue:{link1:"images/PUMA-x-VOGUE-Leggings-Women-blue.webp"},Grey:{link1:"images/PUMA-x-KOCHÉ-Cropped-Short-Sleeve-Tee-Women-white.webp"}},50,"F",{Blue:{S:100,M:100,L:100},Grey:{S:100,M:100,L:100}},["Blue","Grey"])
    let c3=new clothes(3,"Studio Ultrabare Strappy Training Bra","bra",{Blue:{link1:"images/Studio-Ultrabare-Strappy-Training-Bra-Women-blue.webp"},Black:{link1:"images/Studio-Ultrabare-Strappy-Training-Bra-Women-black.webp"},Brown:{link1:"images/Studio-Ultrabare-Strappy-Training-Bra-Women-brown.webp"}},30,"F",{Blue:{S:100,M:100,L:100},Black:{S:100,M:100,L:100},Brown:{S:100,M:100,L:100}},["Blue","Black","Brown"])
    let c4=new clothes(4,"PUMA x AMI Tee","t-shirt",{Blue:{link1:"images/PUMA-x-AMI-Tee-blue.webp"},Orange:{link1:"images/PUMA-x-AMI-Tee-orange.webp"}},22,"F",{Blue:{S:100,M:100,L:100},Orange:{S:100,M:100,L:100}},["Blue","Orange"])
    let c5=new clothes(5,"PUMA x AMI Hoodie","hoodie",{Orange:{link1:"images/PUMA-x-AMI-Hoodie-orange.webp"},Black:{link1:"images/PUMA-x-AMI-Hoodie-black.webp"}},65,"F",{Orange:{S:100,M:100,L:100},Black:{S:100,M:100,L:100}},["Orange","Black"])
    let c6=new clothes(6,"PUMA x AMI Half Zip Sweatshirt","sweatshirt",{Blue:{link1:"images/PUMA-x-AMI-Half-Zip-Sweatshirt-blue.webp"},Purple:{link1:"images/PUMA-x-AMI-Half-Zip-Sweatshirt-purple.webp"}},70,"F",{Blue:{S:100,M:100,L:100},Purple:{S:100,M:100,L:100}},["Blue","Purple"])
    let c7=new clothes(7,"T7 Synthetic Mini Skirt","skirt",{Black:{link1:"images/T7-Synthetic-Mini-Skirt-Women-black.webp"},White:{link1:"images/T7-Synthetic-Mini-Skirt-Women-white.webp"}},40,"F",{Black:{S:100,M:100,L:100},White:{S:100,M:100,L:100}},["Black","White"])
    let c8=new clothes(8,"Elastic 3","shorts",{Black:{link1:"images/Elastic-3-Women's-Training-Shorts-black.webp"},Grey:{link1:"images/Elastic-3-Women's-Training-Shorts-grey.webp"}},54,"F",{Black:{S:100,M:100,L:100},Grey:{S:100,M:100,L:100}},["Black","Grey"])
  



    
    clothesarray.push(c1,c2,c3,c4,c5,c6,c7,c8);



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
    




})



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

