$(document).ready(function(){


 console.log(new Date().toISOString().slice(0, 10))
   $("#DOB").attr("max",new Date().toISOString().slice(0, 10))
   let female =document.querySelector(".f")
   let male =document.querySelector(".m")


 female.addEventListener("click",(e)=>
 {
  e.preventDefault();
  
  female.parentElement.dataset.gender=female.getAttribute("value")
  
 })
 male.addEventListener("click",(e)=>
 {
  e.preventDefault();
  male.parentElement.dataset.gender=male.getAttribute("value")
  
 })






 
    const APIKEY="63df8e643bc6b255ed0c46a6";
  

    $("#sign-up-button").click(function(e) {


        e.preventDefault();
        let email = $("#Email").val();
        let password = $("#password").val();
        let name = $("#FN").val()+" "+$("#LN").val();
        // let dob = $("#DOB").val();
        let country = $("#country").val();
        // let PhoneNumber = $("#PhoneNumber").val();
        let gender=$("#gender").attr("data-gender");  
        let text = /^[a-zA-Z]+$/;
        // validate email
        if (email === "") //make sure that email is not left blank
        {
          alert("Email cannot be left blank");
          return;
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) //make sure that email have a @ and .com
        {
          alert("Invalid email format")
          return;
        }
      
        // Validate password
        if (password ==='') //make sure that password is not left blank
        {
          alert("Password cannot be left blank")
          return;
        }
        else if (password.length < 8) //make sure that password is 8 characters long
        {
          alert("Password must be at least 8 characters long");
          return;
        }
        //validate name
        if (name ==='') //make sure that is not left empty
        {
          alert("First and Last Name cannot be left black");
          return;
        }
        else if (name.match(text)) //make sure that name only have letters
        {
          alert("First and Last Name should only have letters");
          return;
        }
        //validate country to make sure that one option is selected
        if (country ==='')
        {
          alert("Please Select a Country");
          return;
        }
        //validate gender to make sure either one is selected
        if (gender ==='')
        {
          alert("Please Select a Gender");
          return;
        }
    
        //[STEP 3]: get form values when user clicks on send
        //Adapted from restdb api
        let jsondata = {
          "Username": name,
          "Email": email,
          "gender": "male",
          "password": password,
          "country":country,
          "gender":gender
        //   "Student Age": StudentAge,
        //   "Phone Number": PhoneNumber   
        }   
    
    
      console.log(jsondata)
 
    

    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://assignment-7a34.restdb.io/rest/userinfo",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
          
        }
        ,
        "processData": false,
        "data": JSON.stringify(jsondata),
        // "beforeSend": function(){
        //   //@TODO use loading bar instead
        //   //disable our button or show loading bar
        // //   $("#sub,").prop( "disabled", true);
        // //   //clear our form using the form id and triggering it's reset feature
        // //   $("#add-contact-form").trigger("reset");
        // }
      }

      $.ajax(settings).done(function (response) {
        console.log(response);
        
        // $("#contact-submit").prop( "disabled", false);
        
        // //@TODO update frontend UI 
        // $("#add-update-msg").show().fadeOut(3000);
  
        // //update our table 
        // getContacts();
      });
    ;//end click 
    })













})


