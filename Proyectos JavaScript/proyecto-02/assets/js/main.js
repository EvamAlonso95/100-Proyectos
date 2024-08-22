let marca = 'Renault',
    velocidad = 200,
    stock = 250,
    modelos = ['clio','fluence','megane','captur'];

    document.write("La marca del coche es: ", marca, ". Alcanza una velocidad de ", velocidad," km por hora. Y tenemos un stock de ", stock, " modelos:");
    


for(let i = 0; i<modelos.length;i++){
    document.write(" ",modelos[i])
}