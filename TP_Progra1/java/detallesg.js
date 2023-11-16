let locsearch = location.search
let data = new URLSearchParams(locsearch);
let ID = data.get("id")
let api_key = "f534b4f9cb5b663c994b7b752531f5a9"

let endpoint = `https://api.themoviedb.org/3/tv/${ID}?api_key=${api_key}`;

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })