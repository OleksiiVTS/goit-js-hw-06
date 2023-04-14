const formEl = document.querySelector(".login-form");
// console.log(formEl)

formEl.addEventListener("submit", submitForm);

function submitForm (event) {
    event.preventDefault()
    const {
        elements: { email, password }
      } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        window.alert("Всі поля повинні бути заповнені!"); 
    } 
    else {
        const submitObjekt = new Object();
        submitObjekt.email = email.value;
        submitObjekt.password = password.value;
        console.log(submitObjekt);
        event.currentTarget.reset();
    }
};