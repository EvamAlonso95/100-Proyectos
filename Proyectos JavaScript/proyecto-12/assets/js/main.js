let animals = ['perro', 'gato', 'conejo', 'ratón', 'tiburón'];

let contenedor = document.querySelector('#content');

let animal;

function recorrerArray(array) {
    for (let i = 0; i < array.length; i++) {
        animal = array[i];
        contenedor.innerHTML += `
        <p> En este zoo hay: ${animal}
        </p>
        `
    }
}

recorrerArray(animals);