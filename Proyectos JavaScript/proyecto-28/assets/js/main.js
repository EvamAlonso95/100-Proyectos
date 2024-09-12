window.addEventListener("load", () => {
    let number = document.querySelector(".load__number"),
        btn = document.querySelector(".load__btn"),
        complete = document.querySelector(".load__complete"),
        background = document.querySelector(".main__background");

    //Variables contadores
    let percent = 1,
        blur = 30;

    btn.addEventListener("click", (event) => {
        btn.style.display = "none";

        let inter = setInterval(() => {
            percent++;
            blur -= 30 / 100;

            if (percent > 100) {
                clearInterval(inter);
                complete.style.display = "block"
            } else {
                number.innerHTML = percent + "%";
                background.style.filter = `blur(${blur}px)`;
            }
        }, 20);

    })
})