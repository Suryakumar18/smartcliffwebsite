function vfun(){
    var Username = document.forms["myform"]["username"].value;
    var Password = document.forms["myform"]["password1"].value;
    var uname ="surya";
    var pass ="1234";

    //checking the condition if user entering correct input or not

    if(Username==null||Username==""){
        document.getElementById("errorbox").innerHTML="Enter your name";
        return false;
    }

    if(Password==null||Password==""){
        document.getElementById("errorbox").innerHTML="Enter your pasword";
        return false;
    }
    else{
        if(Username==uname){
            if(pass==Password){
                alert("login successfully")
            }
            else{
                document.getElementById("errorbox").innerHTML="wrong password";
                return false;
            }
        }
        else{
            document.getElementById("errorbox").innerHTML="wrong username";
            return false;
        }
        
    }
}


    //checking the conditions and validation for the registerform
function vfuns(){
    var UserName = document.forms["myforms"]["names"].value;
    var Email = document.forms["myforms"]["email2"].value;
    var Passwords  = document.forms["myforms"]["password2"].value;
    var RePassword = document.forms["myforms"]["repassword2"].value;


    if(UserName==null||UserName==""){
        document.getElementById("errorthrow").innerHTML="Enter the username";
        return false;
    }
    if(Email==null||Email==""){
        document.getElementById("errorthrow").innerHTML="Enter Your email";
        return false;
    }

    if(Passwords==null||Passwords==""){
        document.getElementById("errorthrow").innerHTML="Enter your password";
        return false;
    }
    if(RePassword==null||RePassword==""){
        document.getElementById("errorthrow").innerHTML="Retype your Password";
        return false;
    }

    if(Passwords!=RePassword){
        document.getElementById("errorthrow").innerHTML="Password Does not match";
        return false;

    }
    

    

}



