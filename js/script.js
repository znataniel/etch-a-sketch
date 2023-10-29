// Draws a square pixel-art canvas of side squares.
function drawCanvas(side = boardSide) {
  for (let i = 0; i < side; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < side; j++) {
      let unit = document.createElement("div");
      unit.classList.add("unit");

      // Add event listeners to color/uncolor a square if the user hovers it
      // while holding click.
      unit.addEventListener("mouseenter", function () {
        if (leftClickHeld) unit.classList.add("colored");
        else if (rightClickHeld) unit.classList.remove("colored");
      });

      // Add event listeners to color/uncolor a square
      // if the user clicks on it.
      unit.addEventListener("mousedown", (e) => {
        if (e.button == 0) unit.classList.add("colored");
        else if (e.button == 2) unit.classList.remove("colored");
      });

      row.appendChild(unit);
    }
    board.appendChild(row);
  }
}

function clearCanvas() {
  let __rows = board.querySelectorAll("div");
  __rows.forEach((row) => {
    let __units = row.querySelectorAll("div");
    __units.forEach((unit) => {
      unit.classList.remove("colored");
    });
  });
}

// Deletes the canvas.
function deleteCanvas() {
  while (board.hasChildNodes()) board.removeChild(board.firstChild);
}

function checkNewBoardSide(side) {
  side = +side;
  if (!isNaN(side)) {
    side = Math.floor(side);
    if (side < 2) return 2;
    if (side > 100) return 100;
    return side;
  }
}

function toggleGrid() {
  let __rows = board.querySelectorAll("div");
  __rows.forEach((row) => {
    let __units = row.querySelectorAll("div");
    __units.forEach((unit) => {
      if (!unit.id) unit.setAttribute("id", "noGrid");
      else unit.removeAttribute("id", "noGrid");
    });
  });
}

const board = document.querySelector("div.board");
const clearBtn = document.querySelector(".clearBtn");
const redrawBtn = document.querySelector(".redrawCanvasBtn");
const canvasSizeInput = document.querySelector(".canvasSizeInput");
const toggleGridBtn = document.querySelector(".toggleGridBtn");
const DEFAULT_BOARD_SIDE = 16;
let boardSide = DEFAULT_BOARD_SIDE;

drawCanvas();

// Disable right click menu.
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Event listeners to determine when the user is holding
// mouse click on canvas.
let leftClickHeld = false;
let rightClickHeld = false;

document.addEventListener("mousedown", (e) => {
  if (e.button == 0) leftClickHeld = true;
  else if (e.button == 2) rightClickHeld = true;
});

document.addEventListener("mouseup", (e) => {
  if (e.button == 0) leftClickHeld = false;
  else if (e.button == 2) rightClickHeld = false;
});

clearBtn.addEventListener("click", clearCanvas);

redrawBtn.addEventListener("click", () => {
  if (canvasSizeInput.value) {
    let newBoardSide = checkNewBoardSide(canvasSizeInput.value);
    if (newBoardSide) {
      deleteCanvas();
      drawCanvas(newBoardSide);
    } else
      alert("Canvas size must be an integer between 2 and 100. Please retry");

    canvasSizeInput.value = "";
  }
});

toggleGridBtn.addEventListener("click", toggleGrid);
