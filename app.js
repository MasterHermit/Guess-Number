let max = 15,
  min = 10,
  randomNo = random(max, min),
  guessleft = 3;

function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNo);

const game = document.querySelector("#game"),
  subButton = document.querySelector("#guess-btn"),
  inputNum = document.querySelector("#guess-input"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;
inputNum.value = "";

game.addEventListener("mousedown", (e) => {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});
subButton.addEventListener("click", play);

function play(e) {
  let guess = parseInt(inputNum.value);

  if (isNaN(guess) || guess < min || guess > max) {
    mesFunc(`please enter a number within the range ${min} & ${max}`, `red`);
  } else if (guess === randomNo) {
    inputNum.disabled = true;

    mesFunc(`Congratulations You Won 🎉🤩`, `green`);
    playagain();
  } else {
    guessleft -= 1;

    if (guessleft == 0) {
      inputNum.disabled = true;

      mesFunc(`You Lost 🤦‍♂️🤦‍♀️ The Correct Number Was ${randomNo}`, `red`);
      playagain();
    } else {
      mesFunc(`Wrong Number! More ${guessleft} guess left`, `red`);
      inputNum.value = "";
    }
  }

  e.preventDefault();
}
function mesFunc(msg, color) {
  message.style.color = color;
  inputNum.style.borderColor = color;
  message.textContent = msg;
}
function playagain(e) {
  subButton.value = "Play Again";
  subButton.className += "play-again";
}
