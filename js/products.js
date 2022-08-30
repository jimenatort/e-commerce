//const URL = PRODUCTS_URL+"101"+EXT_TYPE;
const URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
//const productos = document.getElementById("autos");
let productosArray = [];

function setCatID(id) {
    localStorage.setItem("catID", id);
    window.location = "products.html"
}

function showAutosList(){

    let htmlContent = "";
    for(let i = 0; i < productosArray.length; i++){
        let auto = productosArray[i];

        htmlContent += `
            <div onclick="setCatID(${auto.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${auto.image}" alt="${auto.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${auto.name} - ${auto.currency} ${auto.cost}</h4>
                            <small class="text-muted">${auto.soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${auto.description}</p>
                    </div>
                </div>
            </div> 
            `
        document.getElementById("autos").innerHTML = htmlContent;
    }     
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(URL).then(function(resultObj){
      if (resultObj.status === "ok"){
        productosArray = resultObj.data.products
            showAutosList()
        }
    });
});