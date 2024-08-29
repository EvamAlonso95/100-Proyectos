window.addEventListener("DOMContentLoaded", () => {
    let tarjetas = document.querySelectorAll('.layout__card');

    tarjetas.forEach(tarjeta => {

        tarjeta.innerHTML += `
         <button class="content__btn" type="button">Eliminar tarjeta</button>
        `
    })

})
