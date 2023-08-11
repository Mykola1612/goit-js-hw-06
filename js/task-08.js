const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value !== "" && password.value !== "") {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    formEl.reset();
  } else {
    alert("Save all form fields");
  }
}
