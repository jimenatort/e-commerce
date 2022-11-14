const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";


let showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function (url) {
  let result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}

//Parte 1 - Entregable 2:
//obtiene el elemento clave "texto" guardado en el localStorage
let texto = localStorage.getItem("text");

//lo muestra en la pagina principal.html en el campo de id="usuario-nav"
document.getElementById("dropdownMenuButton1").innerHTML = texto;


//E7 Parte 1: traemos los valores del usuario ingresado en la barra de nav y de la opcion para redirigir al perfil
const emailButton = document.getElementById("dropdownMenuButton1");
console.log(emailButton.innerText);
const myProfile = document.getElementById("my-profile");

//Funcion para que al dar click en mi perfil, si hay un valor ingresado, redirija al perfil y en caso contrario no.
myProfile.addEventListener("click", (evt) => {
  evt.preventDefault()
  // Si tenemos un email ingresado en el boton, lo guardamos en el localStorage y redireccionamos al perfil
  if (emailButton.innerText) {
    localStorage.setItem("text", emailButton.innerText)
    location.href = "my-profile.html"
  }
});
