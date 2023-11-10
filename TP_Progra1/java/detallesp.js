let string = location.search
let data = new URLSearchParams(string);
let ID = data.get("id_pelicula");



let urldet = `https://api.themoviedb.org/3/movie/${ID}?api_key=${f534b4f9cb5b663c994b7b752531f5a9}`
fetch (urldet)
.then(function(response){
    return response.json()})