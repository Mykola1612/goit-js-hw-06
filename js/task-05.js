const refs = {
  inputEl: document.getElementById("name-input"),
  nameEl: document.getElementById("name-output"),
};
refs.inputEl.addEventListener("input", onInputText);

function onInputText(event) {
  if (event.currentTarget.value !== "") {
    refs.nameEl.textContent = event.currentTarget.value;
  } else {
    refs.nameEl.textContent = "Anonymous";
  }
}
