window.addEventListener("DOMContentLoaded", (event) => {

    // Seleccionar elementos del DOM
    let inventarioDom = document.querySelector(".main__inventario");
    let cajas = document.querySelectorAll(".inventario__caja");
    let estanteriaDom = document.querySelectorAll(".almacen__estanteria");

    // Verificar que los elementos existen
    if (!inventarioDom) {
        console.error("No se encontró el elemento con la clase '.main__inventario'");
        return;
    }

    if (cajas.length === 0) {
        console.warn("No se encontraron elementos con la clase '.inventario__caja'");
    }

    if (estanteriaDom.length === 0) {
        console.warn("No se encontraron elementos con la clase '.almacen__estanteria'");
    }

    // Asignar un ID único a cada caja y asegurarse de que sean arrastrables
    cajas.forEach((caja, i) => {
        caja.setAttribute("id", "caja" + i);
        caja.setAttribute("draggable", "true"); // Asegurarse de que sea arrastrable

        caja.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("id", e.target.id);
        });
    });

    // Configurar cada estantería para aceptar elementos soltados
    estanteriaDom.forEach((estanteria) => {
        estanteria.addEventListener("dragover", function (e) {
            e.preventDefault();
            // Opcional: Añadir estilo visual cuando un elemento es arrastrado sobre la estantería
            this.style.boxShadow = "0px 0px 8px black inset";
        });

        estanteria.addEventListener("dragleave", function (e) {
            // Opcional: Remover el estilo visual cuando el elemento es arrastrado fuera
            this.style.boxShadow = "none";
        });

        estanteria.addEventListener("drop", function (e) {
            e.preventDefault();

            let cajaId = e.dataTransfer.getData("id");

            if (cajaId && cajaId !== "") {
                let caja = document.querySelector("#" + cajaId);
                if (!caja) {
                    console.error(`No se encontró el elemento con el ID '${cajaId}'`);
                    return;
                }

                // Verificar si la estantería ya tiene una caja
                if (this.children.length === 0) {
                    this.appendChild(caja);
                    this.style.boxShadow = "none";
                } else {
                    alert("Esta estantería está ocupada");
                }

                // Actualizar el estilo de todas las estanterías
                estanteriaDom.forEach(estanteria => {
                    if (estanteria.children.length === 0) {
                        estanteria.style.boxShadow = "0px 0px 8px black inset";
                    } else {
                        estanteria.style.boxShadow = "none"; // Opcional: Resetear estilo
                    }
                });

                // Verificar si todas las cajas han sido movidas al almacén
                let cajasRestantes = inventarioDom.querySelectorAll(".inventario__caja");
                if (cajasRestantes.length === 0) {
                    alert("Todas las cajas han sido guardadas");
                }
            }
        });
    });

});
