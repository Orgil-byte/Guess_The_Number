const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let guess;
let attempts = 0;
let running = true;
document.getElementById("submit").onclick = function () {
  if (!running) return;
  guess = document.getElementById("theNumber").value;
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert(`Please enter a number not text`);
  } else if (guess < minNum || guess > maxNum) {
    window.alert(`Please pick a number between ${minNum} to ${maxNum}`);
  } else {
    attempts++;
    if (guess > answer) {
      window.alert(`Too High! Try again.`);
    } else if (guess < answer) {
      window.alert(`Too Low! Try again.`);
    } else {
      window.alert(
        `Congratulations, YOU WON!!! The answer was ${answer}, It took you ${attempts} attempts`
      );
      running = false;
    }
  }
};
