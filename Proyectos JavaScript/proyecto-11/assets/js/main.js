window.addEventListener("DOMContentLoaded", event => {

    let phrase = prompt("Introduce una frase:").toString();
    let phraseArray = phrase.split(" ");

    let remplaceWord = prompt("Tu frase es: '" + phrase + "' ¿Qué palabra quieres cambiar?");
    let newWord = prompt("¿Por qué palabra lo quieres cambiar?:");

    let updatedPhrase = remplaceWords(remplaceWord, newWord, phraseArray);

    alert("Tu frase ahora es: " + updatedPhrase);
});

function remplaceWords(remplaceWord, newWord, phraseArray) {
    for (let i = 0; i < phraseArray.length; i++) {
        if (remplaceWord === phraseArray[i]) {
            phraseArray[i] = newWord;
        } else {
            alert("Esa palabra no existe");
        }
    }

    // Recombina el array en una nueva frase
    return phraseArray.join(" ");
}
