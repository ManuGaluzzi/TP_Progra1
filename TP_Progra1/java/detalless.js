let querystring = location.search;
let queryresult = new URLSearchParams(querystring);
let ID = queryresult.get("id");
let apiKey = "f534b4f9cb5b663c994b7b752531f5a9";

fetch(`https://api.themoviedb.org/3/tv/${ID}?api_key=${apiKey}`)
.then(function(response){

    return response.json()
})
    .then(function(data){
        console.log(data)
        let nomSerie = document.querySelector(".detalle");
        nomSerie.innerHTML += `  <h2>${data.name}</h2>
        <img src="${data.poster_path}" alt=""  class="fotos_detalles">
    
        <ul class="detalle">
            <li>
            Calificación:${data.vote_average}
            </li>
            <li>
            Estreno:${data.first_air_date}
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