let urlgen = "https://api.themoviedb.org/3/genre/tv/list?api_key=f534b4f9cb5b663c994b7b752531f5a9";

fetch (urlgen)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    for (let i = 0; i < data.genres.length; i++) {
        console.log(data.genres[i].name);
        const cartelerasElements = document.querySelectorAll('.titulo_genero');
        cartelerasElements.forEach((element, index) => {
            element.innerHTML = `<h4>${data.genres[i].name}</h4>`;
        i += 1;          
        })}});