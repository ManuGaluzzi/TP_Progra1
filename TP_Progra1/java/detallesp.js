let locsearch = location.search;
let data = new URLSearchParams(locsearch);
let ID = data.get("id");
let api_key = "f534b4f9cb5b663c994b7b752531f5a9";

if (ID) { // Check if ID is not null or undefined before making the API request
    fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=${api_key}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(movieData) {
            console.log(movieData);
        })
        .catch(function(err) {
            console.log(err);
        });
} else {
    console.log("ID is not present in the query string");
}