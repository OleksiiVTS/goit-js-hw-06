const inputRange = document.getElementById("font-size-control");
const spanText = document.getElementById("text");



function getValue(inputR) {
    inputR.addEventListener("input", (event) => {
        // console.log(`${inputR.value}px`)
        inputR.value
        spanText.style.fontSize = `${inputR.value}px`;
    });
};

getValue(inputRange)