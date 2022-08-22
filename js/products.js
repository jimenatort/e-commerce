const URL = PRODUCTS_URL+"101"+EXT_TYPE;
const productos = document.getElementById("autos");
let autosArray = [];

getJSONData(URL).then(function(data){
    if (data.status === "ok"){
        for (const products in data) {
            if (data.hasOwnProperty.call(data, products)) {
                const element = data[products];
                
            }
        }
        autosArray = data.products;
        console.log(data);
        productos.innerHTML = autosArray;
    }
});


















/*function showAutosList(){

    let htmlContent = "";
    for(let i = 0; i < autosArray .length; i++){
        let autos = autosArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(autos.productCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(autos.productCount) <= maxCount))){

            htmlContent += `
            <div onclick="setCatID(${autos.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${autos.imgSrc}" alt="${autos.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${autos.name}</h4>
                            <small class="text-muted">${autos.productCount} artículos</small>
                        </div>
                        <p class="mb-1">${autos.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        productos.innerHTML = htmlContent;
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(URL).then(function(resultobj){
        if (resultobj.status === "ok"){
            autosArray = resultobj.data
            showAutosList()
            
        }
    });

});*/