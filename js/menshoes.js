let links = 
[
  {idname: "item1-1",link:"images/NCT_Sneakers.webp",cat:"shoes"},
  {idname: "item1-2",link:"images/Slipstream-Sneakers-black.webp",cat:"shoes"},
  {idname: "item2-1",link:"images/Flyer_Flex_Running_Shoes.webp",cat:"shoes"},
  {idname: "item2-2",link:"images/Flyer-Flex-Running-Shoes-black.webp"}
]
const buttons = document.getElementsByTagName("a");
const buttonPressed = e => {  
  localStorage.setItem("id",e.target.id)
  localStorage.setItem("class",e.target.className)
};

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

for(let name of shoelinks)
{
  if (localStorage.getItem("class")=== name.cat)
  {
    if (localStorage.getItem("id")=== name.idname)
    {
      document.querySelector("img").src = name.link  
    }
  }
}

