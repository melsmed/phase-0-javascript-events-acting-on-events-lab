// Your code here
const dodger = document.getElementById("dodger");

undefined
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
undefined
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
undefined
document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

undefined
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);
  
  if (left < (gameWidth - dodgerWidth)) { // Check if the dodger is not at the right edge
    dodger.style.left = `${left + 1}px`;
  }
}

undefined
const gameWidth = 400; // Width of the game field
const dodgerWidth = 40; // Width of the dodger