"use strict";

function profilePage(){
  var userKey = sessionStorage.key(0);
  console.log(userKey);
  var profileData = sessionStorage.getItem(userKey).split(',');

  $("#nameuser").text(userKey);
  $("#dateuser").text(profileData[1]);
  $("#emailuser").text(profileData[2]);

  var table = document.getElementById('high-scores-table');

  var scores = profileData[3];
  scores = scores.split('|');
  for (var data=0; data < scores.length; data++){
    scores[data] = scores[data].split(';');
  }

  scores.sort(function(a,b){return a[0]<b[0];});
  scores.reverse();
  console.log(scores);

  for(var i=0; i<scores.length; i++){
    if(scores[i][0]!="" && scores[i][1]!=""){
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = scores[i][0];
      cell2.innerHTML = scores[i][1];
    }
  }
}

$(window).load(profilePage);
