window.addEventListener("DOMContentLoaded", (event) => {

    // Selecionamos todos los elementos que necesitamos
    let chronomin = document.querySelector('.crhono__min'),
        chronosec = document.querySelector('.crhono__sec'),
        btnStar = document.querySelector('.btn__start'),
        btnStop = document.querySelector('.btn__stop');

    //Variables cuenta min y sec

    let minutes = 0,
        seconds = 0,
        time = null;

    //Función para iniciar cronómetro
    let star = () => {
        if (!time) {

            time = setInterval(() => {

                seconds++;

                if (seconds == 60) {
                    minutes++;
                    seconds = 0;
                }

                if (minutes >= 60) {
                    alert('Has excedido el tiempo límite de minutos');
                    clearInterval(time);
                }

                if (seconds < 10) {
                    chronosec.innerHTML = "0" + seconds;
                } else {
                    chronosec.innerHTML = seconds;
                }
                if (minutes < 10) {
                    chronomin.innerHTML = "0" + minutes;
                } else {

                    chronomin.innerHTML = minutes;
                }

            }, 1000);
        }
    };

    // Botón iniciar

    btnStar.addEventListener("click", () => {
        star();
    });

    btnStop.addEventListener("click", () => {
        if (time) {
            clearInterval(time);
            time = null;
        }
    })


});