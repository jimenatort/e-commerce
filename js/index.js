document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

//Parte 1 - Entregable 2:

//obtiene el elemento clave "texto" guardado en el localStorage
let texto = localStorage.getItem("text");

//lo muestra en la pagina principal.html en el campo de id="usuario-nav"
document.getElementById("usuario-nav").innerHTML = texto;