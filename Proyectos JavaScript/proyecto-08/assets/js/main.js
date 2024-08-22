window.addEventListener("DOMContentLoaded", event => {

    let num = 0;
    let result = false;

    do {
        num = parseInt(prompt("Introduce un número para ver si es par o inpar", 0));
    } while (num <= 0);

    result = isPair(num);

    let resultBox = document.querySelector("#result");


    if (result == true) {
        let success = "El numero " + num + " es par"
        console.log(success);
        alert(success);
        resultBox.innerHTML += `
        <p> El número ${num} es par</p>
        `
    } else {
        let failed = "El numero " + num + " es impar"
        console.log(failed);
        alert(failed);
        resultBox.innerHTML += `
        <p> El número ${num} es impar</p>
        `
    }
})
function isPair(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}