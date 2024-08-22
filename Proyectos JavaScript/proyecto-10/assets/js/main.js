window.addEventListener("DOMContentLoaded", event => {
    let word;

    word = prompt("Introduce una palabra").toString();

    let yourWord = toUpperCaseandLenthg(word);

    let contenedor = document.querySelector("#content");

    contenedor.innerHTML += `<p> ${yourWord} </p>
    `
})

function toUpperCaseandLenthg(x) {
    let wordLenthg = x.length;
    let wordUpperCase = x.toUpperCase();
    let phrase = "La palabra que has escrito es " + wordUpperCase + " y tiene una longuitud de " + wordLenthg + " caracteres"
    return phrase
}