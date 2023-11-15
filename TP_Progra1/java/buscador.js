
let USP = new URLSearchParams(qs);

let locsearch = location.search;


let buscar = USP.get("busqueda");


let API_KEY = "f534b4f9cb5b663c994b7b752531f5a9";


fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${buscar}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
        console.log(data.results);

  
        let movies = data.results || [];

        let section = document.querySelector(".padre");
        let addedMovie = document.querySelector(".carteleras");
        let allMoviesHTML = "";

        
        if (movies.length === 0) {
            document.querySelector(".Texto_buscador").innerText = "No hay resultados para su búsqueda";
        } else {
            document.querySelector(".Texto_buscador").innerText = "Resultados de búsqueda para: " + buscar;
        }

        
        for (let i = 0; i < movies.length; i++) {
            allMoviesHTML += `<article class="carteleras">
                            <a href="./detalles_movies.html?idPelicula=${movies[i].id}">
                            <img class="foto" src="https://image.tmdb.org/t/p/original${movies[i].poster_path}"></a>
                            <h2>Película: <a href="./detalles_movies.html?idPelicula=${movies[i].id}">${movies[i].title}</a></h2>
                        </article>`;
        }

        section.innerHTML = allMoviesHTML;
        addedMovie.innerText = buscar;
    });







  