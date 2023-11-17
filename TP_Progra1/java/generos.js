let urlgen = "https://api.themoviedb.org/3/genre/tv/list?api_key=f534b4f9cb5b663c994b7b752531f5a9";

fetch (urlgen)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let  = document.querySelector(".carteleraPadre1")
    let pelis = '';
    for (let i =0; i < 5; i++){
            pelis += `<article>
                        <p><a href="../HTML/detalles_movies.html?id=${data.results[i].id}"target="_blank">${data.results[i].title} </a></p>
                        <a href="../HTML/detalles_movies.html"><img src=" https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>
                        <p>${data.results[i].release_date}</p>
                
                
            </article>`
        }
        pelisvist.innerHTML=pelis
       
    })
    .catch(function(error){
        console.log(error);
    })




