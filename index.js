// COUNTER

const decreaseButton = document.getElementById("decrease-button");
const resetButton = document.getElementById("reset-button");
const increaseButton = document.getElementById("increase-button");
const countLabel = document.getElementById("counter-label");

let count = 0;

decreaseButton.onclick = function() {
  count--;
  countLabel.textContent = count;
}

resetButton.onclick = function() {
  count = 0;
  countLabel.textContent = count;
}

increaseButton.onclick = function() {
  count++;
  countLabel.textContent = count;
}