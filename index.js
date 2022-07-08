// adding event listiner to all drum buttons
var drumButtons =  document.querySelectorAll(".drum").length;

// creating a for loop for the all 7 drum buttons

for ( var i = 0;  i < drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML; 
        makeSound(buttonInnerHtml)
 });
};
// adding a keyboard event listener
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});


function makeSound (key) {
switch (key) {
  case "A":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
  case "B":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
  case "C":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
  case "D":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
  case "E":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
  case "F":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
  case "G":
    var kick = new Audio("sounds/tom-1.mp3");
    kick.play();
    break;

  default:
    console.log();
}
}
//  its a 2 way to write the above code 
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//      document
//        .querySelectorAll(".drum")
//        [i].addEventListener("click", function () {
//         var audio = new Audio('sounds/crash.mp3');
//         audio.play();
//        });
// }

//  /   //   







