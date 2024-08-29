// Seleccionamos el botón correctamente usando querySelector
const btn = document.querySelector(".content__btn");

// Seleccionamos el primer elemento de la clase ".card__header" y ".layout__card"
const header = document.querySelector(".card__header");
const layout = document.querySelector(".layout__card");

// Añadimos el evento click al botón
btn.addEventListener("click", function () {
    // Cambiamos las clases de layout
    layout.classList.add('layout__card--on');

    // Cambiamos las clases de header
    header.classList.add('card__header--on');

    // Cambiamos las clases del botón
    btn.classList.add('content__btn--on');
});
