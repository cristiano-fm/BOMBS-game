"use strict";

function homePage(){
  $("#loading-screen").hide();
  var playButton = document.getElementById("start-game");

  playButton.onclick = function(){
    document.body.setAttribute('id', 'no-scroll');
    $( "#start-game" ).addClass('animate');
    $("#loading-screen").fadeIn(1000);
    setTimeout(function(){
      window.location.href = "BOMBS.html";
    }, 1000);
  };

  var highScores=localStorage.getItem('highScores').split('|');
  for (var data=0; data < highScores.length; data++){
    highScores[data] = highScores[data].split(';');
  }
  highScores.sort(function(a,b){return a[1]<b[1];});
  var table = document.getElementById("high-scores-table");
  for(var i=0; i<highScores.length; i++){
    if(highScores[i][0]!="" && highScores[i][1]!=""){
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = highScores[i][0];
      cell2.innerHTML = highScores[i][1];
      cell3.innerHTML = highScores[i][2];
    }
  }
};

document.addEventListener("DOMContentLoaded", function(event){homePage()});
