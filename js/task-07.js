const formInputEl = document.querySelector("#font-size-control");
const textInput = document.querySelector("#text");

function fontSize(e) {
  textInput.style.fontSize = e.currentTarget.value + "px";
}

formInputEl.addEventListener("input", fontSize);
