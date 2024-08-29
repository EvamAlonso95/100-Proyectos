window.addEventListener("DOMContentLoaded", () => {
    let articlesContainer = document.querySelector('.container__cards'); // Selecciona el contenedor correcto
    let titleElement = document.getElementById('title');
    let subtitleElement = document.getElementById('subtitle');
    let textElement = document.getElementById('textarea');
    let form = document.querySelector('.form');

    let new_articles = JSON.parse(localStorage.getItem("articles")) || []; // Carga artículos desde localStorage si existen

    function createArticle() {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Previene que el formulario se envíe y la página se recargue

            let title = titleElement.value;
            let subtitle = subtitleElement.value;
            let text = textElement.value;

            if (title && subtitle && text) {
                let article = {
                    title: title,
                    subtitle: subtitle,
                    text: text
                };

                new_articles.push(article);
                localStorage.setItem("articles", JSON.stringify(new_articles));

                showArticles(); // Muestra el nuevo artículo inmediatamente

                // Limpia los campos del formulario
                form.reset();
            } else {
                alert('Faltan datos por rellenar en el formulario');
            }
        });
    }

    // Definimos la plantilla del artículo
    function layoutArticle(article) {
        let layout = `
            <article class="layout__card">
                <div class="card__header">
                    <p class="header__author">${article.subtitle}</p>
                </div>
                <div class="card__content">
                    <h2 class="content__title">${article.title}</h2>
                    <p class="content__description">${article.text}</p>
                </div>
                <button class="content__btn" type="button">Ver más</button>
            </article>
        `;
        return layout;
    }

    function showArticles() {
        articlesContainer.innerHTML = ""; // Limpia el contenedor antes de mostrar los artículos
        new_articles = JSON.parse(localStorage.getItem("articles")) || []; // Vuelve a cargar los artículos

        if (new_articles.length > 0) {
            new_articles.forEach(article => {
                articlesContainer.innerHTML += layoutArticle(article);
            });
        }
    }

    createArticle();
    showArticles();
});
