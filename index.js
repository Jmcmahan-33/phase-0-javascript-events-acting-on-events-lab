// Your code here
const dodger = document.getElementById("dodger");//locate the ID "dodger" from html file

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");//replacing px with empty string and storing to leftNumbers
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) { // if left(180 in html file) is more than 180 then move left when pressing arrow key
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px","")
    const left = parseInt(rightNumbers, 10)
    if (left < 500) {
        dodger.style.left = `${left +1}px`
   
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  