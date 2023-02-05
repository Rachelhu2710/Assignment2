$(document).ready(function(){
    const APIKEY="63df8e643bc6b255ed0c46a6";
   


    $("#sign-up-button").click(function(e) {


        e.preventDefault();
        let email = $("#Email").val();
        let password = $("#password").val();
        let name = $("#FN").val()+" "+$("#LN").val();
        // let dob = $("#DOB").val();
        let country = $("#country").val();
        // let PhoneNumber = $("#PhoneNumber").val();
        // let gender=$("#gender").val();  
    
        //[STEP 3]: get form values when user clicks on send
        //Adapted from restdb api
        let jsondata = {
          "Username": name,
          "Email": email,
          "gender": "Male",
          "password": password,
          "country":country
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