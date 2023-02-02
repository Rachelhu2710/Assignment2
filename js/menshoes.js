let links = 
[
  {idname: "item1-1",link:"images/NCT_Sneakers.webp",cat:"shoes"},
  {idname: "item1-2",link:"images/Slipstream-Sneakers-black.webp",cat:"shoes"},
  {idname: "item2-1",link:"images/Flyer_Flex_Running_Shoes.webp",cat:"shoes"},
  {idname: "item2-2",link:"images/Flyer-Flex-Running-Shoes-black.webp",cat:"shoes"},
  {idname: "item3-1",link:"images/Slipstream-Lo-Trainers.webp",cat:"shoes"},
  {idname: "item3-2",link:"images/Slipstream-Lo-Trainers-pink.webp",cat:"shoes"},
  {idname: "item3-3",link:"images/Slipstream-Lo-Trainers-green.webp",cat:"shoes"},
  {idname: "item4-1",link:"images/CA-Pro-Suede-FS-Sneakers.webp",cat:"shoes"},
  {idname: "item4-2",link:"images/CA-Pro-Suede-FS-Sneakers-green.webp",cat:"shoes"},
  {idname: "item5-1",link:"images/Extent-Nitro-Europa-Sneakers-blue.webp",cat:"shoes"},
  {idname: "item5-2",link:"images/Extent-Nitro-Europa-Sneakers-black.webp",cat:"shoes"},
  {idname: "item6-1",link:"images/Leadcat-FTR-Comfort-Sandals.webp",cat:"shoes"},
  {idname: "item7-1",link:"images/Anzarun-Lite-Trainers.webp",cat:"shoes"},
  {idname: "item7-2",link:"images/Anzarun-Lite-Trainers-black.webp",cat:"shoes"},
  {idname: "item7-3",link:"images/Anzarun-Lite-Trainers-pink.webp",cat:"shoes"},
]
const buttons = document.getElementsByTagName("a");
const buttonPressed = e => {  
  localStorage.setItem("id",e.target.id)
  localStorage.setItem("class",e.target.className)
};

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

for(let name of links)
{
  if (localStorage.getItem("class")=== name.cat)
  {
    if (localStorage.getItem("id")=== name.idname)
    {
      document.querySelector("img").src = name.link  
    }
  }
}

