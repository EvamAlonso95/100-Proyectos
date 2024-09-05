window.addEventListener("DOMContentLoaded", (event) => {
    let contendedor = document.querySelector('.content')

    let now = new Date();

    let actualDate = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();

    let actualTime = now.getHours() + ":" + now.getMinutes();

    contendedor.innerHTML += `
        <p class="date">${actualDate}</p>
        <p class="time">${actualTime}</p>
`



})