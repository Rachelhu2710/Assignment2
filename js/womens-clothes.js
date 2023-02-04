const clothesarray=[];
$(document).ready(function(){




    class clothes{
        constructor(id,name,category,colorspicture,price,gender,sizestock,color,description)
        {   this.id=id
            this.name=name
            this.category=category
            this.colorspicture=colorspicture
            this.price=price
            this.gender=gender
            this.sizestock=sizestock
            this.color=color
            this.description=description
           
        }
    }
    
    
    let c1=new clothes(1,"PUMA x KOCHÉ Cropped Short Sleeve Tee","t-shirt",{Black:{link1:"images/PUMA-x-KOCHÉ-Cropped-Short-Sleeve-Tee-Women-black.webp"},Brown:{link1:"images/PUMA-x-KOCHÉ-Cropped-Short-Sleeve-Tee-Women-brown.webp"},White:{link1:"images/PUMA-x-KOCHÉ-Cropped-Short-Sleeve-Tee-Women-white.webp"}},149,"F",{Black:{S:100,M:100,L:100},Brown:{S:100,M:100,L:100},White:{S:100,M:100,L:100}},["Black","Brown","White"],"This one’s for the movers and shakers: the brand new PUMA x KOCHÉ collab is sport-progressive and technical with a fashion edge. Time to mix things up. Shaped for a cropped fit, this tee is perfect for switching up your off-duty style. From the mesh inserts to graphic heat transfers, wear to clash, to match (with other items in the collection) or whatever you want.")
    let c2=new clothes(2,"PUMA x VOUGE Leggings","leggings",{Blue:{link1:"images/PUMA-x-VOGUE-Leggings-Women-blue.webp"},Grey:{link1:"images/PUMA-x-VOGUE-Leggings-Women-grey.webp"}},109,"F",{Blue:{S:100,M:100,L:100},Grey:{S:100,M:100,L:100}},["Blue","Grey"],"The PUMA x VOGUE collection stands where the gym meets the runway, and these leggings adopt this mantra to the max. Its tight and flexible construction harkens to PUMA’s athletic heritage, while the magazine’s name and jacquard lines deliver a pop of character beyond the playing field.")
    let c3=new clothes(3,"Studio Ultrabare Strappy Training Bra","bra",{Blue:{link1:"images/Studio-Ultrabare-Strappy-Training-Bra-Women-blue.webp"},Black:{link1:"images/Studio-Ultrabare-Strappy-Training-Bra-Women-black.webp"},Brown:{link1:"images/Studio-Ultrabare-Strappy-Training-Bra-Women-brown.webp"}},65,"F",{Blue:{S:100,M:100,L:100},Black:{S:100,M:100,L:100},Brown:{S:100,M:100,L:100}},["Blue","Black","Brown"],"Grab this training bra before you hit the studio. It offers low-impact support for gentle training sessions, plus PUMA’s Ultrabare fabric gives a feeling of freedom and unrestricted movement. The flattering strappy silhouette’s got you covered in the style stakes too, for an all-round winner.")
    let c4=new clothes(4,"PUMA x AMI Tee","t-shirt",{Blue:{link1:"images/PUMA-x-AMI-Tee-blue.webp"},Orange:{link1:"images/PUMA-x-AMI-Tee-orange.webp"}},129,"F",{Blue:{S:100,M:100,L:100},Orange:{S:100,M:100,L:100}},["Blue","Orange"],"WE ARE F(AMI)LY. This tee from the second season of PUMA x AMI is guided by the creative vision of the Parisian label, finding the balance between relaxed and refined, amiable and edgy, streetwear and sportswear – just like every item from season one.")
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
    
        sizes.innerHTML+=`<div id="sizes" data-size=${key}><button onclick="checkout(this)">${key}</button></div>`
       
    
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
function redirect(e)
  {

  let id = e.parentElement.getAttribute('data-id')
  let uid =e.parentElement.getAttribute('data-uidma')
  localStorage.setItem('id',id)
  localStorage.setItem('uid',uid)
  }

  function checkout(e)
  {
    if(document.getElementById('sizes').clicked == true)
    {
      console.log(document.getElementById("addtobag"))
    }
    // let size = e.parentElement.getAttribute('data-size')
    // localStorage.setItem("size",size)
  }
