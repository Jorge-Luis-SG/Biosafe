let menu = document.getElementById("header-movil");
let menu2 = document.getElementById("menu-texto-lista");
let menu3 = document.getElementById("menu-hamburguesa2");


function mostrarheader(x) {
    menu.classList.toggle("change-menu");
    menu2.classList.toggle("change-menu");
    menu3.classList.toggle("change-menu");
    
  x.classList.toggle("change");

}