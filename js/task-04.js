const valueEl = document.getElementById("value");
const buttonDecrement = document.querySelector(`[data-action="decrement"]`);
const buttonIncrement = document.querySelector(`[data-action="increment"]`)

let counterValue = 0;

const remoutItem = () => {
    counterValue !== 0 ?  counterValue -= 1 : counterValue === 0
    return valueEl.textContent = counterValue
};
const addItem  = () => {
    counterValue += 1
    return valueEl.textContent = counterValue
};

buttonDecrement.addEventListener('click', remoutItem)
buttonIncrement.addEventListener('click', addItem)