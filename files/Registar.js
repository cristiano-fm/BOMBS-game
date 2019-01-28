"use strict";

function registerPage(){
  document.getElementById('submit').onclick = function(){ register()};

  function register(){

    var form = document.forms.registForm.elements;
    var username = form.username.value;
    var password = form.password.value;
    var date = form.date.value;
    var email = form.email.value;
    var scores = [0];

    if(username=="" || password=="" || date =="" || email==""){
      if(username==""){alarm('#nickName');};
      if(password==""){alarm('#pass');};
      if(date==""){alarm('#date');};
      if(email==""){alarm('#email');};
      
    }else if (!validateUser(username)){
      document.getElementById("registForm").reset();
      $('#nickName').prop('placeholder','Esse nome já existe! escolhe outro');
      alarm('#nickName')
    }else{
      localStorage.setItem(username, [password, date, email, scores]);
      sessionStorage.setItem(username, [password, date, email, scores]);
      window.location.href = "Home.html";
    }
  }

  function validateUser(username){
    for(var user=0; user<localStorage.length; user++){
      if(localStorage.key(user) == username) {
        return false;
      }
    }
    return true;
  }

  function alarm(id){
    $(id).css('color', 'red');
    setTimeout(function(){
      $(id).css('color', 'black');
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", function(event){registerPage()});
