window.addEventListener("DOMContentLoaded", (event) => {
    let tarjetas = document.querySelectorAll('.layout__card');

    tarjetas.forEach(tarjeta => {

        let btn = document.createElement("button");
        let text = document.createTextNode("Eliminar tarjeta");

        btn.classList.add("content__btn");
        btn.appendChild(text);

        tarjeta.appendChild(btn);
    })

})
