// localStorage.clear()
let users=[]
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
      
      
   

    }
 await sleep(2000)
    
 })

     
        localStorage.setItem("cart",JSON.stringify([]))
        localStorage.setItem("hasCodeRunBefore", true);
        localStorage.setItem("isloggedin", false);
    }
  }
  


  
 