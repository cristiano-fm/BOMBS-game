"use strict";

function LoginCheck(){

  var header = document.getElementById('login-check');
  if(sessionStorage.length == 0){
    var register = document.createElement("a");
    register.setAttribute("class", "button right color1 zoom");
    register.setAttribute("href", "Registar.html");
    register.innerHTML = "Registar";
    header.appendChild(register);

    var login = document.createElement("a");
    login.setAttribute("class", "button right color3 zoom");
    login.setAttribute("href", "Login.html");
    login.innerHTML = "Login";
    header.appendChild(login);
  }else{
    var profile = document.createElement("a");
    profile.setAttribute("class", "button right color2 zoom");
    profile.setAttribute("href", "Perfil.html");
    profile.innerHTML = "Perfil";
    header.appendChild(profile);

    var logout = document.createElement("a");
    logout.setAttribute("class", "button right color3 zoom");
    logout.innerHTML = "Logout";
    header.appendChild(logout);
    logout.onclick = function(){
      sessionStorage.clear()
      window.location.href = "Home.html";
    }
  }
};

document.addEventListener("DOMContentLoaded", function(event){LoginCheck()});
