
function askAge() {
    swal("¿En qué año naciste?", {
        content: "input",
    })
        .then((value) => {
            let yearOfBirth = parseInt(value); // Convertir a número

            if (isNaN(yearOfBirth) || yearOfBirth > new Date().getFullYear() || yearOfBirth < 1910) {
                swal("No ingresaste un año válido o el año es demasiado antiguo.");
                askAge(); // Vuelve a preguntar
            } else {
                let currentYear = new Date().getFullYear();
                let yourAge = currentYear - yearOfBirth;
                swal(`Tienes: ${yourAge} años.`);
            }
        });
}

askAge();
