
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




    let users = JSON.parse(localStorage.getItem("users"))
    console.log(users)
    for (let index = 0; index < users.length; index++) {
    let element = users[index];
   
    let username = element.Email
    let password=   element.password
    if(username==myusername && password==mypassword)
    {
        console.log("hello")
    }
    
}

    
})
