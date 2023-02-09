// localStorage.clear()

// const APIKEY="63df8e643bc6b255ed0c46a6";
// const APIKEY="63e3eb01478852088da67ee5";
// // "url": "https://assignment-7a34.restdb.io/rest/products",

//   let settings = {
//     "async": true,
//     "crossDomain": true,
//     "async":false,
//     "url":"https://dbasg2-7182.restdb.io/rest/products",
//     "method": "GET", 
//     "headers": {
//       "content-type": "application/json",
//       "x-apikey": APIKEY,
//       "cache-control": "no-cache"
//     },
//   }
 
//    $.ajax(settings).done(function (response) {

  
//     for (var i = 0; i < response.length ; i++) {
        
//        if(response[i]["productcode"]=="ms")
//        {
//         // shoesarray.push(response[i])
//         localStorage.setItem(`ms${response[i]["id"]}`,JSON.stringify(response[i]))

//        }
//        else if(response[i]["productcode"]=="ma")
//        {
//         // accesoriesarray.push(response[i])
//         localStorage.setItem(`ma${response[i]["id"]}`,JSON.stringify(response[i]))

  
//        }
//        else if(response[i]["productcode"]=="mc")
//        {
//         // accesoriesarray.push(response[i])
//         localStorage.setItem(`mc${response[i]["id"]}`,JSON.stringify(response[i]))

  
//        }
//        else if(response[i]["productcode"]=="wa")
//        {
//         // accesoriesarray.push(response[i])
//         localStorage.setItem(`wa${response[i]["id"]}`,JSON.stringify(response[i]))

  
//        }
//        else if(response[i]["productcode"]=="wc")
//        {
//         // accesoriesarray.push(response[i])
//         localStorage.setItem(`wc${response[i]["id"]}`,JSON.stringify(response[i]))

  
//        }
//        else if(response[i]["productcode"]=="ws")
//        {
//         // accesoriesarray.push(response[i])
//         localStorage.setItem(`ws${response[i]["id"]}`,JSON.stringify(response[i]))

  
//        }
      
      
   

//     }
    
//  })


//  window.onload = function () {
//   if (localStorage.getItem("hasCodeRunBefore") === null) {
     
   
//       localStorage.setItem("cart",JSON.stringify([]))
//       localStorage.setItem("hasCodeRunBefore", true);
//   }
// }

// localStorage.setItem("users",JSON.stringify([]))
// let users=JSON.parse(localStorage.getItem("users"))


// const APIKEY="63e3eb01478852088da67ee5";
// // "url": "https://assignment-7a34.restdb.io/rest/Userinfo",

//   let settings = {
//     "async": true,
//     "crossDomain": true,
//     "async":false,
//     "url":"https://dbasg2-7182.restdb.io/rest/Userinfo",
//     "method": "GET", 
//     "headers": {
//       "content-type": "application/json",
//       "x-apikey": APIKEY,
//       "cache-control": "no-cache"
//     },
//   }
 
//    $.ajax(settings).done(function (response) {
//     response.forEach(element => {
//         users.push(element)
//         localStorage.setItem("users",JSON.stringify(users))
        
//     });
    



  

      
//    })



localStorage.setItem("isloggedin", true);
  
 