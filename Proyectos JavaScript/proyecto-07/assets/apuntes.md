El código tiene la función de pedir al usuario el año en el que nació, validar que la entrada sea válida y calcular su edad. Si el usuario ingresa un año inválido, el programa vuelve a pedir el año.

### Código completo:

```javascript
function askAge() {
    swal("¿En qué año naciste?", {
        content: "input",
    })
        .then((value) => {
            let yearOfBirth = parseInt(value); // Convertir a número

            if (isNaN(yearOfBirth) || yearOfBirth > new Date().getFullYear() || yearOfBirth < 1910) {
                swal("No ingresaste un año válido o el año es demasiado antiguo.");
                askAge(); // Vuelve a preguntar
            } else {
                let currentYear = new Date().getFullYear();
                let yourAge = currentYear - yearOfBirth;
                swal(`Tienes: ${yourAge} años.`);
            }
        });
}

askAge();
```

### 1. **`function askAge()`**

Esta es una función que contiene todo el código encargado de realizar la operación. La función **`askAge`** se encarga de mostrar un cuadro de diálogo pidiendo al usuario que ingrese el año de su nacimiento, procesar esa información, validar si es correcta, y luego calcular la edad del usuario. Si el valor es inválido, la función vuelve a ejecutarse.

### 2. **`swal("¿En qué año naciste?", { content: "input" })`**

Esta línea de código utiliza **`swal`**, que es parte de la librería `SweetAlert`. Esto muestra un cuadro de diálogo en la pantalla con la pregunta "¿En qué año naciste?" y un campo de entrada de texto. El usuario puede escribir en ese campo el año en que nació.

- `"¿En qué año naciste?"`: El mensaje que se mostrará al usuario.
- `{ content: "input" }`: Esta opción le dice a `SweetAlert` que debe mostrar un cuadro de entrada donde el usuario puede escribir su respuesta.

### 3. **`.then((value) => { ... })`**

El método **`.then()`** es una promesa en JavaScript. Espera a que el usuario ingrese un valor y presione "Aceptar". Una vez que eso ocurre, la función dentro de `.then()` se ejecuta, y el valor ingresado por el usuario se pasa como parámetro **`value`**.

### 4. **`let yearOfBirth = parseInt(value);`**

Aquí, se convierte el valor que el usuario ingresó (que viene como texto) en un número entero usando **`parseInt()`**. El resultado se guarda en la variable **`yearOfBirth`**.

### 5. **Validación de la entrada**

```javascript
if (isNaN(yearOfBirth) || yearOfBirth > new Date().getFullYear() || yearOfBirth < 1910) {
    swal("No ingresaste un año válido o el año es demasiado antiguo.");
    askAge(); // Vuelve a preguntar
}
```

- **`isNaN(yearOfBirth)`**: Este método comprueba si la entrada no es un número (NaN significa "Not a Number").
- **`yearOfBirth > new Date().getFullYear()`**: Esto verifica si el año ingresado es mayor que el año actual (lo cual no tiene sentido porque no puedes haber nacido en el futuro).
- **`yearOfBirth < 1910`**: Aquí se verifica si el año es menor que 1910. Esto se hizo para evitar que alguien ingrese un año irrealmente antiguo.

Si cualquiera de estas condiciones es cierta (es decir, el año no es válido), se muestra un nuevo mensaje de alerta que dice "No ingresaste un año válido o el año es demasiado antiguo". Luego, la función **`askAge()`** se vuelve a ejecutar, volviendo a mostrar la pregunta.

### 6. **`else { ... }`**

Si la entrada es válida (es un número, está entre 1910 y el año actual), entonces se calcula la edad del usuario y se muestra un mensaje con su edad.

```javascript
let currentYear = new Date().getFullYear();
let yourAge = currentYear - yearOfBirth;
swal(`Tienes: ${yourAge} años.`);
```

- **`let currentYear = new Date().getFullYear();`**: Esto obtiene el año actual del sistema.
- **`let yourAge = currentYear - yearOfBirth;`**: Se calcula la edad restando el año de nacimiento del año actual.
- **`swal(`Tienes: ${yourAge} años.`);`**: Se muestra una alerta con la edad calculada del usuario.

### 7. **`askAge();`**

Finalmente, la función **`askAge()`** se ejecuta cuando se carga el código, activando el proceso de pedir el año al usuario.

---

### Resumen:
- Primero, el programa le pide al usuario que ingrese el año en que nació.
- Después, convierte esa entrada a un número y verifica si es válida.
- Si el valor es inválido (no es un número, es mayor que el año actual, o es demasiado antiguo), el programa vuelve a preguntar.
- Si el valor es válido, calcula la edad del usuario y muestra una alerta con la edad.

Este código utiliza conceptos fundamentales de programación como funciones, condicionales y promesas. La validación de datos también es crucial para asegurarse de que el programa maneje correctamente los valores inesperados o incorrectos.