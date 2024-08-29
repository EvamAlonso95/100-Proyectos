let salary = parseInt(prompt('Introduce tu salario'));

let salaries = [450, 570, 675, 760, 800, 950, 1010, 1200, 1500, 2010, 2300];

function findYourSalary(number, array) {
    let result = [];
    let phrase = '';

    for (let i = 0; i < array.length; i++) {
        if (number <= array[i])
            result.push(array[i]);
        phrase = 'Los salarios que hay por encima del tuyo o son iguales son: ' + result;

    }
    return console.log(phrase);
}

findYourSalary(salary, salaries);