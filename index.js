const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let guess;
let previousGuess = null;
let attempts = 0;
let running = true;

function showPopUp(text, color = "darkcyan") {
  const popup = document.getElementById("popup");
  popup.textContent = text;
  popup.style.color = color;
}

function refreshBtn() {
  showPopUp(
    `Congratulations, YOU WON!!! The answer was ${answer}, It took you ${attempts} attempts.`
  );
  const restart = document.getElementById("restart");
  restart.onclick = function () {
    location.reload();
  };
  restart.style.display = "block";
}

document.getElementById("submit").onclick = function () {
  if (!running) return;
  guess = document.getElementById("theNumber").value;
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert(`Please enter a number not text`);
  } else if (guess < minNum || guess > maxNum) {
    window.alert(`Please pick a number between ${minNum} to ${maxNum}`);
  } else {
    if (guess !== previousGuess) {
      attempts++;
    }
    previousGuess = guess;
    if (guess > answer) {
      showPopUp(`Too High! Try again.`);
    } else if (guess < answer) {
      showPopUp(`Too Low! Try again.`);
    } else {
      refreshBtn();
      running = false;
    }
  }
};
