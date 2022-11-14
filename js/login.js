//Parte 3 - Entregable 1

//Devuelve una referencia al elemento por su ID
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("click", (e) => {
    e.preventDefault()

    validarCasillas()
    
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

const validarCasillas = () => {
    // obtengo los valores de cada campo
    const emailValue = email.value;
    const passwordValue = password.value;
// Validaciones campos no vacios
    if (emailValue === ""){
        errorMessage(email, "Ingresa tu Email");
    } else {
        successMessage(email);
    }
    if (passwordValue === ""){
        errorMessage(password, "Ingresa tu contraseña");
    } else {
        successMessage(password);
    }
};

//Parte 1 - Entregable 2
// funcion para redireccionar a la pagina principal del sitio una vez ingresados los datos de inicio de sesion
const buttonText = document.getElementById("boton-ingreso");

buttonText.addEventListener("click", (evt) => {
  // Si tenemos texto ingresado en el input, lo guardamos en el localStorage
  if (email.value && password.value) {
    localStorage.setItem("text", email.value)
    location.href = "principal.html"
  }
});
