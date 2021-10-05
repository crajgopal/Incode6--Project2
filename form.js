
document.addEventListener("DOMContentLoaded",()=> {

    let sub1 =document.getElementById("submit1");
    let sub2 =document.getElementById("submit2");


    /*javascript validations : email must contian @ and .characters,
     must be atleast one character before and after @, must be atleast 
     2 characters after .(dot)

    */


let surname= document.forms.form1.sname;
let fname =document.forms.form1.fname;
let email=document.forms.form1.email;
let msg =document.forms.form1.textmsg;



    sub1.addEventListener("click", validate);

    sub2.addEventListener("click", function()
    { 
        console.log( "clicked2" + document.getElementById("form2"))   ;
        
       document.getElementById("form2").style.display = "none";
       document.getElementById("form1").reset();
    } );

   
   function validate(event)  
    {

        let email1 =email.value;
        let atposition=email1.indexOf("@");  
        let dotposition=email1.lastIndexOf(".");  
        
        

   if (surname.value == "") {

        alert("Please enter your surname.");
        surname.focus();
    }
   else if(fname.value == "") {
        alert("Please enter your firstname.");
        fname.focus();
   

    }

else if (email.value==""){

    
    alert("Enter valid email address!");
    email.focus();


}
/*
    
    else if((atposition< 1 )|| (dotposition<atposition+2) || (dotposition+2>=email1.length))
    {


        alert("InValid email address!");
        email.focus();
          
     
       }
  
*/
  
   else  if(msg.value == "") {
        alert("Please enter your Message.");
        msg.focus();
   

    }
   
   
    
    else 
    
    { 

          document.getElementById("form2").style.display="block";
         console.log("Surname is "+surname.value +" Firstname is "+ fname.value+" email is"+email.value +" Message is "+ msg.value);
         event.preventDefault();
    }

 
    

};


/*
function validateEmail(email)
{
   let email1=email.value;
    console.log("in validate function  email is "+email1);
     
       let atposition=email1.indexOf("@");  
       let dotposition=email1.lastIndexOf(".");  
       if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email1.length)
       {  
         alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        email.focus();
         return false;
       }  
       

      }*/

})
   

