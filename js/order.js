function item1()
{
    let itemid = "shoes1"
    localStorage.setItem("id",itemid)
}
function item2()
{
    let itemid = "shoes2"
    localStorage.setItem("id",itemid)
}
function item3()
{
    let itemid = "shoes3"
    localStorage.setItem("id",itemid)
}
function item4()
{
    let itemid = "shoes4"
    localStorage.setItem("id",itemid)
}
function item5()
{
    let itemid = "shoes5"
    localStorage.setItem("id",itemid)
}
function item6()
{
    let itemid = "shoes6"
    localStorage.setItem("id",itemid)
}
function item7()
{
    let itemid = "shoes7"
    localStorage.setItem("id",itemid)
}
function item8()
{
    let itemid = "shoes8"
    localStorage.setItem("id",itemid)
}
function item9()
{
    let itemid = "shoes9"
    localStorage.setItem("id",itemid)
}
function item10()
{
    let itemid = "shoes10"
    localStorage.setItem("id",itemid)
}
function item11()
{
    let itemid = "shoes11"
    localStorage.setItem("id",itemid)
}
function item12()
{
    let itemid = "shoes12"
    localStorage.setItem("id",itemid)
}
function item13()
{
    let itemid = "shoes13"
    localStorage.setItem("id",itemid)
}
function item14()
{
    let itemid = "shoes14"
    localStorage.setItem("id",itemid)
}
function item15()
{
    let itemid = "shoes15"
    localStorage.setItem("id",itemid)
}
function item16()
{
    let itemid = "shoes16"
    localStorage.setItem("id",itemid)
}
function item17()
{
    let itemid = "shoes17"
    localStorage.setItem("id",itemid)
}
function item18()
{
    let itemid = "shoes18"
    localStorage.setItem("id",itemid)
}
function item19()
{
    let itemid = "shoes11"
    localStorage.setItem("id",itemid)
}
function item20()
{
    let itemid = "shoes20"
    localStorage.setItem("id",itemid)
}
function item21()
{
    let itemid = "shoes21"
    localStorage.setItem("id",itemid)
}
function item22()
{
    let itemid = "shoes22"
    localStorage.setItem("id",itemid)
}
function item23()
{
    let itemid = "shoes23"
    localStorage.setItem("id",itemid)
}
function item24()
{
    let itemid = "shoes24"
    localStorage.setItem("id",itemid)
}
function checkout()
{
 let quantity= document.getElementById("quantity").value
 console.log(quantity)
 let size = document.getElementById("size").value
 localStorage.setItem("quantity",quantity)
 localStorage.setItem("size",size)
}
function validate()
{
    let naming = document.getElementById('naming').value
    if(naming.length<=2)
    {
        alert("Name must be more than 2 charaters")
    }
}
let shoes =
[
    {idname:"shoes1",name:"PUMA x COCA-COLA Suede Sneakers",price:179.00},
    {idname:"shoes2",name:"PUMA x COCA-COLA Slipstream Sneakers",price:119.40},
    {idname:"shoes3",name:"PUMA x COCA-COLA Rider FV Limited-Edition Sneakers",price:249.00},
    {idname:"shoes4",name:"PUMA x COCA-COLA Rider FV Sneakers",price:249.00},
    {idname:"shoes5",name:"Softride Premier Women's Running Shoes",price:119.00},
    {idname:"shoes6",name:"Leadcat FTR Slides",price:45.00},
    {idname:"shoes7",name:"Prowl Slip-On Shine Women's Training Shoes",price:65.40},
    {idname:"shoes8",name:"TRC Blaze Court Basketball Shoes",price:119.40},
    {idname:"shoes9",name:"PUMA x COCA-COLA Suede Sneakers",price:179.00},
    {idname:"shoes10",name:"PUMA x COCA-COLA Slipstream Sneakers",price:119.40},
    {idname:"shoes11",name:"PUMA x COCA-COLA Rider FV Limited-Edition Sneakers",price:249.00},
    {idname:"shoes12",name:"PUMA x COCA-COLA Rider FV Sneakers",price:249.00},
    {idname:"shoes13",name:"Better Foam Emerge 3D Men's Running Shoes",price:77.40},
    {idname:"shoes14",name:"Eternity Nitro Men's Running Shoes",price:209.00},
    {idname:"shoes15",name:"PWRFRAME Men's Training Shoes",price:95.40},
    {idname:"shoes16",name:"Cool Cat V Sandals Men",price:27.00},
    {idname:"shoes17",name:"PUMA x POKÉMON Rider FV Bulbasaur Sneakers Youth",price:129.00},
    {idname:"shoes18",name:"PUMA x POKÉMON Rider FV Pikachu Sneakers Kids",price:119.00},
    {idname:"shoes19",name:"PUMA x POKÉMON Sliptream Lo Charmander Sneakers Youth",price:119.00},
    {idname:"shoes20",name:"PUMA x POKÉMON Rider FV Bulbasaur Sneakers Kids",price:119.00},
    {idname:"shoes21",name:"PUMA x POKÉMON Slipstream Lo Charmander Alternative Closure Sneakers Babies",price:99.00},
    {idname:"shoes22",name:"PUMA x POKÉMON Rider FV Bulbasaur Sneakers Babies",price:99.00},
    {idname:"shoes23",name:"Carina L Youth Trainers",price:47.40},
    {idname:"shoes24",name:"FUTURE 3.3 FG/AG Youth Football Boots",price:53.40},
]
let itemid = localStorage.getItem("id")
for(let item of shoes)
{
    if (item.idname===itemid) 
    {
        let price = item.price
        let itemname = item.name
        let output = document.getElementById('display')
        let amount = localStorage.getItem('quantity')
        let size = localStorage.getItem("size")
        let totalamount = price*amount
        output.innerHTML+= itemname+" x"+amount+"<p></p>Price:$"+price+"<p></p>"+"Size: "+size+"<p></p>"+"Total:$"+totalamount
        break 
    }
}
localStorage.clear()
