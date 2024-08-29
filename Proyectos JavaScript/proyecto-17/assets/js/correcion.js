window.addEventListener("DOMContentLoaded", event => {
    let card = document.querySelector(".layout__card");
    let header = document.querySelector(".card__header");
    let description = document.querySelector(".content__description");
    let btn = document.querySelector(".content__btn");

    btn.addEventListener("click", () => {
        card.style.boxShadow = "0px 0px 14px black";
        header.style.background = "#1B62ca";
        description.style.opacity = 0.8;
        btn.sytle.background = "#fff";
    })
})