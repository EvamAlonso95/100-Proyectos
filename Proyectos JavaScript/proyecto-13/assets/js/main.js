const cars = [
    ["Toyota", ["Toyota Corolla", "Toyota Camry", "Toyota RAV4"]],
    ["BMW", ["BMW Serie 3", "BMW X5", "BMW i8"]],
    ["Ford", ["Ford Mustang", "Ford F-150", "Ford Explorer"]]
];

let contenedor = document.querySelector('#content'),
    marca = '',
    modelo = '';

function showCars(array) {

    for (let i = 0; i < array.length; i++) {
        marca = array[i][0]; //Acedemos a la marca
        contenedor.innerHTML += `
        <h1> Marca: ${marca}</h1>`

        for (let j = 0; j < cars[i][1].length; j++) {
            modelo = cars[i][1][j]; // Accede a los modelos
            contenedor.innerHTML += `
            <ul>
                <li>
                    ${modelo}
                </li>
            </ul>`

        }
    }


}

showCars(cars);
