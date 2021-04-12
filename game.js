var buttoncolor = ["red", "green", "blue", "yellow"];
var chosenColor = [];
var gamePattern = [];
level = 1;

for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    chosenColor.push(this.id);
    this.classList.add("pressed");
    setTimeout(() => {
      this.classList.remove("pressed");
    }, 100);
    checkAnswer(chosenColor.length - 1);
  });
}

document.addEventListener("keypress", function () {
  document.getElementById("heading").innerHTML = "Level " + level;

  nextColor();
});

function nextColor() {
  document.getElementById("heading").innerHTML = "Level " + level;
  level++;
  var temp = nextsequence();
  var colour = buttoncolor[temp];
  gamePattern.push(colour);
  var selctedButton = document.querySelector("#" + colour);
  $(selctedButton).fadeOut("fast").fadeIn("fast");
}

function nextsequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

function checkAnswer(currentlevel) {
  console.log(gamePattern, chosenColor);
  if (gamePattern[currentlevel] === chosenColor[currentlevel]) {
    if (gamePattern.length === chosenColor.length) {
      setTimeout(() => {
        chosenColor = [];
        nextColor();
      }, 1000);
    }
  } else {
    document.querySelector("body").classList.add("game-over");
    document.getElementById("heading").innerHTML =
      "Game Over, Press Any Key to Restart";
    setTimeout(() => {
      document.querySelector("body").classList.remove("game-over");
    }, 200);
    startover();
  }
}

function startover() {
  gamePattern = [];
  chosenColor = [];
  level = 1;
}
