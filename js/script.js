// Draws a square pixel-art canvas of side squares.
function drawCanvas(side = boardSide) {
  for (let i = 0; i < side; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < side; j++) {
      let unit = document.createElement("div");
      unit.classList.add("unit");

      unit.addEventListener("mouseenter", function () {
        if (leftClickHeld) unit.classList.add("colored");
        else if (rightClickHeld) unit.classList.remove("colored");
      });

      row.appendChild(unit);
    }
    board.appendChild(row);
  }
}

// Deletes the canvas.
function deleteCanvas() {
  while (board.hasChildNodes()) board.removeChild(board.firstChild);
}

const board = document.querySelector("div.board");
let boardSide = 32;

drawCanvas();

// Disable right click menu.
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Event listeners to determine when the user is holding
// mouse click on canvas.
let leftClickHeld = false;
let rightClickHeld = false;

board.addEventListener("mousedown", (e) => {
  if (e.button == 0) leftClickHeld = true;
  else if (e.button == 2) rightClickHeld = true;
});

board.addEventListener("mouseup", (e) => {
  if (e.button == 0) leftClickHeld = false;
  else if (e.button == 2) rightClickHeld = false;
});
