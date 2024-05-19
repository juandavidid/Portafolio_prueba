
//CODIGO EN PARA MOSTRAR UN MENU

// onclick="mostrarOcultarMenu()"
let estructuraMenu = document.querySelector(".nav-responsive");

let menu = document.getElementById('nav');
console.log(menu);
// class="responsive" tengo que agregar esto al etiqueta
let menuEstado = "activado";

estructuraMenu.addEventListener('click', function mostrarOcultarMenu() {
    if (menuEstado == "activado") {
        menu.classList = "responsive";
        console.log("Muestra el Menu");
        menuEstado = "desactivado";
    } else {
        menu.classList = "";
        console.log("Quita el Menu");
        menuEstado = "activado";
    }
});


//Funcion que permite quitar  el menu cuando se le da click 
function seleccionar() {
    document.getElementById("nav").classList = "";
    menuEstado = "activado";
}

//Codigo para aplicar las animaciones en las barras de progreso
let atributos = ['javascript', 'htmlcss', 'Photoshop', 'Wordpress', 'Drupa', 'comunicacion', 'trabajo-en-equipo', 'Creatividad', 'Dedicacion', 'Proyecto'];
let barrasProgreso = document.getElementsByClassName("progreso");
for (let i in atributos) {
    barrasProgreso[i].classList.add(atributos[i]);
}



/*
let menuVisble = false;

// Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {

    // Estrucutura del Condicional
    console.log(menuVisble);

    if (menuVisble) {
        document.getElementById("nav").classList = "";
        menuVisble = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisble = true;
    }
}
*/

//onclick="seleccionar()


let etiquetali = document.getElementsByTagName('li');
console.log(etiquetali[0]);













