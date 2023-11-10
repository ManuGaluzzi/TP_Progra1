let API_KEY = "f534b4f9cb5b663c994b7b752531f5a9";
let string = location.search
let data = new URLSearchParams(string);
let ID = 2;

let urldelt = `https://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}`
fetch (urldelt)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})


