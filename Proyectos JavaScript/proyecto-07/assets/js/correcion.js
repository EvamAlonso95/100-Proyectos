const actualYear = new Date().getFullYear();

let year = 1990,
    result = 0;

do {
    year = parseInt(prompt("Año de nacimiento:", year));

} while (year < 1910 || year > actualYear);

result = actualYear - year;

alert("Tienes " + result + " años");
console.log(result);