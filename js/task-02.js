const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.getElementById("ingredients");
 
const masMap =  ingredients
  .map(elem => `<li class=".item" >${elem}</li>`)
  .join("")
ulIngredients.insertAdjacentHTML("beforeend", masMap);



// const fragment = document.createDocumentFragment();

// const listIngredients = (mass) => {
//   for (const elem of mass) {
//     const liIngredients = (document.createElement("li"));
//     liIngredients.textContent = elem;
//     liIngredients.classList.add(".item")
//     fragment.append(liIngredients)
//   }
// };

// listIngredients(ingredients);
// ulIngredients.appendChild(fragment);

