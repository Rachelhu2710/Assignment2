// localStorage.clear()

let allproducts=[]
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }


const APIKEY="63df8e643bc6b255ed0c46a6";





 window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
    //    console.log("hello")
     let settings = {
    "async": true,
    "crossDomain": true,
    "async":true,
    "url":"https://assignment-7a34.restdb.io/rest/products",
    "method": "GET", 
    "headers": {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache"
    },
  }
 
   $.ajax(settings).done( async function (response) {

  
    for (var i = 0; i < response.length ; i++) {
        allproducts.push(response[i])
        console.log(allproducts)
        
       if(response[i]["productcode"]=="ms")
       {
        // shoesarray.push(response[i])
        localStorage.setItem(`ms${response[i]["id"]}`,JSON.stringify(response[i]))

       }
       else if(response[i]["productcode"]=="ma")
       {
        // accesoriesarray.push(response[i])
        localStorage.setItem(`ma${response[i]["id"]}`,JSON.stringify(response[i]))

  
       }
       else if(response[i]["productcode"]=="mc")
       {
        // accesoriesarray.push(response[i])
        localStorage.setItem(`mc${response[i]["id"]}`,JSON.stringify(response[i]))

  
       }
       else if(response[i]["productcode"]=="wa")
       {
        // accesoriesarray.push(response[i])
        localStorage.setItem(`wa${response[i]["id"]}`,JSON.stringify(response[i]))

  
       }
       else if(response[i]["productcode"]=="wc")
       {
        // accesoriesarray.push(response[i])
        localStorage.setItem(`wc${response[i]["id"]}`,JSON.stringify(response[i]))

  
       }
       else if(response[i]["productcode"]=="ws")
       {
        // accesoriesarray.push(response[i])
        localStorage.setItem(`ws${response[i]["id"]}`,JSON.stringify(response[i]))

  
       }
       localStorage.setItem("allproducts",JSON.stringify(allproducts))
      
   

    }
 await sleep(2000)
    
 })

     
        localStorage.setItem("cart",JSON.stringify([]))
        localStorage.setItem("hasCodeRunBefore", true);
        localStorage.setItem("rewards",JSON.stringify([]))
        localStorage.setItem("isloggedin", false);
    }
  }


  
let prizes=[prize1={
  name:"$5 off total bill",
  type:"discount",
  id:1},
  prize2={
      name:"10 points",
      type:"points",
      id:2},
      prize3={
          name:"5 points",
          type:"points",
          id:3},
          prize4={
              name:"$20 off total bill",
              type:"discount",
              id:4},
              prize5={
                  name:"100 points",
                  type:"points",
                  id:5},
                  prize6={
                      name:"50 points",
                      type:"points",
                      id:6},
                      prize7={
                          name:"20 points",
                          type:"points",
                          id:7},
                          prize8={
                              name:"$10 off total bill",
                              type:"discount",
                              id:8},
  

  ]
localStorage.setItem("rewardslist", JSON.stringify(prizes))  


  
 