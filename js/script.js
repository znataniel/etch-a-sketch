const BOARD_HEIGHT = 50;
const BOARD_WIDTH = 50;

const board = document.querySelector("div.board");

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

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

for (let i = 0; i < BOARD_HEIGHT; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < BOARD_WIDTH; j++) {
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
