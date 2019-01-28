 "use strict";

 function loginPage(){
   document.getElementById('login').onclick = function(){ login()};

   function login(){
     var form = document.forms.loginForm.elements;
     var username = form.Username.value;
     var password = form.Password.value;
     var profileData = localStorage.getItem(username).split(',');

     if(localStorage.getItem(username) != null && password == profileData[0]){
       console.log("Bem vindo!")
       sessionStorage.setItem(username, profileData);
       window.location.href = "Home.html";
     }else{
       console.log("Nome de utilizador ou password errado")
     }
     document.getElementById("loginForm").reset();
   }
  }


 document.addEventListener("DOMContentLoaded", function(event){loginPage()});
