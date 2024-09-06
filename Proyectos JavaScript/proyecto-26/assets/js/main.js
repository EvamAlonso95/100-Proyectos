window.addEventListener("DOMContentLoaded", () => {
    let greyStar = document.querySelector(".main__star--gray");
    let yellowStar = document.querySelector(".main__star--yellow");

    greyStar.addEventListener("click", () => {
        console.log("Hola");
        yellowStar.classList.add("visible");
        greyStar.classList.add("yellow-color");
    });

    yellowStar.addEventListener("click", () => {
        console.log("Adios");
        yellowStar.classList.remove("visible");
        greyStar.classList.remove("yellow-color");
    });
})