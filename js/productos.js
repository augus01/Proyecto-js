class Producto{
    constructor(titulo,precio,stock,img){
        this.titulo = titulo;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }

    calcularDescuento(){
        const porcentaje = (this.precio * 30)/100;
        const descuento = this.precio - porcentaje;
        this.precio = descuento;
        
    }

    validarStock() {
        let cantidadElegida = parseInt(prompt(`Elige la cantidad de ${this.titulo} que deseas`))
        if(this.stock >= cantidadElegida){
            alert("Tenemos stock para ti")
            this.stock = this.stock - cantidadElegida;
            console.log(`Quedan ${this.precio} unidades de ${this.titulo}`)
            
        }else{
            alert("No tenemos stock para ti vuelva más tarde ")
        }
    }
    
    conversionPrecio() {
        const valorDolar = 774.25;
        const valorEuro = 913.35;
        const valorLibra =  1090;

        let eljeProducto = prompt("Elige un producto para ver su coste en otra moneda.");
        let eleccion = prompt(`Elige la moneda en que deseas ver el precio de ${this.titulo}. Opciones: Dolares,Euros,Libras esterlinas`);
        while (eleccion != "ESC"){
            switch (eleccion) {
                case "Dolares":
                    let totaldolar = valorDolar / this.precio;
                    this.precio = totaldolar;
                    console.log(this.precio)
                    break;
                case "Euros":
                    let totalEuro = valorEuro / this.precio;
                    this.precio = totalEuro;
                    console.log(this.precio)
                    break;
                case "Libras esterlinas":
                    let totalLibra = valorLibra / this.precio;
                    this.precio = totalLibra;
                    console.log(this.precio)
                    break;
                default:
                    alert("Elige una divisa que este entre las opciones")
                    break;
            }
            eleccion = "ESC";
        }
        return eleccion
      }
      
}
//Productos juegos

const gameRE8 = new Producto('Resident Evil 8-ps4', 50000, 10, "../img/games-ps4/resident_evil_village.jpg");
const gameWD = new Producto('Watch dogs legion-xbox series x', 20000, 10, "../img/games-xbox/watch_dogs_legion-xbox.jpg");
const gameTLOS = new Producto('The last of us part II', 30000, 10, "../img/games-ps4/the_last_of_us_part_ii.jpg");
const gameMKswitch = new Producto('Mortal Kombat 11', 20000, 10, "../img/games-switch/MK-11.jpg");
const gameMKD = new Producto('Mario Kart Deluxe 8', 50000, 10, "../img/games-switch/mariokart_deluxe_8.jpg");
const gameCrashB4 = new Producto('Crash Bandicoot 4: Its about time ', 45000, 10, "../img/games-switch/crash_bandicoot-4.jpg"); 
const gameSPMM = new Producto('Spider-Man Miles Morales PS4', 45000, 10, "../img/games-ps4/spider-man-miles-morales.jpg");
const gameCODCW = new Producto('Call Of Duty Black Ops Cold War Xbox One', 35000, 10, "../img/games-xbox/COD_coldwar_xbox.jpg");
const gameSWFO = new Producto('Star Wars Jedi: Fallen Order Xbox one', 26000, 10, "../img/games-xbox/jedi_fallen_order.jpg");
const gameGTA5 = new Producto('Grand theft auto 5 PS4', 35000, 10,"../img/games-ps4/GTAV.jpg");

//Productos Funkos

const Scarletwitch = new Producto('Funko Pop! Wandavision - Scarlet Witch', 35000,10, "../img/figuras/61QJ5yB6caL._AC_UL480_QL65_.jpg");
const SWhunter = new Producto('Funko Pop! Hunter - Bad Batch - Star Wars,', 15000,10, "../img/figuras/51HAnCc9KUS._AC_UL480_QL65_.jpg");
const loki = new Producto('Funko Pop! Marvel Loki - Loki', 20000, 10, "../img/figuras/51pdMsEXc9S._AC_UL480_QL65_.jpg");
const WVmonica = new Producto('Funko Pop! Wandavision - Monica Rambeau', 20000, 10, "../img/figuras/619mNZfDtwL._AC_UL480_QL65_.jpg");
const Ursula = new Producto('Funko Pop! La sirenita - Ursula', 20000, 10,"../img/figuras/ursula.jpeg" );
const Stich = new Producto('Funko Pop! Disney: Lilo & Stitch - Stitch sentado sonriente', 20000, 10,"../img/figuras/61yQCjJOnxL._AC_UL480_QL65_.jpg");
const Deadpool = new Producto('Funko Pop! Deadpool - Marvel - Guerrero del juego', 20000,10, "../img/figuras/deadpool.jpeg");



