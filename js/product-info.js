//E-3 Parte 2 - Uso del identificador del local storage
const ID = localStorage.getItem("prodID");
const INFO_URL = PRODUCT_INFO_URL + ID + EXT_TYPE;
const COMMENTS_URL = PRODUCT_INFO_COMMENTS_URL + ID + EXT_TYPE;
const comment = document.getElementById("comentario");
const puntos = document.getElementById("puntos");
const buttonEnviar = document.getElementById("agregar");
currentCommentsArray = [];
currentRelProducts = [];
let arrayNewComment = [];
let arrayOldComment = [];

//E3 parte 4
function agregarComentario() {

  if (localStorage.getItem("arrayItems") != null) {
    arrayNewComment = JSON.parse(localStorage.getItem("arrayItems"));
  }

  if (comment.value||puntos.value) {
    arrayNewComment.push(comment.value);
    arrayNewComment.push(comment.value);
      localStorage.setItem("arrayItems", JSON.stringify(arrayNewComment));
      localStorage.setItem("comment", comment.value);
      localStorage.setItem("puntos", puntos.value);
  }
  document.getElementById("comments").innerHTML += '<li>'+localStorage.getItem("comment")+ '-'+ ' ' +localStorage.getItem("puntos")+'</li>';
  comment.value="";
};


function setProductID(id) {
  localStorage.setItem("prodID", id);
  window.location = "product-info.html"
}
//E3 Parte 3
function score(puntuacion){

  if (puntuacion===1){
    return (
    `<span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     `);
  } else if (puntuacion===2){
    return (
    `<span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     `);
  } else if (puntuacion===3){
    return (
    `<span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     `);
  } else if (puntuacion===4){
    return (
    `<span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     `);
  } else if (puntuacion===5){
    return (
    `<span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     `);
  }
  console.log(puntuacion)
}
//E3 Parte 3
function showCommentsList(){

  let htmlContent = "";
  for(let i = 0; i < currentCommentsArray.length; i++){
      let product = currentCommentsArray[i];

      
      htmlContent += `
          <div class="list-group-item list-group-item-action cursor-active">
              <div class="col">
              
              <p class=""><strong>${product.user}</strong> - ${product.dateTime} - ${score(product.score)}</p>
              <small class="">${product.description}</small>
              <p class=""></p>
              <p class=""></p>
              </div>
          </div> 
          `
      document.getElementById("comments").innerHTML = htmlContent;
  }     
}    

//E4 Parte 1 - mostrar productos relacionados
function showRelatedProducts(){

  let htmlContent = "";
  for(let i = 0; i < currentRelProducts.length; i++){
      let product = currentRelProducts[i];

      
      htmlContent += `
      <br>
          <div onclick="setProductID(${product.id})" class="list-group-item list-group-item-action cursor-active">
              <div class="col">
              <img src="${product.image}" alt="" class="img-thumbnail" width="250">
              <p class="mb-1">${product.name}</p>
              </div>
          </div> 
          `
      document.getElementById("productos-rel").innerHTML = htmlContent;
  }     
}   



//E-3 parte 2 cargar la info de cada producto
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(INFO_URL).then(function(result){
      if (result.status === "ok"){
        currentInfoArray = result.data
        document.getElementById("info").innerHTML = `
        <div class="info">
        <div class="col">
        <br>
        <h3 class="name">${currentInfoArray.name}</h3>
        <hr>
        <p class="price"><strong>Precio</strong><br>${currentInfoArray.currency} ${currentInfoArray.cost}</p>
        <p class="descr"><strong>Descripción</strong><br>${currentInfoArray.description}</p>
        <p class="cat"><strong>Categoría</strong><br>${currentInfoArray.category}</p>
        <p class="sold"><strong>Cantidad de vendidos</strong><br>${currentInfoArray.soldCount}</p>
        <p class="cat"><strong>Imágenes ilustrativas</strong><br></p>
        <img src="${currentInfoArray.images[0]}" alt="" class="img-thumbnail" width="250">
        <img src="${currentInfoArray.images[1]}" alt="" class="img-thumbnail" width="250">
        <img src="${currentInfoArray.images[2]}" alt="" class="img-thumbnail" width="250">
        <img src="${currentInfoArray.images[3]}" alt="" class="img-thumbnail" width="250">
        <br>
        <br>
        <div class"comm">
           <h5>Comentarios</h5>
        </div>
        <br>
        </div>
    </div> 
    `
        console.log(currentInfoArray)
      }

    });
//E-3 parte 3 cargar los comentarios de cada producto
    getJSONData(COMMENTS_URL).then(function(resultObj){
      console.log(COMMENTS_URL)
    if (resultObj.status === "ok"){
      currentCommentsArray = resultObj.data
      showCommentsList()
      }
  });
  getJSONData(INFO_URL).then(function(result){
    if(result.status === "ok"){
      currentRelProducts = result.data.relatedProducts
      showRelatedProducts()
    }
  });

  buttonEnviar.addEventListener("click", (evt) => {
    agregarComentario();
    });

});