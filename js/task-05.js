const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", (e) => {
  if (e.target.value !== "") {
    outputNameEl.textContent = e.target.value;
  } else {
    outputNameEl.textContent = "Anonymous";
  }
});
