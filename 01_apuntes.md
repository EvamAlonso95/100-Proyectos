# Introducción
## ¿Qué aprenderás en el curso?
- HTML, CSS y JS
- Maquetación web (HTML y CSS)
- Programación front-end (JS)
- +100 proyectos y retos para practicar
- Preparación pruebas técinas de desarrollo web

## ¿Qué es BEM?
Es una metodología para trabajar con CSS, es decir, BEM son las siglas de Bloque Elemento Modificador.
Es una forma de escribir los selectiores de CSS de una forma rápida y no repetitiva. Simplemente es una forma de NOMBRAR las clases.

Uno de los principios de BEM es NO USAR ID, siempre CLASES.

- Class = aplicar estilos
- Id = aplicar funcionalidad (javascript)

1. No usar ID
2. No usar etiquetas
3. Que todo sea un key selector(selecionar justo el elemento al cual se le daran estilos)

La sintaxis sería del siguiente modo:

    .bloque__elemento--modificador
___
    DESGLOSADO    
    .bloque: seleciona un bloque que contiene varios elementos
    .bloque__elemento: seleciona x elementos del bloque
    .bloque__elemento--modificador: para aplicar a x elemento una característica concreta

## Medidas CSS
- PX
- REM
- EM

Los *pixeles* son medidas absolutas que nunca van a cambiar dependiendo del tamaño de la pantalla.

Las medidas *rem* y *em* en cambio, son medidas relativas, es decir, que se adaptan según el tamaño de la pantalla y son medidas más recomendadas de usar.

- Las medidas *em* dependen del font-size del elemento padre
- Las medidas *rem* dependen del font-size del elemento raiz, es decir, de la etiqueta HTML
- Las medidas *vh* dependen de la altura de la ventana del navegador.
- Las  medidas *vw* dependen de la anchura de la ventana del navegador.
- Las medidas *%* dependen del tamaño relatico del elemento padre.

    Fuente: [Página web Victor Robles - Ud de medida CSS](https://victorroblesweb.es/2022/09/08/px-vs-rem-vs-em-unidades-de-medida-en-css/)