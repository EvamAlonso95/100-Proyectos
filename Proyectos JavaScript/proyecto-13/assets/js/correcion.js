let concesionario = [
    {
        marca: "Toyota",
        modelos: [["Toyota Corolla", "Toyota Camry", "Toyota RAV4"]]
    },
    {
        marca: "BMW",
        modelos: [["BMW Serie 3", "BMW X5", "BMW i8"]]
    },
    {
        marca: "Ford",
        modelos: ["Ford Mustang", "Ford F-150", "Ford Explorer"]
    }
];

let contenedor = document.querySelector('#content');


function mostrar(datos) {
    datos.forEach(coches => {
        contenedor.innerHTML += `
        <h1> Marca: ${coches.marca}</h1>`

        contenedor.innerHTML += `<ul>`;
        coches.modelos.forEach(modelo => {
            contenedor.innerHTML += `<li>${modelo}</li>`
        })
        contenedor.innerHTML += `</ul>`

    });
}

mostrar(concesionario);