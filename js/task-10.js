function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControls = document.getElementById("controls");
const resultBoxes = document.getElementById("boxes");
const buttonCreate = divControls.querySelector('[data-create]');
const buttonDestroy = divControls.querySelector('[data-destroy]');

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

divControls.firstElementChild.addEventListener("input", findeValue);

function findeValue(event) {
    console.log(event.currentTarget.value)
    return createBoxes(event.currentTarget.value)
    // return event.currentTarget.value
  }

function createBoxes(amount) {
  console.log(amount)
  console.log("create")
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let sise = 10 * i;
    const divEl = (document.createElement("div"))
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${30+sise}px`;
    divEl.style.height = `${30+sise}px`;
    resultBoxes.appendChild(divEl)
  }
  
}

function destroyBoxes() {
  console.log("clean")
  resultBoxes.innerHTML = "";
}






