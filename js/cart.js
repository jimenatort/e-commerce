//E5 Partr 1 - Creo una constante haciendo uso del ID de usuario 25801 
const CART_URL = CART_INFO_URL + "25801" + EXT_TYPE;
let currentCartArray = [];

const cart_info = document.getElementById("cart-info");

//E5 Parte 3 - declaro las constantes asociadas a los input

//E5 Parte 3 - Defino las constantes asociadas a los ids
//Declaro la funcion - formula => subtotal = Costo * cantidad 
const calcSubtotal = (id) =>{
    const cantidad = document.getElementById("cant"+id);
    const costo = document.getElementById("costo"+id);
    const subtotal = document.getElementById("subtotal"+id);
    const cantidadValue = parseInt(cantidad.value);
    const costoValue = parseFloat(costo.value);
    
    if(isNaN(subtotal)) subtotal.innerText = "0";
     else subtotal.innerText = cantidadValue * costoValue;
};


//E5 Parte 1 - Mostrar la info en el html:
function showCartInfo(){
    
    let htmlContent = "";
    for (let i=0; i < currentCartArray.length; i++){
        let cartInfo = currentCartArray[i];

        const div = document.createElement("div")
        div.innerHTML += `
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
           <td><span class="currency">${cartInfo.currency} </span><span class="costo" id="costo${cartInfo.id}">${cartInfo.unitCost}</td>
           <td><input class="cant" id="cant${cartInfo.id}" type="number" placeholder="${cartInfo.count}" onInput="calcSubtotal(${cartInfo.id})"/></td>
           <td><span id="subtotal${cartInfo.id}" class="subtotal"></span></td>
        </tr>
      </table>
      <hr>
      </div>
        `
        cart_info.appendChild(div);
    }
}


//E5 Parte 1 - Peticion web a la url:

document.addEventListener("DOMContentLoaded", function(ev){
    getJSONData(CART_URL).then(function(result){
        if (result.status === "ok"){
            currentCartArray = result.data.articles
            showCartInfo()
        }
    });

});

//E5 Parte 3 - Asociar los add even listener
   /* cantidad.addEventListener("input", ()=>{
        calcSubtotal();
    });
    costo.addEventListener("input", ()=>{
        calcSubtotal();
    });*/