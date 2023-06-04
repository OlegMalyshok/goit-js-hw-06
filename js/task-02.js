const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const liEl = document.createElement("li");

liEl.textContent = "Potatoes";

liEl.classList.add("item");

ingredientsEl.appendChild(liEl);

const liSecondEl = document.createElement("li");

liSecondEl.textContent = "Mushrooms";

liSecondEl.classList.add("item");

ingredientsEl.appendChild(liSecondEl);

const liThirdEl = document.createElement("li");

liThirdEl.textContent = "Garlic";

liThirdEl.classList.add("item");

ingredientsEl.appendChild(liThirdEl);

const liFourEl = document.createElement("li");

liFourEl.textContent = "Tomatos";

liFourEl.classList.add("item");

ingredientsEl.appendChild(liFourEl);

const liFiveEl = document.createElement("li");

liFiveEl.textContent = "Herbs";

liFiveEl.classList.add("item");

ingredientsEl.appendChild(liFiveEl);

const liSixEl = document.createElement("li");

liSixEl.textContent = "Condiments";

liSixEl.classList.add("item");

ingredientsEl.appendChild(liSixEl);

console.log(ingredientsEl);
