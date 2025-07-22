

// Selecciona el menú
const menu = document.querySelector(".menu");
const opcionesMenu=document.querySelectorAll(".menu__link");
const icono=document.querySelector(".menu__icono-img");
const menuLista=document.querySelector(".menu__lista");
// Escucha el evento de scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    menu.classList.add("menu--scroll"); // Añade la clase si se ha hecho scroll
    opcionesMenu.forEach(opciones => {
      opciones.classList.add("menu__link--scroll");
    });
    menuLista.classList.add("menu__lista--scroll");
    icono.classList.add("menu__icono-img--scroll");
  } else {
    menu.classList.remove("menu--scroll"); // Elimina la clase si vuelve al inicio
    opcionesMenu.forEach(opciones => {
      opciones.classList.remove("menu__link--scroll");
    });
    menuLista.classList.remove("menu__lista--scroll");
    icono.classList.remove("menu__icono-img--scroll");
  }
});

icono.addEventListener("click",(e)=>{
menuLista.classList.toggle("mostrarMenu");
});




//cuando se toque en cualquier parte que no sea el menu que desaparezca
document.addEventListener('click', (e) => {
  if (!menuLista.contains(e.target) && !icono.contains(e.target)) {
    menuLista.classList.remove('mostrarMenu');
    
  }
});

//DEJAR TEMA AUNQUE SE RECARGUE LA PAGINA   
const iconoCambiarTema = document.querySelector(".iconoCambiarTema");
const body = document.body;
// Verificar si hay un tema guardado en localStorage
const temaGuardado = localStorage.getItem("theme");
if (temaGuardado === "dark-theme") {
    body.classList.add("dark-theme");
}

// Alternar tema y guardarlo en localStorage
iconoCambiarTema.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    // Guardar la preferencia en localStorage
    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark-theme");
    } else {
        localStorage.setItem("theme", "light-theme");
    }
});