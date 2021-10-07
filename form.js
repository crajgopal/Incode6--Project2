
document.addEventListener("DOMContentLoaded",()=> {

    let sub1 =document.getElementById("submit1");
    let sub2 =document.getElementById("submit2");


    /*javascript validations using regular expressions */

let surname= document.forms.form1.sname;
let fname =document.forms.form1.fname;
let email=document.forms.form1.email;
let msg =document.forms.form1.textmsg;
let phonenumb =document.form1.phonenumber;

const emailRegx = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const nameRegx =/^[A-Za-z0-9Ä-Öä-ö-ß\-'\.]+$/ ;
const messageRegx =/^[a-zA-Z0-9 ^\s] +$/;
const numbRegx= /^(^1300|1800\d{6})|(^0[2|3|7|8]{1}[0-9]{8})|(^13\d{4})|(^04\d{2,3}\d{6})+$/;

//Australian phone numbers: Matches  formats including 10-digit landline numbers with valid area code, 13, 1300, 1800 plus mobile 10 -digit formats.


 // form1.setAttribute("nonvalidate", true);
    sub1.addEventListener("click", validate);


    sub2.addEventListener("click", function()
    { 
       // console.log( "clicked2" + document.getElementById("form2"))   ;
        
       document.getElementById("form2").style.display = "none";
       document.getElementById("form1").reset();
    } );

   
   function validate(event)  
    {
        event.preventDefault();
        if((isValid(surname,nameRegx)==false)||(surname.value==" ")){

            alert('Please enter a valid Surname ');
            surname.value=null;
            surname.focus();

        }
        else  if((isValid(fname,nameRegx)==false)||(fname.value==" ")){

            alert('Please enter a valid Firstname');
           fname.value=null;
            fname.focus();

        }
        
        else if ((isValid(phonenumb,numbRegx)==false)){

            if(phonenumb.value=="null")
            {
                console.log("phone numebr is not entered");
            }
            else {
            alert ("Please enter valid Australian 10 digit phone number");
            phonenumb.focus();
            }
        } 

        else  if((isValid(email,emailRegx)==false)||(email.value==" ")){

            alert('Please enter a valid Email');
            email.value=null;
            email.focus();

        }
       
        
        else  if((isValid(msg,nameRegx)==false)||(msg.value ==" ")){

            alert('Please enter a valid message');
            msg.value=null;
            msg.focus();

        }
       

       else if(isValid(surname,nameRegx) && isValid(fname,nameRegx)&& isValid(email,emailRegx) &&isValid(msg,nameRegx))
        {
          console.log("Surname is "+surname.value +"FirstName is "+fname.value +"Phonenumber is "+phonenumb.value +"Email address is "+ email.value+"Message is "+msg.value);
         document.getElementById("form2").style.display="block";
         
       }
        
    }
 



function isValid(element, regex)
{

    return regex.test(element.value);
    
    
}

});
   

