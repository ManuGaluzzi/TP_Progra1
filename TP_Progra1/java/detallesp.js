let querystring = location.search;
let queryresult = new URLSearchParams(querystring);
let ID = queryresult.get("id");
let apiKey = "f534b4f9cb5b663c994b7b752531f5a9";

fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=${apiKey}`)
.then(function(response){

    return response.json()
})
    .then(function(data){
        console.log(data)
        let nomPelicula = document.querySelector(".carteleras");
        nomPelicula.innerHTML += `  <h2>${data.title}</h2>
        <img src="${data.poster_path}" alt=""  class="fotos_detalles">
    
        <ul class="detalle">
            <li>
            Calificación:${data.vote_average}
            </li>
            <li>
            Estreno:${data.release_date}
            </li>
            <li>
                <a href="./detalles_genero.html">Genero:</a>
            </li>
            <li>
            <p>Sinopsis:${data.overview}</p>
            </li>
    
    
    
        </ul>`
    })
    .catch(function(err){
        console.log(err)
    })