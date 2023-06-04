const formInputEl = document.querySelector("#validation-input");

formInputEl.addEventListener("blur", onBlur);

function onBlur(e) {
  const inputDataLength = Number(formInputEl.dataset.length);
  const inputLengthValue = Number(formInputEl.value.length);
  if (inputDataLength === inputLengthValue) {
    formInputEl.classList.add("valid");
    formInputEl.classList.remove("invalid");
  } else {
    formInputEl.classList.remove("valid");
    formInputEl.classList.add("invalid");
  }
}
