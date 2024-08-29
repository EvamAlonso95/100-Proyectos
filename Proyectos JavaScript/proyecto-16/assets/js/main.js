
let ancho = window.screen.width,
    alto = window.screen.height,
    url = window.location.href,
    contenedor = document.querySelector('.content');

window.open("http://www.victorroblesweb.es/ruta");


contenedor.innerHTML += `
La pantalla tiene un ancho de ${ancho} píxeles y un alto de  ${alto} píxeles y te encuentras en la siguiente dirección: ${url}
`