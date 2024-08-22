// Almacenamos en una variable el "contenedor" donde vamos a introducir las tablas de multiplicar
// Guardar en una variable el cotentedor de html para luego trabajar con él
let tableContainer = document.querySelector('.tables');

let result = 0;

// Bucle del 1 al 10 -> Sacamos el número de la tabla
for (let i = 1; i <= 10; i++) {

    // Plantilla para mostrar encabezado y crear la caja para las operaciones

    // innerHTML -> método que obtiene el contenido HTML interno de cualquier elemento HTML como una cadena HTML  <--! atributos data-id -> pasamos datos silenciosos en nuestros elementos -->
    tableContainer.innerHTML += `
    <div class="tables__item">
        <h2 class="table__item">
            Tabla del ${i}
        </h2>
        
        <ul class="tables__list" data-id="${i}">
        </ul>
    </div>
    `;

    // Después de crear las tablas, vamos a llenar las listas correspondientes   
    // Bucle para sacar números para las operaciones de la tabla
    for (let j = 0; j <= 10; j++) {
        // calcular resultado de la operación
        result = i * j;

        // Guardamos en una variable el contenedor donde queremos mostrar el resultado
        // Seleccionar la lista correspondiente usando su `data-id`
        let list = document.querySelector(`.tables__list[data-id="${i}"]`);

        // Añadir el resultado a la lista correspondiente
        list.innerHTML += `
                <li class="list__item">${i} x ${j} = ${result}</li>
            `;
    }

}

