let result = 0;

function sumAll(...numbers) {

    let resultBox = document.querySelector("#result");
    let descriptionBox = document.querySelector("#numbers");

    descriptionBox.innerHTML = "Los numeros que se han utilizado para el resultado son estos: "

    for (let i = 0; i < numbers.length; i++) {
        // result = numbers[i] + result;
        result += numbers[i];
        descriptionBox.innerHTML += numbers[i];

        if (i !== numbers.length - 1) descriptionBox.innerHTML += ", ";
    }

    resultBox.innerHTML += "El resultado es " + result;




}

sumAll(3, 4, 5);