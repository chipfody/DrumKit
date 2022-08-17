// document.querySelectorAll("button").addEventListener("click", function () {alert("I got clicked");});

var clickButton = document.querySelectorAll(".drum");

for (let i = 0; i < clickButton.length; i++) {
  clickButton[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
          case "w":
            var cymbol = new Audio("sounds/crash.mp3");
            cymbol.play();
            break;

          case "a":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;

          case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

          case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

          case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

          case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

          case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
          default:
            alert("Something is wrong!");
        }
      });
    }
