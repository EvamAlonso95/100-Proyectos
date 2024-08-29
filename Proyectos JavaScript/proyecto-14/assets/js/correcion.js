let salary = parseInt(prompt('Introduce tu salario'));

let salaries = [1200, 450, 2010, 675, 2300, 760, 950, 1500, 570, 1010, 800];

function findYourSalary(salarios, miSueldo) {
    // Filtramos los salarios que son mayores o iguales que tu salario
    let busqueda = salarios.filter(salario => salario >= miSueldo);

    // Ordenamos los salarios de menor a mayor
    let ordenar = busqueda.sort((a, b) => a - b);

    // Mostramos los salarios
    console.log('Los salarios que hay por encima del tuyo o son iguales son: ');

    for (let i in ordenar) console.log(ordenar[i]);
}

// Aquí corregimos el orden de los argumentos
findYourSalary(salaries, salary);
