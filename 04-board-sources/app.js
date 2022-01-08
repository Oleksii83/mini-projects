const board = document.querySelector("#board");
const colors = [
  "Crimson",
  "Lime",
  "DeepPink",
  "Tomato",
  "Yellow",
  "Cyan",
  "Indigo",
  "Fuchsia",
];
const SQUARE_NUMBER = 868;
for (let index = 0; index < SQUARE_NUMBER; index++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(el) {
  const color = getRandomColors();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = `0 0 2px #000`;
}

function getRandomColors() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
