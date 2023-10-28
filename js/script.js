const BOARD_HEIGHT = 50;
const BOARD_WIDTH = 50;

const board = document.querySelector("div.board");

let mouseHeldFlag = false;

document.addEventListener("mousedown", () => {
  mouseHeldFlag = true;
});

document.addEventListener("mouseup", () => {
  mouseHeldFlag = false;
});

for (let i = 0; i < BOARD_HEIGHT; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < BOARD_WIDTH; j++) {
    let unit = document.createElement("div");
    unit.classList.add("unit");

    unit.addEventListener("mouseenter", function () {
      if (mouseHeldFlag) unit.classList.add("colored");
    });

    row.appendChild(unit);
  }
  board.appendChild(row);
}

board.addEventListener();
