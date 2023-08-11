const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("change", onValidTextLength);

function onValidTextLength(event) {
  if (event.currentTarget.value.length == inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
