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
    
    
    let c1=new clothes(1,"Active Sports Shorts Youth","Shorts",{Blue:{link1:"images/Active-Sports-Shorts-Youth-blue.webp"},Black:{link1:"images/Active-Sports-Shorts-Youth-black.webp"}},45,"K",{Blue:{S:100,M:100,L:100},Black:{S:100,M:100,L:100},Blue:{S:100,M:100,L:100}},["Blue","Black"],"Level up your sportswear with the Active Sports shorts – designed for maximum freedom of movement and made with fibres infused with two powerful moisture-wicking technologies to keep you feeling dry and comfortable.")
    let c2=new clothes(2,"PUMA x SMILEYWORLD Minicat Jogger Set Babies","Jogger Set",{Black:{link1:"images/PUMA-x-SMILEYWORLD-Minicat-Jogger-Set-Babies-black.webp"},Pink:{link1:"images/PUMA-x-SMILEYWORLD-Minicat-Jogger-Set-Babies-pink.webp"}},45,"K",{Blue:{S:100,M:100,L:100},Pink:{S:100,M:100,L:100}},["Black","Pink"],"Suit your little one up with head-to-toe athletic-inspired style in this sweet Minicats set. Featuring classic lines, bold branding, shoulder seam buttoning for easy dressing and soft sustainable cotton fabrics, your baby won't just look their best - they'll feel their best too.")
    let c3=new clothes(3,"PUMA x SMILEYWORLD T7 Track Jacket Kids","Jacket",{Pink:{link1:"images/PUMA-x-SMILEYWORLD-T7-Track-Jacket-Kids-pink.webp"},Black:{link1:"images/PUMA-x-SMILEYWORLD-T7-Track-Jacket-Kids-black.webp"}},79,"K",{Pink:{S:100,M:100,L:100},Black:{S:100,M:100,L:100}},["Pink","Black"],"Experience the power of a true icon. This T7 track jacket hails from the PUMA Archives, and is a faithful replica of the original – with wide T7 stripes, a stand-up collar and a chunky branded zip puller.")
    let c4=new clothes(4,"PUMA x POKÉMON Hoodie Youth","Hoodie",{Blue:{link1:"images/PUMA-x-POKÉMON-Hoodie-Youth-blue.webp"},Black:{link1:"images/PUMA-x-POKÉMON-Hoodie-Youth-black.webp"}},99,"K",{Blue:{S:100,M:100,L:100},Black:{S:100,M:100,L:100}},["Blue","Black"],"The PUMA x POKÉMON collection is inspired by some of the most iconic POKÉMON, and we take some of their instantly recognisable elements to give this hoodie a splash of POKÉMON DNA. Eye-catching colours, statement graphics, character-inspired details – it’s all here. Are you gonna catch ‘em all?")
    let c5=new clothes(5,"PUMA x POKÉMON Sweatpants Youth","Sweatpants",{Black:{link1:"images/PUMA-x-POKÉMON-Sweatpants-Youth-black.webp"},Blue:{link1:"images/PUMA-x-POKÉMON-Sweatpants-Youth-blue.webp"}},79,"K",{Black:{S:100,M:100,L:100},Blue:{S:100,M:100,L:100}},["Black","Blue"],"The PUMA x POKÉMON collection is inspired by some of the most iconic POKÉMON, and we take some of their instantly recognisable elements to give these sweatpants a splash of POKÉMON DNA. Eye-catching colours, statement graphics, character-inspired details – it’s all here. Are you gonna catch ‘em all?")
    let c6=new clothes(6,"PUMA x SMILEYWORLD Tee Kids","T-shirt",{Pink:{link1:"images/PUMA-x-SMILEYWORLD-Tee-Kids-pink.webp"},Yellow:{link1:"images/PUMA-x-SMILEYWORLD-Tee-Kids-yellow.webp"},Black:{link1:"images/PUMA-x-SMILEYWORLD-Tee-Kids-black.webp"}},259,"K",{Pink:{S:100,M:100,L:100},Yellow:{S:100,M:100,L:100},Black:{S:100,M:100,L:100}},["Pink","Yellow","Black"],"Feel fresh and look fabulous in this fun and funky T-shirt from PUMA's Runtrain collection. Designed for comfort with its cute crew neck and dryCELL technology, it's the perfect piece to help you reach your personal best. Because nobody runs it like you do.")
    let c7=new clothes(7,"PUMA x SMILEYWORLD Knot Tee Kids","T-shirt",{Yellow:{link1:"images/PUMA-x-SMILEYWORLD-Knot-Tee-Kids-yellow.webp"},Black:{link1:"images/PUMA-x-SMILEYWORLD-Knot-Tee-Kids-black.webp"},Pink:{link1:"images/PUMA-x-SMILEYWORLD-Knot-Tee-Kids-pink.webp"}},89,"K",{Yellow:{S:100,M:100,L:100},Black:{S:100,M:100,L:100},Pink:{S:100,M:100,L:100}},["Yellow","Black","Pink"],"Feel fresh and look fabulous in this fun and funky T-shirt from PUMA's Runtrain collection. Designed for comfort with its cute crew neck and dryCELL technology, it's the perfect piece to help you reach your personal best. Because nobody runs it like you do.")
    let c8=new clothes(8,"PUMA x SMILEYWORLD Kids Tee Dress","Dress",{Black:{link1:"images/PUMA-x-SMILEYWORLD-Kids'-Tee-Dress.webp"}},69,"W",{Black:{S:100,M:100,L:100}},["Black"],"Equip your wardrobe with silhouettes that are fiercely feminine in our HER collection, a line of luxe reimagined basics for the modern street style enthusiast. Our HER Tee Dress plays with form, featuring a focal waistline drawcord for a customisable fit and flattering street style silhouette.")
  



    
    clothesarray.push(c1,c2,c3,c4,c5,c6,c7,c8);



    var clothing =document.querySelectorAll(".contentclothes")

    clothing.forEach(element  => {
    
         
      clothesarray.forEach(el => {
    
    
        if(element.getAttribute("data-id")==el.id)
        { let c=el.colorspicture[`${el.color[0]}`].link1
        //   console.log(c)
          element.children[0].setAttribute("src",c)
          element.children[1].innerHTML=el.name + " $"+el.price       
        }
    
        
      });
        
        
    
        
    });
    if (document.title=="Kids clothes 1") {
    //   console.log("hi")
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
        else if (element.gender=='K') {
            gender="Kids"
            cat.innerHTML=`<h3>${gender} ${element.category}</h3>`
          }
    
        let price = document.getElementById("price")
        price.innerHTML=`$${element.price}`
        let sizes=document.getElementById("size")
        
        for (const key in element.sizestock[color]) {
    
        sizes.innerHTML+=`<div class="sizes" data-size=${key}><button onclick="checkout(this)">${key}</button></div>`
       
    
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
    let sizeButtons = document.querySelectorAll('.sizes');
    sizeButtons.forEach(button => {
      button.addEventListener('click', function() { 
        let cart = document.getElementById("cart")
        cart.innerHTML += `<a href='checkout.html' id ='addtobag'>Add To Bag</a> `
        let size = e.parentElement.getAttribute('data-size')
        localStorage.setItem("size", size)
      });
    });
  }
