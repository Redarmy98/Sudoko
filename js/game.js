let cells = document.querySelectorAll(".cell");
let i = 0;

// outer borderring
cells.forEach((cell) => {
  // cell.innerText = i;
  if (i % 3 == 2) cell.classList.add("right-side");
  if (i % 3 == 0) cell.classList.add("left-side");
  if ((i >= 18 && i <= 26) || (i >= 45 && i <= 53) || (i >= 72 && i <= 80))
    cell.classList.add("below");
  if ((i >= 0 && i <= 8) || (i >= 27 && i <= 35) || (i >= 54 && i <= 62))
    cell.classList.add("above");
  i++;
});

// computer printing

function condition(cells, cellNo, number) {
  if (cells[cellNo].innerText !== "") return false;

  for (let i = cellNo % 9; i < 81; i += 9)
    if (cells[i].innerText === String(number)) return false;

  let rowStart = Math.floor(cellNo / 9) * 9;
  let rowEnd = rowStart + 9;
  for (let i = rowStart; i < rowEnd; i++)
    if (cells[i].innerText === String(number)) return false;

  return true;
} 

let btn = document.getElementById("solve-btn");
function reset() {
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.contentEditable = true;
  });
  btn.disabled = false;
}

function placeNumbers() {
  let range = Math.floor(Math.random() * 25) + 10;
  let resetButton = document.getElementById("reset-btn");

  // Disable the reset button
  resetButton.disabled = true;

  for (let i = 0; i < range; i++) {
    setTimeout(() => {
      let number = Math.floor(Math.random() * 9) + 1;
      let cellNo = Math.floor(Math.random() * 81);
      if (condition(cells, cellNo, number)) {
        cells[cellNo].innerText = number;
        cells[cellNo].contentEditable = false;
      }
      
      // Re-enable the reset button after the last number is placed
      if (i === range - 1) {
        resetButton.disabled = false;
      }
    }, i * 250);
  }
}


function callme() {
  // reset.disabled = 'true';
  placeNumbers();
  btn.disabled = true; // Disable the button after clicking\
  // reset.disabled = 'false';
}

cells.forEach((cell) => {
  cell.addEventListener("input", (e) => {
    let value = e.target.innerText;
    if (!/^[1-9]$/.test(value)) {
      // Show an error message
      alert("Please enter only a single digit between 1 and 9.");
      // Reset the cell content
      e.target.innerText = "";
    }
  });

  // Optional: Restrict paste action to prevent invalid inputs
  cell.addEventListener("paste", (e) => {
    e.preventDefault();
    alert("Pasting is not allowed. Please enter a single digit between 1 and 9.");
  });
});


btn.addEventListener("click", callme);
document.getElementById('reset-btn').addEventListener('click', reset);
