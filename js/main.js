let carro = [];
if ((localStorage.carro != null) & sessionStorage.carro != undefined) {
    carro = JSON.parse(sessionStorage.carro);
    document.getElementById("number-carrito").innerHTML = carro.length;

}

const producgames = [gameRE8, gameWD, gameTLOS, gameMKswitch, gameMKD, gameCrashB4, gameSPMM, gameCODCW, gameSWFO, gameGTA5];
const producfunko = [Ursula, SWhunter, loki, Scarletwitch, WVmonica, Stich, Deadpool]

const datosproducts = producgames.concat(producfunko)

const juegosdestacados = producgames.slice(0, 5);
const coleccionables = producfunko.slice((2));

juegosdestacados2 = producgames.slice((5));
coleccionables2 = producfunko.slice(0, 2);

const destacados = coleccionables.concat(juegosdestacados);
const destacados2 = destacados.slice(0, 2)
const destacados3 = destacados.slice(7, 10)
const productdestacados = destacados2.concat(destacados3);

let cardsdestacados = ``;
let cardsproductosgames = ``;
let cardsproductosfunko = ``;


mostrarCARDS(productdestacados, "all-destacados", cardsdestacados);
mostrarCARDS(juegosdestacados, "juegos-destacados", cardsproductosgames);
mostrarCARDS(coleccionables, "figuras-destacadas", cardsproductosfunko);

function mostrarCARDS(array, ubicacion, tipocard) {
    array.forEach((Producto) => {
        tipocard += `
    <div class="cardProductos" >
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
            <button onclick="agregaralcarro('${Producto.titulo}', '${Producto.precio}', '${Producto.img}')" class="button-carro">
                <i class="bi bi-cart-plus"></i>
                <p>Agregar al carrito</p>
            </button>
        </div>
    </div>`
        document.getElementById(ubicacion).innerHTML = tipocard;
    });
}
const tiempo = 2000;
        const imagenanimada = $('#animacionPrueba');
        imagenanimada.fadeIn(tiempo).delay(tiempo).fadeOut(tiempo);

function mostrarMas(array, ubicacionmas, tipocard, ubicacionbottom) {
    array.forEach((Producto) => {
        tipocard +=
            `<div class="cardProductos">
            <div class="img-productos">
                <img id="animacionPrueba" src=${Producto.img} alt="">
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
                <button onclick="agregaralcarro('${Producto.titulo}', '${Producto.precio}', '${Producto.img}')" class="button-carro">
                    <i class="bi bi-cart-plus"></i>
                    <p>Agregar al carrito</p>
                </button>
            </div>
        </div>`
        document.getElementById(ubicacionmas).innerHTML = tipocard;

    });
    let ocultar = `<button id="compraFunkos" onclick= "mostrarMasFunkos();" class="button" style="display:none">Ver más</button>`
    document.getElementById(ubicacionbottom).innerHTML = ocultar;

}
let Productodelcarro = ``;
function mostrarCarrito() {
    carro.forEach((Producto) => {
        Productodelcarro +=
            `<div class="carrito-card">
            <div class="carrito-img-productos">
                <img id="carro-img-productos" src=${Producto.img} alt="">
            </div>
            <div class="carrito-producto">
                <div class="carrito-producto-titulo">
                    <h3>${Producto.titulo}</h3>
                </div>
                <div class="carrito-producto-precio">
                        <p>$${Producto.precio}</p>
                </div>
            </div>
            <div class="agrega-al-carro">
                <button onclick="agregaralcarro('${Producto.titulo}', '${Producto.precio}', '${Producto.img}')" class="button-carro">
                    <i class="bi bi-cart-plus"></i>
                    <p>Agregar al carrito</p>
                </button>
            </div>
        </div>`
        document.getElementById("carrito-mostrado").innerHTML = Productodelcarro;
    });
}