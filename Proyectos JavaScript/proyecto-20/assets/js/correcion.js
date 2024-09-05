window.addEventListener("DOMContentLoaded", (event) => {

    let dateDom = document.querySelector(".date");
    let hourDom = document.querySelector(".time");

    let myDate = () => {
        let date = new Date();
        let day = date.getDay();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();

        if (day < 10) day = `0${day}`;
        if (month < 10) month = `0${month}`;
        if (hour < 10) hour = `0${hour}`;
        if (minutes < 10) minutes = `0${minutes}`;



        dateDom.innerHTML = `${day} /${month}/${year} `;
        hourDom.innerHTML = `${hour} : ${minutes} `
    };


    setInterval(() => {
        myDate();

    }, 1000)

})