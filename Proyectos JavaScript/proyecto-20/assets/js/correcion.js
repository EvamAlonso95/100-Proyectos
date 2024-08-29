window.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.content');

    let ancho = window.screen.width,
        alto = window.screen.height,
        url = window.location.href;

    window.open("http://www.victorroblesweb.es/ruta");


    contenedor.innerHTML += `
    La pantalla tiene un ancho de ${ancho} y un alto de  ${alto} y te encuentras en la siguiente dirección: ${url}
    `
})