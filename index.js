const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let guess;
let previousGuess = null;
let allGuesses = [];
let attempts = 5;
let running = true;

function showPopUp(text, color = "darkcyan") {
  const popup = document.getElementById("popup");
  popup.textContent = text;
  popup.style.color = color;
}
function showHealth(text, color = "darkcyan") {
  const popup = document.getElementById("health");
  popup.textContent = text;
  popup.style.color = color;
}

function refreshBtn() {
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
    if (allGuesses.includes(guess)) {
      showPopUp(`You already wrote this number. Try a different one!`);
      return;
    }
    allGuesses.push(guess);

    if (guess !== previousGuess) {
      attempts--;
      showHealth(`${attempts} ♥️`);
    }
    previousGuess = guess;

    if (guess > answer) {
      showPopUp(`Too High! Try again.`);
    } else if (guess < answer) {
      showPopUp(`Too Low! Try again.`);
    } else {
      refreshBtn();
      showPopUp(
        `You Won!!! The number was ${answer}. It cost you ${
          5 - attempts
        } health.`
      );
      submit.style.display = `none`;
      running = false;
    }
    if (attempts === 0) {
      showHealth(`${attempts} ♥️ You Lost!!!`);
      submit.style.display = `none`;
      refreshBtn();
      showPopUp(`You Lost!!! The number was ${answer}`);
    }
  }
};
