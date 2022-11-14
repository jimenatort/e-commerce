//Una vez ingresado el email en el login, se muestra en el perfil de usuario
document.getElementById("casilla-email").value = texto;


//E7 Parte 2: validaciones de campos obligatorios (campos no vacios)

const button_save = document.getElementById("btn-save");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const firstSurname = document.getElementById("firstsurname");
const secondSurname = document.getElementById("secondsurname");
const email = document.getElementById("casilla-email");
const number = document.getElementById("number");

//Parte 3: obtener las claves para despues guardar cada valor en el mismo
let content1 = localStorage.getItem("name");
let content2 = localStorage.getItem("surname");
let content3 = localStorage.getItem("name2");
let content4 = localStorage.getItem("surname2");
let content5 = localStorage.getItem("number");


firstName.value = content1;
firstSurname.value = content2;
lastName.value = content3;
secondSurname.value = content4;
number.value = content5;

firstName.innerHTML = content1;
firstSurname.innerHTML = content2;
lastName.innerHTML = content2;
secondSurname.innerHTML = content2;
number.innerHTML = content2;


button_save.addEventListener("click", (e) => {
    e.preventDefault()
    validateInputs()
});

const errorMessage = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};

const successMessage = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};

const validateInputs = () => {
    // obtengo los valores de cada campo
    const firstNameValue = firstName.value;
    const firstSurnameValue = firstSurname.value;
    const emailValue = email.value;
// Validaciones campos no vacios
    if (emailValue === ""){
        errorMessage(email, "Este campo es obligatorio");
    } else {
        successMessage(email);
        localStorage.setItem("email", email.value);
    }
    if (firstNameValue === ""){
        errorMessage(firstName, "Este campo es obligatorio");
    } else {
        successMessage(firstName);
        localStorage.setItem("name", firstName.value);
    }
    if (firstSurnameValue === ""){
        errorMessage(firstSurname, "Este campo es obligatorio");
    } else {
        successMessage(firstSurname);
        localStorage.setItem("surname", firstSurname.value);
    }
    localStorage.setItem("name2", lastName.value);
    localStorage.setItem("surname2", secondSurname.value);
    localStorage.setItem("number", number.value);
};
