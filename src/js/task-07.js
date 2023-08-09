const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("input", onAddFontSize);

function onAddFontSize(event) {
  const val = event.currentTarget.value;
  return (textEl.style.fontSize = `${val}px`);
}
