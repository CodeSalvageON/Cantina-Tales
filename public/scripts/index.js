let isInterfaceDisabled = false;
let startGame = document.getElementById("startGame");

let mainMenu = document.getElementById("main-menu");
let customize = document.getElementById("customize");

startGame.onclick = function () {
  if (isInterfaceDisabled === true) {
    return false;
  }

  isInterfaceDisabled = true;

  mainMenu.style.display = "none";
  customize.style.display = "block";
}