let marca = 'Renault',
    velocidad = 200,
    stock = true,
    modelos = ['clio','fluence','megane','captur'];

let frase = `Tenemos coches de la marca ${marca},
van a una velocidad de ${velocidad}km/h.

Dispones de estos modelos en stock ${stock}: <br>
`;

modelos.forEach(modelo =>{
    frase += ` - ${modelo} <br/>`;
});

let caja = document.querySelector('#content');

caja.innerHTML = frase;