const counterValue = document.getElementById("value");
counterValue.textContent = 0;

const removeEl = document.querySelector(" [data-action='decrement']");
const addEl = document.querySelector("[data-action='increment']");

let step = 0;

addEl.addEventListener("click", onElementAdd);
function onElementAdd(addEl) {
  step += 1;
  return (counterValue.textContent = step);
}

onElementAdd(counterValue);

removeEl.addEventListener("click", onElementRemove);
function onElementRemove(removeEl) {
  if (counterValue.textContent > 0) {
    step -= 1;
    return (counterValue.textContent = step);
  }
}
onElementRemove(counterValue);
