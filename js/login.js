let users=[]
let userreward=JSON.parse(localStorage.getItem("userreward"))
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }


const APIKEY="63df8e643bc6b255ed0c46a6";


  let settings1 = {
    "async": true,
    "crossDomain": true,
    "async":false,
    "url":"https://assignment-7a34.restdb.io/rest/userinfo",
    "method": "GET", 
    "headers": {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache"
    },
  }
 
   $.ajax(settings1).done(async function (response) {
    response.forEach(element => {
        users.push(element)
        localStorage.setItem("users",JSON.stringify(users))

        
    });
    await sleep(2000)
    

   })





$("#log-in-button").click(function(e) {

    e.preventDefault();
    let myusername = $("#username").val();
    let mypassword = $("#password").val();
 
    // validate email
    if (myusername === "") //make sure that email is not left blank
    {
      alert("Email cannot be left blank");
      return;
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myusername)) //make sure that email have a @ and .com
    {
      alert("Invalid email format")
      return;
    }
  
    // Validate password
    if (mypassword ==='') //make sure that password is not left blank
    {
      alert("Password cannot be left blank")
      return;
    }
    else if (mypassword.length < 8) //make sure that password is 8 characters long
    {
      alert("Password must be at least 8 characters long");
      return;
    }
    const player =document.querySelector('lottie-player');
    player.load('https://assets2.lottiefiles.com/packages/lf20_kkhbkdd3.json');
    $("lottie-player").css({"position":"absolute","z-index":"20"});
    player.addEventListener('complete', function() {
      window.location.href = "index.html";
        });


    let users = JSON.parse(localStorage.getItem("users"))
    console.log(users)
    for (let index = 0; index < users.length; index++) {
    let element = users[index];
   console.log(element)
    let username = element.Email
    let password=   element.password
    if(username==myusername && password==mypassword)
    {              
      userreward.forEach(element => { 
        if (element.username==username && element.password==password) {
      
          
          localStorage.setItem("username",username)
          localStorage.setItem("password",password)
          localStorage.setItem("cart",JSON.stringify([]))
          localStorage.setItem("points",element.coins) 
          localStorage.setItem("rewards",JSON.stringify(element.voucher))
          
        }
        
      });

localStorage.setItem("isloggedin", true);
    }
    // else{

    // }
}

    
})
