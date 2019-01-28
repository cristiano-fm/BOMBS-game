"use strict";

function loadingScreen() {
  var elem = document.getElementById("bar");
  var width = 1;
  var id = setInterval(frame, 8);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      $("#loading-screen").fadeOut(500);
    } else {
      width++;
      elem.style.width = width + '%';
    };
  };
};

window.onload = loadingScreen;

function bombs(){
  var size;
  var numberOfShips1;
  var numberOfShips2;
  var numberOfShips3;

  var oneGameBoard=document.getElementById('game-board');
  var mainBoard=document.getElementById('game');
  var controlPanel=document.getElementById('panel');
  var welcomeText=document.getElementById('welcome-text');

  modeMenu();

  //------------------------MODE-MENU------------------------------//
  function modeMenu(){
    if ($("#size10") != null){
      $("#size10").fadeOut(200, function() {$(this).remove()});
      $("#custom-size").fadeOut(200, function() {$(this).remove()});
      $("#return-button").fadeOut(200, function() {$(this).remove()});
      $("#personalize").fadeOut(200, function() {$(this).remove()});
      $("#welcome-text").fadeOut(200);
    }

    setTimeout(function() {
      var singleplayer = document.createElement("a");
      singleplayer.innerHTML = "Singleplayer";
      singleplayer.setAttribute("class", "button one color1 zoom");
      singleplayer.setAttribute("id", "singleplayer");
      controlPanel.appendChild(singleplayer);
      $("#singleplayer").hide();
      singleplayer.onclick = function(){sizeMenu()};

      var multiplayer = document.createElement("a");
      multiplayer.innerHTML = "Multiplayer";
      multiplayer.setAttribute("class", "button three color3 zoo");
      multiplayer.setAttribute("id", "multiplayer");
      controlPanel.appendChild(multiplayer);
      $("#multiplayer").hide();

      welcomeText.childNodes[1].innerHTML = "Vamos começar!"
      welcomeText.childNodes[3].innerHTML = "Escolhe o teu modo de jogo"

      $("#singleplayer").fadeIn(200);
      $("#multiplayer").fadeIn(200);
      $("#welcome-text").fadeIn(200);

      multiplayer.onclick = function(){inDevelopmentMenu()};
      singleplayer.onclick = function(){sizeMenu()};
    }, 250);
  }
  //-------------------IN-DEVELOPMENT-MENU-------------------------//
  function inDevelopmentMenu(){
    $("#singleplayer").fadeOut(200, function() {$(this).remove()});
    $("#multiplayer").fadeOut(200, function() {$(this).remove()});
    $("#welcome-text").fadeOut(200);

    setTimeout(function() {
      welcomeText.childNodes[1].innerHTML = 'multiplayer brevemente disponível';
      welcomeText.childNodes[3].innerHTML = 'Ainda estamos a desenvolver este modo para ti';

      var returnButton = document.createElement("a");
      returnButton.innerHTML = "Voltar atrás";
      returnButton.setAttribute("class", "button two color3 zoom");
      returnButton.setAttribute("id", "return-button");
      controlPanel.appendChild(returnButton);
      $("#return-button").hide();
      $("#return-button").fadeIn(200);
      $("#welcome-text").fadeIn(200);
      returnButton.onclick = function(){modeMenu()};
    }, 250);
  }

  //------------------------SIZE-MENU------------------------------//
  function sizeMenu(){
    $("#singleplayer").fadeOut(200, function() {$(this).remove()});
    $("#multiplayer").fadeOut(200, function() {$(this).remove()});
    $("#return-button").fadeOut(200, function() {$(this).remove()});
    $('.ships-section').fadeOut(200, function() {$(this).remove()});
    $("#play-button").fadeOut(200, function() {$(this).remove()});
    $("#welcome-text").fadeOut(200);
    $("#out").show(200);

    setTimeout(function(){
      var returnButton = document.createElement("a");
      returnButton.innerHTML = "Voltar atrás";
      returnButton.setAttribute("class", "button one color3 zoom");
      returnButton.setAttribute("id", "return-button");
      controlPanel.appendChild(returnButton);
      $("#return-button").hide();
      $("#return-button").fadeIn(200);
      returnButton.onclick = function(){modeMenu();};

      var size10Button = document.createElement("a");
      size10Button.innerHTML = "10x10";
      size10Button.setAttribute("class", "button two color1 zoom");
      size10Button.setAttribute("id", "size10");
      controlPanel.appendChild(size10Button);
      $("#size10").hide();

      var customSizeButton = document.createElement("a");
      customSizeButton.innerHTML = "personaliza!";
      customSizeButton.setAttribute("class", "button right color2 zoom");
      customSizeButton.setAttribute("id", "custom-size");
      controlPanel.appendChild(customSizeButton);
      $("#custom-size").hide();

      welcomeText.childNodes[1].innerHTML = "Ótimo!";
      welcomeText.childNodes[3].innerHTML = "Escolhe o tamanho do teu tabuleiro";
      $("#welcome-text").hide();

      $("#size10").fadeIn(200);
      $("#custom-size").fadeIn(200);
      $("#welcome-text").fadeIn(200);

      size10Button.onclick = function(){
        var size=10;
        shipsMenu(size);
      };

      customSizeButton.onclick = function(){
        $("#welcome-text").fadeOut(200);
        $("#custom-size").fadeOut(200);
        setTimeout(function(){
          welcomeText.childNodes[1].innerHTML = "atenção, maior é mais dificil!"
          welcomeText.childNodes[3].innerHTML = "Arrasta a barra e escolhe o tamanho do teu tabuleiro"
          $("#welcome-text").fadeIn(200);
          customSizeButton.remove()

          var section = document.createElement("section");
          section.setAttribute("class", "three");
          section.setAttribute("id", "personalize");
          var slider=document.createElement("input");
          slider.setAttribute("class","slider");
          slider.setAttribute("type","range");
          slider.setAttribute("min","10");
          slider.setAttribute("max","20");
          slider.setAttribute("value","15");
          slider.setAttribute("id","size-slider");
          var goButton=document.createElement("a");
          goButton.setAttribute("class","button right color2 zoom");
          goButton.setAttribute("id","go-button");
          goButton.innerHTML="15x15";
          $(document).on('change', '#size-slider', function() {
            $('#go-button').html($(this).val() + "x" + $(this).val());
          });
          section.appendChild(goButton);
          section.appendChild(slider);
          controlPanel.appendChild(section);
          $("#go-button").hide();
          $("#size-slider").hide();
          $("#go-button").fadeIn(200);
          $("#size-slider").fadeIn(200);

          goButton.onclick = function(){
            size = $('#size-slider').val();
            console.log(size)
            shipsMenu(size);
          };
        }, 300);
      };
    }, 250);
  };

  //------------------------SHIPS-MENU------------------------------//
  function shipsMenu(size){
    $("#out").hide(200);
    $("#size10").fadeOut(200, function() {$(this).remove()});
    $("#custom-size").fadeOut(200, function() {$(this).remove()});
    $("#personalize").fadeOut(200, function() {$(this).remove()});
    $("#return-button").fadeOut(300, function() {$(this).remove()});
    $("#welcome-text").fadeOut(200);

    welcomeText.childNodes[1].innerHTML = "Barcos!";
    welcomeText.childNodes[3].innerHTML = "Escolhe o número de barcos";

    setTimeout(function(){
      var returnButton = document.createElement("a");
      returnButton.innerHTML = "Voltar atrás";
      returnButton.setAttribute("class", "button one color3 zoom");
      returnButton.setAttribute("id", "return-button");
      controlPanel.appendChild(returnButton);
      $("#return-button").hide();
      $("#return-button").fadeIn(200);
      returnButton.onclick = function(){sizeMenu();};

      var section1=document.createElement("section");
      section1.setAttribute("class", "ships-section");
      var ship1_1=document.createElement("img");
      ship1_1.setAttribute("id","ship1");
      ship1_1.setAttribute("class","ships-in-menu");
      ship1_1.setAttribute("alt","bote pequeno");
      ship1_1.setAttribute("src","./media/barco1_menu.png");
      var ship1_2=document.createElement("img");
      ship1_2.setAttribute("id","ship2");
      ship1_2.setAttribute("class","ships-in-menu");
      ship1_2.setAttribute("alt","bote pequeno");
      ship1_2.setAttribute("src","./media/barco2_menu.png");
      var slider1=document.createElement("input");
      slider1.setAttribute("type","range");
      slider1.setAttribute("class","slider ships-slider");
      slider1.setAttribute("min", parseInt(minShips(1, size)));
      slider1.setAttribute("max", parseInt(maxShips(1, size)));
      slider1.setAttribute("value", parseInt(numShips(1, size)));
      slider1.setAttribute("id","ships-slider-1");
      var numb1=document.createElement("h4");
      numb1.setAttribute("id","numb-1");
      numb1.setAttribute("class","white numb-of-ships");
      numb1.innerHTML= parseInt(numShips(1, size));
      $(document).on('change', '#ships-slider-1', function() {
        $('#numb-1').html($(this).val());
      });
      section1.appendChild(ship1_1);
      section1.appendChild(ship1_2);
      section1.appendChild(slider1);
      section1.appendChild(numb1);
      mainBoard.appendChild(section1);

      var section2=document.createElement("section");
      section2.setAttribute("class", "ships-section");
      var ship2=document.createElement("img");
      ship2.setAttribute("id","ship2");
      ship2.setAttribute("class","ships-in-menu");
      ship2.setAttribute("alt","veleiro médio");
      ship2.setAttribute("src","./media/barco2.png");
      var slider2=document.createElement("input");
      slider2.setAttribute("type","range");
      slider2.setAttribute("class","slider ships-slider");
      slider2.setAttribute("min", parseInt(minShips(2, size)));
      slider2.setAttribute("max", parseInt(maxShips(2, size)));
      slider2.setAttribute("value", parseInt(numShips(2, size)));
      slider2.setAttribute("id","ships-slider-2");
      var numb2=document.createElement("h4");
      numb2.setAttribute("id","numb-2");
      numb2.setAttribute("class","white numb-of-ships");
      numb2.innerHTML= parseInt(numShips(2, size));
      $(document).on('change', '#ships-slider-2', function() {
        $('#numb-2').html($(this).val());
      });
      section2.appendChild(ship2);
      section2.appendChild(slider2);
      section2.appendChild(numb2);
      mainBoard.appendChild(section2);


      var section3=document.createElement("section");
      section3.setAttribute("class", "ships-section")
      var ship3=document.createElement("img");
      ship3.setAttribute("id","ship3");
      ship3.setAttribute("class","ships-in-menu");
      ship3.setAttribute("alt","cargueiro grande");
      ship3.setAttribute("src","./media/barco3.png");
      var slider3=document.createElement("input");
      slider3.setAttribute("type","range");
      slider3.setAttribute("class","slider ships-slider");
      slider3.setAttribute("min", parseInt(minShips(3, size)));
      slider3.setAttribute("max", parseInt(maxShips(3, size)));
      slider3.setAttribute("value", parseInt(numShips(3, size)));
      slider3.setAttribute("id","ships-slider-3");
      var numb3=document.createElement("h4");
      numb3.setAttribute("id","numb-3");
      numb3.setAttribute("class","white numb-of-ships");
      numb3.innerHTML= parseInt(numShips(3, size));
      $(document).on('change', '#ships-slider-3', function() {
        $('#numb-3').html($(this).val());
      });
      section3.appendChild(ship3);
      section3.appendChild(slider3);
      section3.appendChild(numb3);
      mainBoard.appendChild(section3);
      $('.ships-section').hide();
      $('.ships-section').fadeIn(200);
      $("#welcome-text").fadeIn(200);

      var playButton = document.createElement("a");
      playButton.innerHTML = "Jogar";
      playButton.setAttribute("class", "button three color1 zoom");
      playButton.setAttribute("id", "play-button");
      controlPanel.appendChild(playButton);
      $("#play-button").hide();
      $("#play-button").fadeIn(200);
      playButton.onclick = function(){
        var numberOfShips1=$('#ships-slider-1').val();
        var numberOfShips2=$('#ships-slider-2').val();
        var numberOfShips3=$('#ships-slider-3').val();
        console.log("nº 1: " + numberOfShips1)
        console.log("nº 2: " + numberOfShips2)
        console.log("nº 3: " + numberOfShips3)

        $("#out").remove()
        $("#welcome-text").fadeOut(2000, function() {$(this).remove()});
        $("#return-button").fadeOut(2000, function() {$(this).remove()});
        $("#play-button").fadeOut(2000, function() {$(this).remove()});
        $('.ships-section').fadeOut(2000, function() {$(this).remove()});

        gamePlay(size, numberOfShips1, numberOfShips2, numberOfShips3);
      };
    }, 250);
  }

  function minShips(ship, size) {return Math.ceil(size / (ship * 4))};
  function numShips(ship, size) {return size / Math.ceil(ship * 2)};
  function maxShips(ship, size) {return Math.ceil(size / ship)};

  function gamePlay(size, numberOfShips1, numberOfShips2, numberOfShips3){
    //ships have numbers between 1 and 9
    var ship1=1;
    var ship2=2;
    var ship3=3;
    //power ups have numbers bigger than 9
    var chest=10;
    var key=11;
    var coin1=12;
    var coin2=13;

    var oneBoardMatrix = [];

    setTimeout(function() {
      $(".panel").animate({
        height: '+=14%',
        "margin-top": '+=7%'
      });
      $('.game').addClass('animate');
    }, 1000);

    setTimeout(function() {
      $("#game-board").hide();
      gameBoardMaker(size);
      placeRandom(numberOfShips1, numberOfShips2, numberOfShips3)
      $("#game-board").fadeIn(1000);
      $(".panel").fadeOut(400);
      console.log(oneBoardMatrix)
    }, 2000);

    setTimeout(function() {
      GameControlPanelMaker();
      $(".panel").fadeIn(400);
    }, 2500);

    oneGameBoard.addEventListener("click", shot, false);

    function shot(e){
    	if (e.target !== e.currentTarget) {
        var getPosition = e.target.id.split("-");
    		var row = getPosition[0];
    		var cell = getPosition[1];

        if (oneBoardMatrix[row][cell] != 'A' || oneBoardMatrix[row][cell] != 'N'){

          updatePanel(oneBoardMatrix[row][cell], size);

      		if (oneBoardMatrix[row][cell] == 0) {shotReaction(0, './media/nada.png')}
          else if (oneBoardMatrix[row][cell] == 1) {shotReaction(1, './media/barco1.png')}
          else if (oneBoardMatrix[row][cell] == '2_1') {shotReaction('2_1', './media/barco2_1.png')}
          else if (oneBoardMatrix[row][cell] == '2_2') {shotReaction('2_2', './media/barco2_2.png')}
          else if (oneBoardMatrix[row][cell] == '3_1') {shotReaction('3_1', './media/barco3_1.png')}
          else if (oneBoardMatrix[row][cell] == '3_2') {shotReaction('3_2', './media/barco3_2.png')}
          else if (oneBoardMatrix[row][cell] == '3_3') {shotReaction('3_3', './media/barco3_3.png')}
          else if (oneBoardMatrix[row][cell] == '1_h') {shotReaction('1_h', './media/barco1_h.png')}
          else if (oneBoardMatrix[row][cell] == '2_1_h') {shotReaction('2_1_h','./media/barco2_1_h.png')}
          else if (oneBoardMatrix[row][cell] == '2_2_h') {shotReaction('2_2_h','./media/barco2_2_h.png')}
          else if (oneBoardMatrix[row][cell] == '3_1_h') {shotReaction('3_1_h','./media/barco3_1_h.png')}
          else if (oneBoardMatrix[row][cell] == '3_2_h') {shotReaction('3_2_h','./media/barco3_2_h.png')}
          else if (oneBoardMatrix[row][cell] == '3_3_h') {shotReaction('3_3_h','./media/barco3_3_h.png')}
          else if (oneBoardMatrix[row][cell] == '10') {shotReaction('10', './media/bau_fechado.png')}
          else if (oneBoardMatrix[row][cell] == '11') {shotReaction('11', './media/chave.png')}
          else if (oneBoardMatrix[row][cell] == '12') {shotReaction('12', './media/moeda_1.png')}
          else if (oneBoardMatrix[row][cell] == '13') {shotReaction('13', './media/moeda_2.png')}
        }
      }
      e.stopPropagation();

      function shotReaction(hitObject, show){
        function logMessage(text){
          $('#alert-box').html('<p>' + text + '</p>')
        }
        function add(text){
          $('#alert-box').html('<p>' + text + '</p>')
        }
        if (oneBoardMatrix[row][cell] == hitObject) {
          var tile = document.createElement("img");
          var effect = document.createElement("img");
          tile.setAttribute('class', 'tile');
          tile.setAttribute('src', show);
          effect.setAttribute('class', 'tile');
          if (hitObject == 0){
            effect.setAttribute('src', './media/splash.gif');
          }else if (hitObject > 9){
            effect.setAttribute('src', './media/power_up.gif');
          }else{
            effect.setAttribute('src', './media/explosao.gif');
          }
          e.target.appendChild(effect);

          setTimeout(function() {
            $(effect).remove();
            e.target.appendChild(tile);
            $(tile).hide();
            $(tile).show(250);
          }, 300);

          if (hitObject != 0){
            oneBoardMatrix[row][cell] = 'N';
          }else{
            oneBoardMatrix[row][cell] = 'A';
          }
        }
      }

      if(!continueGame() || !continueTime()){
        oneGameBoard.removeEventListener("click", shot);
        if (!continueTime()){
          endScreenLoad('lost', size);
        } else {
          endScreenLoad('won', size);
        }
      }

      function continueTime(){
        var timer = document.getElementById('duration').innerHTML
        if ( timer != '00:00'){
          return true;
        } else {
          return false;
        }
      }
      function continueGame(){
        for (var row=0; row < size; row++){
          var tile = oneBoardMatrix[row];
          if ( tile.includes('1')
            || tile.includes('2_1')
            || tile.includes('2_2')
            || tile.includes('3_1')
            || tile.includes('3_2')
            || tile.includes('3_3')
            || tile.includes('1_h')
            || tile.includes('2_1_h')
            || tile.includes('2_2_h')
            || tile.includes('3_1_h')
            || tile.includes('3_2_h')
            || tile.includes('3_3_h')
          ){
            return true;
          }
        }
        return false;
      }
    }

    function gameBoardMaker(size){

      for (var rowCount=0; rowCount < size; rowCount++){          //creates the rows
        oneBoardMatrix[rowCount] = [];
        var row = document.createElement("tr");
        oneGameBoard.appendChild(row);
        for (var cellCount=0; cellCount < size; cellCount++){     //creates the cells in the rows
          oneBoardMatrix[rowCount][cellCount] = '0';
          var cell = document.createElement("td");
          cell.setAttribute('class', 'tile-size-' + size);
          cell.setAttribute('id', rowCount + "-" + cellCount);
          row.appendChild(cell);
        };
      };
    };

    function placeRandom(numberOfShips1, numberOfShips2, numberOfShips3){
      console.log("nº 1: " + numberOfShips1)
      console.log("nº 2: " + numberOfShips2)
      console.log("nº 3: " + numberOfShips3)
      var row;
      var cell;
      function randomAxis(){return Math.round(Math.random() * 2)}

      //------------PLACING-SHIPS_1-IN-BOARD-MATRIX-----------//
      for (var ship=1; ship <= numberOfShips1; ship++){
        row=chooseRandom(size, ship1);
        cell=chooseRandom(size, ship1);

        if (randomAxis()==1){ //horizontal
          if (oneBoardMatrix[row][cell]==0) {
            oneBoardMatrix[row][cell]='1';
          }else{ship--;};
        }else{
          if (oneBoardMatrix[row][cell]==0) {
            oneBoardMatrix[row][cell]='1_h';
          }else{ship--;};
        }
      };
      //------------PLACING-SHIPS_2-IN-BOARD-MATRIX-----------//
      for (var ship=1; ship <= numberOfShips2; ship++){
        row=chooseRandom(size, ship2);
        cell=chooseRandom(size, ship2);
        if (randomAxis()==1){
          if (oneBoardMatrix[row][cell]==0 && oneBoardMatrix[row+1][cell]==0){
            oneBoardMatrix[row][cell]='2_2';
            oneBoardMatrix[row+1][cell]='2_1';
          }else{ship--;}
        }else{
          if (oneBoardMatrix[row][cell]==0 && oneBoardMatrix[row][cell+1]==0){
            oneBoardMatrix[row][cell]='2_1_h';
            oneBoardMatrix[row][cell+1]='2_2_h';
          }else{ship--;}
        }
      }
      //------------PLACING-SHIPS_3-IN-BOARD-MATRIX-----------//
      for (var ship=1; ship <= numberOfShips3; ship++){
        row=chooseRandom(size, ship3);
        cell=chooseRandom(size, ship3);
        if (randomAxis()==1){
          if (oneBoardMatrix[row][cell]==0 && oneBoardMatrix[row+1][cell]==0 && oneBoardMatrix[row+2][cell]==0){
            oneBoardMatrix[row][cell]='3_3';
            oneBoardMatrix[row+1][cell]='3_2';
            oneBoardMatrix[row+2][cell]='3_1';
          }else{ship--;}
        }else{
          if (oneBoardMatrix[row][cell]==0 && oneBoardMatrix[row][cell+1]==0 && oneBoardMatrix[row][cell+2]==0){
            oneBoardMatrix[row][cell]='3_1_h';
            oneBoardMatrix[row][cell+1]='3_2_h';
            oneBoardMatrix[row][cell+2]='3_3_h';
          }else{ship--;}
        }

      }
      //-------------------PLACING-POWER-UPS-------------------//
      function placePowerUp(number){
        for (var powerUp=1; powerUp <= numShips(1, size); powerUp++){
          row=chooseRandom(size, 1);
          cell=chooseRandom(size, 1);
          if (oneBoardMatrix[row][cell]==0) {
            oneBoardMatrix[row][cell]=number;
          }else{powerUp--;}
        }
      }
      placePowerUp(chest)
      placePowerUp(key)
      placePowerUp(coin1)
      placePowerUp(coin2)
    }
    function chooseRandom(size,shipsize){
      return Math.floor(Math.random() * (size-shipsize));
    }

    function GameControlPanelMaker(){
      var alertBox = document.createElement("section");
      alertBox.innerHTML = "Vamos começar! <br> Escolhe um alvo e atira";
      alertBox.setAttribute("class", "grid-board one");
      alertBox.setAttribute("id", "alert-box");
      controlPanel.appendChild(alertBox);
      var powerUps = document.createElement("section");
      powerUps.setAttribute("class", "grid-board two");
      powerUps.setAttribute("id", "power-ups");
      var chests = document.createElement("img");
      chests.setAttribute("id", "chests");
      chests.setAttribute('src', './media/bau_painel.png');
      var chestsNumb = document.createElement("p");
      chestsNumb.setAttribute('id', 'chests-count')
      chestsNumb.innerHTML = "0";
      var score = document.createElement("p");
      score.setAttribute("class", "jump");
      score.setAttribute("id", "score");
      score.innerHTML = "Pontos: 0";
      var duration = document.createElement("p");
      duration.setAttribute("id", "duration");
      duration.setAttribute("class", "right");
      duration.innerHTML = "0" + size * (1/2.5) + ":00";
      powerUps.appendChild(chests);
      powerUps.appendChild(chestsNumb);
      powerUps.appendChild(score);
      powerUps.appendChild(duration);
      controlPanel.appendChild(powerUps);
      var durationTime = size * (1/2.5) * 60;
      startTimer(durationTime);

      var shipsBox = document.createElement("section");
      shipsBox.setAttribute("class", "grid-board three");
      shipsBox.setAttribute("id", "ships-box");

      function ShipsIcons(icone, numb){
        for (var ship=1; ship <= numb; ship++){
          var shipIcon = document.createElement("img");
          shipIcon.setAttribute('src', icone);
          shipsBox.appendChild(shipIcon);
        }
        controlPanel.appendChild(shipsBox);
      }
      ShipsIcons('./media/barco3_icone.png', numberOfShips3);
      ShipsIcons('./media/barco2_icone.png', numberOfShips2);
      ShipsIcons('./media/barco1_icone.png', numberOfShips1);
      console.log("nº 1: " + numberOfShips1)
      console.log("nº 2: " + numberOfShips2)
      console.log("nº 3: " + numberOfShips3)
    }
  };
};

function startTimer(duration, display) {
  var timer = duration;
  var minutes;
  var seconds;
  var getDurationBox = document.getElementById('duration');
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);
    if(minutes < 10){minutes="0" + minutes};
    if(seconds < 10){seconds="0" + seconds};
    getDurationBox.textContent = minutes + ":" + seconds;
    if(minutes=='01' && seconds=='00'){
      $('#duration').css('color','red');
      updateAlertBox('CUIDADO! <br> estás a ficar sem tempo!');
      $('#alert-box').css('color','red');
      setTimeout( function(){$('#alert-box').css('color','white')}, 1000);
    }
    if (timer > 0){timer--};
  }, 1000);
}

var score = 0;
var chests = 0;

function updatePanel(hitObject, size) {
  if (hitObject == '0'){
    updateAlertBox('Água! tenta outro');
    sound('./sons/agua.wav');
  } else if (hitObject == '1' || hitObject == '1_h'){
    score+= 5;
    updateScore();
    updateShipsBox(hitObject);
    updateAlertBox('Navio pequeno! <br> +5p');
    sound('./sons/navio.wav');
  } else if (hitObject == '2_1'
    || hitObject == '2_2'
    || hitObject == '2_1_h'
    || hitObject == '2_2_h' ){
    score+= 8;
    updateScore();
    updateShipsBox(hitObject);
    updateAlertBox('Navio médio! <br> +8p');
    sound('./sons/navio.wav');
  } else if (hitObject == '3_1'
    || hitObject == '3_2'
    || hitObject == '3_3'
    || hitObject == '3_1_h'
    || hitObject == '3_2_h'
    || hitObject == '3_3_h'){
    score+= 10;
    updateScore();
    updateShipsBox(hitObject);
    updateAlertBox('Navio grande! <br> +10p');
    sound('./sons/navio.wav');
  } else if (hitObject == '12'){
    score+= 8;
    updateScore();
    updateAlertBox('Uma moeda rara! <br> +8p');
    sound('./sons/power_up.wav');
  } else if (hitObject == '13'){
    score+= 2;
    updateScore();
    updateAlertBox('Uma Moeda! <br> +2p');
    sound('./sons/power_up.wav');
  } else if (hitObject == '10'){
    chestManage('chest', size);
    updateAlertBox('Encontraste um baú! <br> encontra uma chave para o abrires');
    sound('./sons/bau.wav');
  } else if (hitObject == '11'){
    if (chests<1){
      updateAlertBox('Encontraste uma chave! <br> nenhum baú para abrir');
    }else{
      updateAlertBox('Encontraste uma chave! <br> baú aberto');
    }
    chestManage('key', size);
    sound('./sons/power_up.wav');
  }
}

function updateAlertBox(message){
  alert = document.getElementById('alert-box');
  alert.innerHTML = message;
}

function updateScore(){
  $('#score').css('text-shadow','0px 0px 20px #ffffff');
  $('#score').css('font-weight','900');
  $('.jump').addClass('animate');
  var getScoreBox = document.getElementById('score');
  getScoreBox.textContent = "Pontos: " + score;
  setTimeout(function(){
      $('.jump').removeClass('animate');
      $('#score').css('text-shadow','');
      $('#score').css('font-weight','500');
  }, 1000);
}

function updateShipsBox(ship){
  var shipsBox = document.getElementById('ships-box').children;
  var child = 0;
  var deleted = false;

  function changeOpacity(src, shipNumb){
    var change = shipsBox[child]
    if (sorce == src && ship == shipNumb && !deleted && change.style.opacity != 0.2){
      change.setAttribute('style', 'opacity: 0.2');
      deleted=true;
    };
  };

  while ( child < shipsBox.length){
    var sorce = shipsBox[child].getAttribute('src');
    changeOpacity('./media/barco1_icone.png', '1');
    changeOpacity('./media/barco2_icone.png', '2_1');
    changeOpacity('./media/barco3_icone.png', '3_1');
    changeOpacity('./media/barco1_icone.png', '1_h');
    changeOpacity('./media/barco2_icone.png', '2_1_h');
    changeOpacity('./media/barco3_icone.png', '3_1_h');
    child++;
  }
}

function chestManage(hitObject, size){
  var getChestsCounter = document.getElementById('chests-count');
  if (hitObject == 'chest'){
    chests++;
    getChestsCounter.innerHTML = chests;
  } else if (hitObject == 'key' && chests > 0){
    chests--;
    getChestsCounter.innerHTML = chests;
    function random(){return Math.floor(Math.random() * 3)}
    function animateChest(image, incr){
      sound('./sons/bau_abrir.wav');
      $('.two').addClass('animate');
      $('#chests').prop('src','./media/bau_aberto_painel.png');
      $('#chests-count').css('text-shadow','0px 0px 20px #ffffff');
      $('#chests-count').css('font-weight','900');
      setTimeout(function(){
        $('#chests').prop('src', image);
        $('.jump').addClass('animate');
        score+=parseInt(incr);
        getScoreBox.textContent = "Pontos: " + score;
      }, 1000);
      setTimeout(function(){
        $('#chests').prop('src','./media/bau_painel.png');
        $('#chests-count').css('text-shadow','');
        $('#chests-count').css('font-weight','500');
        $('.jump').removeClass('animate');
        $('.two').removeClass('animate');
      }, 2200);
    }
    var getScoreBox = document.getElementById('score');
    var getTimer = document.getElementById('duration');
    if (random()==1){
      animateChest('./media/bau_aberto_joia_painel.png', 50);
      setTimeout(function(){
        updateAlertBox('WOW, o bau tinha um diamante! <br> +50p');
        sound('./sons/bau_power_ups.wav');
      }, 1500);
    }else if(random()==2){
      animateChest('./media/bau_aberto_moeda_painel.png', 8);
      setTimeout(function(){
        updateAlertBox('O bau tinha uma moeda rara! <br> +8p');
        sound('./sons/bau_power_ups.wav');
      }, 1500);
    }else{
      animateChest('./media/bau_aberto_veneno_painel.png', '-20');
      setTimeout(function(){
        updateAlertBox('Ops! O bau tinha veneno! <br> -20p')
        sound('./sons/veneno.wav');
      }, 1500);
    }
  }
}

function sound(src) {
  var sound = document.createElement("audio");
  sound.src = src;
  sound.setAttribute("preload", "auto");
  sound.setAttribute("controls", "none");
  sound.style.display = "none";
  document.body.appendChild(sound);
  sound.play();
  setInterval(function(){
    sound.remove();
  }, 3000);
}

function endScreenLoad(status, size){
  var duration = $('#duration').text();
  duration.split();
  var minutes = duration[0] + duration[1];
  var seconds = duration[3] + duration[4];
  duration = (parseInt(minutes) * 60) + parseInt(seconds);
  var initialTime = size * (1/2.5) * 60;
  duration = initialTime - duration;
  var finalScore = parseInt(score - duration);

  $('#panel').fadeOut(2000, function() {$(this).remove()})
  $('#game-board').fadeOut(2000, function() {$(this).remove()})
  setTimeout(function(){$('.game').removeClass('animate');}, 1500)
  var endTitle = document.createElement('h1');
  endTitle.setAttribute('id', 'end-title')
  endTitle.style.display = 'none';
  var endMesssage = document.createElement('h3');
  endMesssage.setAttribute('id', 'end-message')
  endMesssage.style.display = 'none';
  if (status=="lost"){
    endTitle.innerHTML = 'Game Over';
    endMesssage.innerHTML = 'O tempo acabou! <br> mais sorte para a próxima';
  }else{
    endTitle.innerHTML = 'Parabéns!';
    endMesssage.innerHTML = 'Afundaste todos os navios! <br> Conseguiste ' +
    score + ' pontos em ' + duration + ' segundos. pontuação final: ' + finalScore
  };
  var homeButton = document.createElement('a');
  homeButton.setAttribute('id', 'home-button');
  homeButton.setAttribute('class', 'button color2 zoom');
  homeButton.setAttribute('href', 'Home.html');
  homeButton.style.display = 'none';
  homeButton.innerHTML = 'Página principal';
  var replayButton = document.createElement('a');
  replayButton.setAttribute('id', 'replay-button');
  replayButton.setAttribute('class', 'button color3 zoom');
  replayButton.setAttribute('href', 'BOMBS.html');
  replayButton.style.display = 'none';
  replayButton.innerHTML = 'Jogar novamente';

  var board = document.getElementById('game');

  if (sessionStorage.length == 0){
    var form = document.createElement('form');
    form.setAttribute('id', 'submit-score-form');
    form.style.display = 'none';
    var nickname = document.createElement('input');
    nickname.setAttribute('type', 'text');
    nickname.setAttribute('name', 'nickname');
    nickname.setAttribute('placeholder', 'Nickname');
    nickname.setAttribute('id', 'nickname');
    nickname.setAttribute('class', 'w3-input w3-border w3-center input-bubble');
    var submit = document.createElement('a');
    submit.setAttribute('id', 'submit-Score-button');
    submit.setAttribute('class', 'button color3 zoom');
    submit.innerHTML = 'Guardar'
    form.appendChild(nickname);
    form.appendChild(submit);
    setTimeout(function(){

      board.appendChild(form);
      $('#submit-score-form').fadeIn(2200);
    }, 1800)

    submit.onclick = function(){
      var nickN = $('#nickname').val();
      var highScoresUpdated = localStorage.getItem('highScores');
      highScoresUpdated += String( nickN + ';' + finalScore + ';' + duration + '|');
      localStorage.setItem('highScores', highScoresUpdated);

      $('#submit-score-form').fadeOut(200);
      var submitedMesssage = document.createElement('h3');
      submitedMesssage.setAttribute('id', 'submited-message')
      submitedMesssage.style.display = 'none';
      submitedMesssage.innerHTML = 'Guardado! os teus pontos estão na tabela de pontuações da página principal';
      board.appendChild(submitedMesssage);
      setTimeout(function(){
        $('#submit-score-form').remove();
        $('#submited-message').fadeIn(200);
      }, 200);
    }
  } else {
    var userKey = sessionStorage.key(0);
    var profileData = sessionStorage.getItem(userKey).split(',');
    var scores = profileData[3];
    console.log(scores);
    scores = String(scores) + String(finalScore + ';' + duration + '|');
    profileData[3] = scores;

    sessionStorage.setItem(userKey, profileData);
    localStorage.setItem(userKey, profileData);

    var highScoresUpdated = localStorage.getItem('highScores');
    highScoresUpdated += String(userKey + ';' + finalScore + ';' + duration + '|');
    localStorage.setItem('highScores', highScoresUpdated);
  }

  setTimeout(function(){
    board.appendChild(endTitle);
    board.appendChild(endMesssage);
    board.appendChild(replayButton);
    board.appendChild(homeButton);
  }, 1300)
  setTimeout(function(){
    $('#end-title').fadeIn(2000);
    $('#end-message').fadeIn(2000);
    $('#home-button').fadeIn(2200);
    $('#replay-button').fadeIn(2200);
  },1800)
}



document.addEventListener("DOMContentLoaded", function(event) {bombs()});
