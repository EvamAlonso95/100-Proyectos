//Alertas
//alert("Hola soy Eva");

//Variables
let nombre = 'Eva';
let altura = 187;


//Constante

const apellidos = 'Alonso'

//Concatenación
let concatenacion = nombre + " " + altura


//Mostrar por consola
console.log(nombre);
console.log(concatenacion);

//Selecionar elementos del DOM
let datos = document.querySelector('#datos');
// Template string comillas invertidas
datos.innerHTML = `
<h1>Soy la caja de datos</h1>
<p>Mi nombre es: ${nombre} ${apellidos}</p>
`;

//Condiciones
altura = 180;
if (altura >= 185) {
    datos.innerHTML += '<h1>Eres una persona alta</h1>';
} else {
    datos.innerHTML += '<h1>Eres una persona bajita</h1>';
}

//Bucles
for (let year = 2000; year <= 2023; year++) {
    // Template string comillas invertidas
    datos.innerHTML += `<h2>Estamos en el año: ${year} </h2>`;
}

//Array

const nombres = ['Victor', 'Francisco', 'Pepe'];
let divNombres = document.querySelector('#nombres');

// divNombres.innerHTML = nombres[0];
divNombres.innerHTML = "<h1>Listado de nombres</h1><ul>"

nombres.forEach(nombre => {
    divNombres.innerHTML += "<li>" + nombre + "</li>"
});

// Otra manera es:
// for(let nombre of nombres){  divNombres.innerHTML += "<li>" + nombre + "</li>"}

divNombres.innerHTML += "</ul>"


//Funciones
const misInformacion = (nombre, apellidos) => {
    let misDatos = `
        <h1>Soy la caja de datos</h1>
        <p>Mi nombre es: ${nombre} ${apellidos}</p>
    `;
    return misDatos;
}

console.log(misInformacion("Antonio", "Alonso"));

const imprimir = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML = misInformacion("Pepe", "Alonso");
}

imprimir();
