let endpoint = 

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })