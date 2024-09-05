window.addEventListener("DOMContentLoaded", (event) => {


    let input = document.querySelector(".main__input");

    let parrafo = document.querySelector(".main__text");

    input.addEventListener("change", (e) => {


        var input = document.getElementById("searchInput");
        var valor = input.value;


        if (valor.trim() != "") {
            let regExp = new RegExp(valor, "gi");

            parrafo.innerHTML = parrafo.textContent.replace(regExp, "<span class='text__search'>$&</span>")
        }

        // if (parrafo.includes(valor)) {
        //     alert(valor)
        // } else {
        //     alert('Esa palabra no se encuentra en el párrafo')
        // }


    });





});