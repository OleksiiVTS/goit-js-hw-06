const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
    event.currentTarget.value === "" 
    ? spanEl.textContent = "Anonymous" 
    : spanEl.textContent = event.currentTarget.value
});