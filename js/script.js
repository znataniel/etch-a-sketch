const BOARD_HEIGHT = 16;
const BOARD_WIDTH = 16;

const board = document.querySelector("div.board");

for (let i = 0; i < BOARD_HEIGHT; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < BOARD_WIDTH; j++) {
    let unit = document.createElement("div");
    unit.classList.add("unit");
    row.appendChild(unit);
  }
  board.appendChild(row);
}
