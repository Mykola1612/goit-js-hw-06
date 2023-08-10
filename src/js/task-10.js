// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.Натисненням на кнопку Очистити,
//     колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
//  Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");

const inputEl = controls.querySelector("input");
const createButtonEl = controls.querySelector("[data-create]");
const destroyButtonEl = controls.querySelector("[data-destroy]");

const box = document.querySelector("#boxes");
console.log(box);

createButtonEl.addEventListener("click", createBoxes);
let widthAndHeight = 20;

function createBoxes() {
  widthAndHeight += 10;
  const element = document.createElement("div");
  element.style.backgroundColor = getRandomHexColor();
  element.style.width = `${widthAndHeight}px`;
  element.style.height = `${widthAndHeight}px`;

  box.appendChild(element);
  console.log(element);
  console.log(widthAndHeight);
}

destroyButtonEl.addEventListener("click", onDestroyElement);
function onDestroyElement(event) {
  box.innerHTML = "";
  widthAndHeight = 20;
}
