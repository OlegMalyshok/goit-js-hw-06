let counterValue = 0;
const valueEl = document.getElementById("value");
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

const onClickIncrementEl = (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const onClickDecrementEl = (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

decrementEl.addEventListener("click", onClickDecrementEl);
incrementEl.addEventListener("click", onClickIncrementEl);
