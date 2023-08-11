function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const buttonEl = body.querySelector(".change-color");
const colorEl = body.querySelector(".color");

buttonEl.addEventListener("click", onRandomColor);

function onRandomColor(event) {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorEl.textContent = body.style.backgroundColor = `${getRandomHexColor()}`;
}
