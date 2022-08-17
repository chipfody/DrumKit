// document.querySelectorAll("button").addEventListener("click", function () {alert("I got clicked");});

var clickButton = document.querySelectorAll(".drum");

 for (let i = 0; i < clickButton.length; i++) {
     clickButton[i].addEventListener("click", function() {
       var audio = new Audio("sounds/tom-1.mp3");
       audio.play();
     });
 }
