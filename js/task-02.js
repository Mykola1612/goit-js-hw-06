const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const element = document.createElement("li");
  element.textContent = `${ingredients[i]}`;
  element.classList.add("item");
  list.appendChild(element);
}
