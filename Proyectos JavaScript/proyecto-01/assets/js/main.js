let username = 'Eva',
    surname = 'Alonso',
    age = 28,
    country = 'España',
    knowledge = ['dibujar','escribir','programar'];

console.log(username,surname,age,country,knowledge);

age = 25;
knowledge.push('bailar');
console.log(username,surname,age,country,knowledge);

// Extra - string templates
console.log(
    `Hola soy ${username} ${surname} tengo ${age} años, vivo en ${country} y tengo los siguientes knowledge: ${knowledge[0]},${knowledge[1]},${knowledge[2]},${knowledge[3]},${knowledge[4]}. `
)