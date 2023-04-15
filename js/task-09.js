function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color")

function giveColor() {
  spanColor.textContent = `${getRandomHexColor()}`;
  document.body.style.backgroundColor = `${spanColor.textContent}`;
}

buttonChangeColor.addEventListener("click", giveColor)