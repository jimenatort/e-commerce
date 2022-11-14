//E5 Partr 1 - Creo una constante haciendo uso del ID de usuario 25801 
const CART_URL = CART_INFO_URL + "25801" + EXT_TYPE;
let currentCartArray = [];

const cart_info = document.getElementById("cart-info");
const costos = document.getElementById("costos");

//E5 Parte 3 - declaro las constantes asociadas a los input

//E5 Parte 3 - Defino las constantes asociadas a los ids
//Declaro la funcion - formula => subtotal = Costo * cantidad 
const calcSubtotal = (id) => {
    const cantidad = document.getElementById("cant" + id);
    const costo = document.getElementById("costo" + id);
    const subtotal = document.getElementById("subtotal" + id);
    const cantidadValue = parseInt(cantidad.value);
    const costoValue = parseFloat(costo.innerHTML);
    //console.log(cantidadValue, costoValue, subtotal)

    subtotal.innerHTML = cantidadValue * costoValue;
};


//E5 Parte 1 - Mostrar la info en el html:
function showCartInfo() {

    let htmlContent = "";
    for (let i = 0; i < currentCartArray.length; i++) {
        let cartInfo = currentCartArray[i];

        const div = document.createElement("div")
        div.innerHTML += `
        <form class="needs-validation" novalidate>
        <div class="row"> 
        <table style="width:100%">
        <tr>
           <th></th>
           <th>Nombre</th>
           <th>Costo</th>
           <th>Cantidad</th>
           <th>Subtotal</th>
        </tr>
        <hr>
        <tr>
           <td><img src="${cartInfo.image}" alt="" width=100px class="row"></td>
           <td>${cartInfo.name}</td>
           <td><span class="currency">${cartInfo.currency} </span><span class="costo" id="costo${cartInfo.id}">${cartInfo.unitCost}</span></td>
           <td><input class="cant" id="cant${cartInfo.id}" type="number" placeholder="${cartInfo.count}" onInput="calcSubtotal(${cartInfo.id});validateCountCart(${cartInfo.id});calcSumSub(${cartInfo.id})"/></td>
           <td><span id="subtotal${cartInfo.id}" class="subtotal"></span></td>
        </tr>
      </table>
      
      </div>
      </form>
      <hr>
        `
        cart_info.appendChild(div);

        const div2 = document.createElement("div")
        div2.innerHTML = `
        <div class="list-group-item">
        <div class="row">
                  <div class="col">
                    <p class="mb-1">Subtotal</p>
                    <small class="mb-1">Costo unitario del producto por cantidad</small>
                  </div>
                  <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                      <p class="text-muted">USD</p>
                      <p class="text-muted" id="sumSub${cartInfo.id}"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-group-item">
                <div class="row">
                  <div class="col">
                    <p class="mb-1">Costo de envío</p>
                    <small class="mb-1">Según el tipo de envío</small>
                  </div>
                  <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1"></h4>
                      <p class="text-muted" id="costo-envio">USD</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-group-item">
                <div class="row">
                  <div class="col">
                    <p class="mb-1">Total ($)</p>
                  </div>
                  <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1"></h4>
                      <p class="text-muted" id="total-general"><strong>USD</strong></p>
                    </div>
                  </div>
                </div>
              </div>
        `
        costos.appendChild(div2);
    }
}


//E5 Parte 1 - Peticion web a la url:

document.addEventListener("DOMContentLoaded", function (ev) {
    getJSONData(CART_URL).then(function (result) {
        if (result.status === "ok") {
            currentCartArray = result.data.articles
            showCartInfo()
        }
    });

});

//E6 Parte 2 - deshabilitar casillas modal
function disableSending() {

    const button1 = document.getElementById("tarj");
    const button2 = document.getElementById("transf");

    //Desactivar todas las casillas
    document.getElementById("number").disabled = true;
    document.getElementById("cod").disabled = true;
    document.getElementById("venc").disabled = true;
    document.getElementById("cuenta").disabled = true;

    //obtener el valor si el radio buttom es checked
    const button1Check = button1.checked;
    const button2Check = button2.checked;
    if (button1Check == true) {
        //Habilitar las casillas de la primer opción si está checked
        document.getElementById("number").disabled = false;
        document.getElementById("cod").disabled = false;
        document.getElementById("venc").disabled = false;
    } else if (button2Check == true) {
        //Habilitar las casillas de la segunda opción si está checked
        document.getElementById("cuenta").disabled = false;
    }
    if (button1Check == true) {
        document.getElementById("addText").innerText = "Tarjeta de crédito" + " ";
    } else if (button2Check == true) {
        document.getElementById("addText").innerText = "Transferencia bancaria" + " ";
    }
}



//E6 Parte 3 validaciones

const button_finalizar = document.getElementById("finalizar");
// const calle = document.getElementById("calle");
// const numero = document.getElementById("numero");
// const esquina = document.getElementById("esquina");
// const premium = document.getElementById("premium");
// const express = document.getElementById("express");
// const standard = document.getElementById("standard");


button_finalizar.addEventListener("click", function () {

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
        const button1 = document.getElementById("tarj");
        const button2 = document.getElementById("transf");
        const button1Check = button1.checked;
        const button2Check = button2.checked;

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {

                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                        document.getElementById("addMsg").innerText = "Debe seleccionar una forma de pago"
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })()
});

function validateCountCart(id) {
    const cantidad = document.getElementById("cant" + id);
    const cantidadValue = parseInt(cantidad.value);
    console.log(cantidadValue)

    if (cantidadValue < 1) {
        cantidad.setCustomValidity("error")
        cantidad.style.background = "#FFDDDD"
    }
}

//E6 Parte 1: crear una funcion para cada valor a mostrar (subtotal, costo de envio, total)
//Seguir todos los pasos de forma similar a como se hizo en el E5 con el subtotal
//Los 3 valores deberán actualizarse en tiempo real cuando se modifique el tipo de envío o los artículos en el carrito.
//Todos los valores deberán ser mostrados en dólares.

const calcSumSub = (id) => {
    const cantidad = document.getElementById("cant" + id);
    const costo = document.getElementById("costo" + id);
    const sumSub = document.getElementById("sumSub" + id);
    const cantidadValue = parseInt(cantidad.value);
    const costoValue = parseFloat(costo.innerHTML);
    //console.log(cantidadValue, costoValue, subtotal)

    sumSub.innerHTML = cantidadValue * costoValue;
};














/*function disableSending() {

    (document.pay_form.num.disabled = !document.pay_form.tarj.checked) &&
        (document.pay_form.codigo.disabled = !document.pay_form.tarj.checked) &&
        (document.pay_form.venc.disabled = !document.pay_form.tarj.checked);

    (document.pay_form.cuenta.disabled = !document.pay_form.transf.checked);
};*/
