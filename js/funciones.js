
function filtradoProductos() {
  const preciofiltrado = []
  let decide = prompt("¿Quieres filtrar un precio? Si/No");
  if ((decide == "Si") || (decide == "si")) {
    let valorfiltro = parseInt(prompt("Que valor quieres filtrar"));
    const preciofiltrado = datosproducts.filter(Producto => Producto.precio > valorfiltro);
    console.log(preciofiltrado);
    return preciofiltrado;

  } else {
    alert("Gracias por preferirnos")
  }
}

//Ordena los productos 
function ordenarArray(a, b) {
  if (a.precio > b.precio) {
    return -1;
  }
  if (a.precio < b.precio) {
    return 1;
  }
  return 0;
}

let alertaAgregado = ``;
function agregaralcarro(titulo, precio, imagen, ubicacion) {
  const productoEncontrado = datosproducts.find(Producto => Producto.titulo === titulo);
  Producto => Producto.precio === precio;
  Producto => Producto.img === imagen;


  if (productoEncontrado != undefined) {
    console.log("el producto se muestra")
    carro.push(productoEncontrado);
    console.log(carro);
    $("#figuras-destacadas").append(`
  <div class="ventana__emergente">
    
    <div class="emergente__producto">
      <div class="producto__img">
        <img src= ${imagen} alt="">
      </div>

      <div class="producto__info">
        <div class="producto__title">
          <p>${titulo}</p>
        </div>

        <div class="producto__precio">
          <p>$${precio}</p>
        </div>
        <button class="producto__agregado" onclick="ocultarVentana();">Producto agregado al carrito</button>
      </div>
    </div>
  </div>`);
  } else {
    alert("No contamos con stock");
  }
  localStorage.carro = JSON.stringify(carro);
  document.getElementById("number-carrito").innerHTML = carro.length;
}

function ocultarVentana() {
  let ocultarVentana = `<div class="ventana__emergente" style="display:none"></div>`;
  $("#figuras-destacadas").html(ocultarVentana);
}

function mostrarMasDestacados() {
  let cardsdestacados = ``;
  productdestacados.forEach((Producto) => {
    cardsdestacados += `
    <div class="cardProductos">
    <div class="img-productos">
        <img src=${Producto.img} alt="">
    </div>
    <div class="pProductos">
        <div class="producto-titulo">
            <h3>${Producto.titulo}</h3>
        </div>
        <div class="producto-precio">
            <p>$${Producto.precio}</p>
        </div>
    </div>
    <div class="agrega-al-carro">
        <button onclick="agregaralcarro('${Producto.titulo}')" class="button-carro">
            <i class="bi bi-cart-plus"></i>
            <p>Agregar al carrito</p>
        </button>
    </div>
</div>`
  });
  document.getElementById("all-destacados").innerHTML = cardsdestacados;

  let ocultar = `<button id="compraDestacados" onclick= "mostrarMasDestacados();" class="button" style="display:none">Ver más</button>`
  document.getElementById("botton-mas1").innerHTML = ocultar
}


function mostrarMasFunkos() {
  coleccionables2.forEach((Producto) => {
    cardsproductosfunko += `
        <div class="cardProductos">
        <div class="img-productos">
            <img src=${Producto.img} alt="">
        </div>
        <div class="pProductos">
            <div class="producto-titulo">
                <h3>${Producto.titulo}</h3>
            </div>
            <div class="producto-precio">
                <p>$${Producto.precio}</p>
            </div>
        </div>
        <div class="agrega-al-carro">
        <button onclick="agregaralcarro('${Producto.titulo}')" class="button-carro">
                <i class="bi bi-cart-plus"></i>
                <p>Agregar al carrito</p>
            </button>
        </div>
    </div>`
  });
  document.getElementById("figuras-destacadas").innerHTML = cardsproductosfunko;

  let ocultar = `<button id="compraFunkos" onclick= "mostrarMasFunkos();" class="button" style="display:none">Ver más</button>`
  document.getElementById("botton-mas2").innerHTML = ocultar
}

function mostrarMas() {
  juegosdestacados2.forEach((Producto) => {
    cardsproductosgames += `
        <div class="cardProductos">
            <div class="img-productos">
                <img src=${Producto.img} alt="">
            </div>
            <div class="pProductos">
                <div class="producto-titulo">
                    <h3>${Producto.titulo}</h3>
                </div>
                <div class="producto-precio">
                    <p>$${Producto.precio}</p>
                </div>
            </div>
            <div class="agrega-al-carro">
                <button onclick="agregaralcarro('${Producto.titulo}')" class="button-carro">
                    <i class="bi bi-cart-plus"></i>
                    <p>Agregar al carrito</p>
                </button>
            </div>
        </div>`
  });
  document.getElementById("juegos-destacados").innerHTML = cardsproductosgames;

}