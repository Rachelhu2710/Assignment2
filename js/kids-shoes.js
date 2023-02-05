const shoesarray=[];
$(document).ready(function(){



 
    class shoes{
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
    
    
    let s1=new shoes(1,"PUMA x SMILEYWORLD Caven Sneakers Kids","shoes",{Black:{link1:"images/PUMA-x-SMILEYWORLD-Caven-Sneakers-Kids-black.webp"},Pink:{link1:"images/PUMA-x-SMILEYWORLD-Caven-Sneakers-Kids-pink.webp"}},119,"K",{Black:{3:100,10:100,9:100,8:100,7:100,6:100},Pink:{11:100,10:100,9:100,8:100,7:100,6:100}},["Black","Pink"],"The Caven sneaker is the new interpretation of a more progressive court silhouette inspired by ‘80s basketball. With its stacked midsole and textural overlays, the Caven stands out with a refreshed but timeless look and feel.")
    let s2=new shoes(2,"Flyer Flex Block Youth Trainers","shoes",{Blue:{link1:"images/Flyer-Flex-Block-Youth-Trainers-blue.webp"},Pink:{link1:"images/Flyer-Flex-Block-Youth-Trainers-pink.webp"}},75,"K",{Blue:{4:100,5:100,6:100,7:100,8:100,9:100},Pink:{4:100,5:100,6:100,7:100,8:100,9:100}},["Blue","Pink"],"These trainers are a totally new style that build on the popular Flyer Runner platform. The tooling features a bold new silhouette, with flex grooves running the full length of the shoe. For traction and durability, there's rubber coverage on the heel and toe. The upper, meanwhile, features colour-blocked PUMA Formstrip branding with a printed outline as well as heel and eyestay overlays. The heel also boasts bold PUMA branding.")
    let s3=new shoes(3,"Scuderia Ferrari Bao Kart Motorsport Shoes Babies","shoes",{Red:{link1:"images/Scuderia-Ferrari-Bao-Kart-Motorsport-Shoes-Babies.webp"}},89,"K",{Red:{3:100,4:100,5:100,6:100,7:100,8:100}},["Red"],"Race car sleek, these Bao Kart shoes from PUMA and Scuderia Ferrari are the ultimate in motorsport chic for baby racers. Featuring a silhouette as streamlined as any vehicle and a sturdy non-slip sole, it's the perfect blend of comfort and practicality – with plenty of cute little racing-inspired details to boot. Vroom vroom!")
    let s4=new shoes(4,"Popcat 20 Youth Sandals","slides",{Black:{link1:"images/Popcat-20-Youth-Sandals-black.webp"},White:{link1:"images/Popcat-20-Youth-Sandals-white.webp"}},35,"K",{Black:{4:100,5:100,6:100,7:100,8:100,9:100},White:{4:100,5:100,6:100,7:100,8:100,9:100}},["Black","White"],"These sandals are comfort and style combined. The supportive EVA midsole keeps you feeling fresh every step of the way, and the bold PUMA No. 1 Logo across the strap means you'll look as good as you feel.")
    let s5=new shoes(5,"All Day Active Alternative Closure Sneakers Kids","shoes",{Pink:{link1:"images/All-Day-Active-Alternative-Closure-Sneakers-Kids-pink.webp"},Grey:{link1:"images/All-Day-Active-Alternative-Closure-Sneakers-Kids-grey.webp"}},59,"K",{Pink:{3:100,10:100,9:100,8:100,7:100,6:100},Grey:{3:100,10:100,9:100,8:100,7:100,6:100}},["Pink","Grey"],"We know your little one is super-powered by boundless energy: now there’s a sneaker designed to keep up with them. The new All-Day Active combines a fresh, clean look with a comfort-enhancing SOFTFOAM+ sockliner, for kids who are raring to go.")
    let s6=new shoes(6,"Carina L Youth Trainers","shoes",{Pink:{link1:"images/Carina-L-Youth-Trainers-pink.webp"},White:{link1:"images/Carina-L-Youth-Trainers-white.webp"}},79,"K",{Pink:{4:100,5:100,6:100,7:100,8:100,9:100},White:{4:100,5:100,6:100,7:100,8:100,9:100}},["Pink","White"],"We pulled the Carina from our fashion archives for a throwback style that is the ultimate in street chic, inspired by Californian beach towns at the peak of the '80s.")
    let s7=new shoes(7,"Courtflex V2 Babies","shoes",{White:{link1:"images/Courtflex-V2-Babies'-Trainers-white.webp"},Black:{link1:"images/Courtflex-V2-Babies'-Trainers-black.webp"}},55,"K",{White:{3:100,4:100,5:100,6:100,7:100,8:100},Black:{3:100,4:100,5:100,6:100,7:100,8:100}},["White","Black"],"Kid-specific and court-inspired, the Courtflex V2 Trainers are made to be worn every day. Featuring a wide instep for easy on and off, plus an increased width and height in the toe area, these kicks will quickly become all-time faves.")
    let s8=new shoes(8,"Popcat 20 Kids Sandals","slides",{Pink:{link1:"images/Popcat-20-Kids'-Sandals-pink.webp"},White:{link1:"images/Popcat-20-Kids'-Sandals-white.webp"},Black:{link1:"images/Popcat-20-Kids'-Sandals-black.webp"}},29,"K",{Pink:{4:100,5:100,6:100,7:100,8:100,9:100},White:{4:100,5:100,6:100,7:100,8:100,9:100},Black:{4:100,5:100,6:100,7:100,8:100,9:100}},["Pink","White","Black"],"Slip into a true PUMA classic with our Popcat 20, delivering incomparable style and comfort for generations to come.")



  
    shoesarray.push(s1,s2,s3,s4,s5,s6,s7,s8);




    var shoes1 =document.querySelectorAll(".contentshoes")

    shoes1.forEach(element  => {
    
         
      shoesarray.forEach(el => {
    
    
        if(element.getAttribute("data-id")==el.id)
        { let c=el.colorspicture[`${el.color[0]}`].link1
        //   console.log(c)
          element.children[0].setAttribute("src",c)
          element.children[1].innerHTML=el.name + " $"+el.price
       
        }
    
        
      });
        
        
    
        
    });
    if (document.title=="Kids shoes 1") {
      // console.log("hi")
      let id =localStorage.getItem('id')
      let uid =localStorage.getItem('uid')
      // console.log(id)
      // console.log(uid)
      // console.log(shoesarray[0])
      shoesarray.forEach(element => {
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

function redirect(e)
  {

  let id = e.parentElement.getAttribute('data-id')
  let uid =e.parentElement.getAttribute('data-uidma')
  localStorage.setItem('id',id)
  localStorage.setItem('uid',uid)
  }

  function checkout(e)
  {
    document.querySelector('#sizes').addEventListener('click', function()
    { 
      let cart=document.getElementById("cart")
      cart.innerHTML+= "<a href='checkout.html' id ='addtobag'>Add To Bag</a> "
      let size = e.parentElement.getAttribute('data-size')
      localStorage.setItem("size",size)
    });
  }
