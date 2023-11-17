let apikey = 'f534b4f9cb5b663c994b7b752531f5a9';

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`)
	.then(function(response){
	    return response.json();
})
    .then(function(data){
        console.log(data);
        let pelisvist = document.querySelector(".carteleraPadre1")
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}`)
	.then(function(response){
	    return response.json();
})
    .then(function(data){
        console.log(data);
        let pelisvist = document.querySelector(".carteleraPadre2")
        let pelis = '';
        for (let i =0; i < 5; i++){
            pelis+= `<article> 
            <p><a href="../HTML/detalles_series.html?id=${data.results[i].id}"target="_blank">${data.results[i].name}</a></p> 
            <a href="../HTML/detalles_series.html"><img src=" https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>
            <p>${data.results[i].first_air_date}</p>
             

             </article>`;
        }
        pelisvist.innerHTML=pelis
       
    })
    .catch(function(error){
        console.log(error);
    })



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`)
	.then(function(response){
	    return response.json();
})
    .then(function(data){
        console.log(data);
        let pelisvist = document.querySelector(".carteleraPadre3")
        let pelis = [];
        for (let i =0; i < 5; i++){
            pelis+= `<article>
             <p><a href="../HTML/detalles_movies.html?id=${data.results[i].id}"target="_blank">${data.results[i].title}</a></p> 

            <a href="../HTML/detalles_movies.html"> <img src=" https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>

            <p>${data.results[i].release_date}</p>
             </article>`;
        }
        pelisvist.innerHTML=pelis
       
    })
    .catch(function(error){
        console.log(error);
    })


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let urlfotos = "https://image.tmdb.org/t/p/w500/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg?api_key=f534b4f9cb5b663c994b7b752531f5a9";
fetch (urlfotos)
.then(function(response){
    return response.json();
})



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
let indice = document.querySelectorAll(".juan");
for (let i = 0; i < indice.length; i++) {
    indice[i].addEventListener("mouseover", function() {
        indice[i].style.color = "white";
     });
    }
    for (let i = 0; i < indice.length; i++) {
        indice[i].addEventListener("mouseout", function() {
            indice[i].style.color = "black";
        });
    }














