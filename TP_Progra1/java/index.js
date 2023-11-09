function fetchData() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=f534b4f9cb5b663c994b7b752531f5a9')
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
    console.log(data);

    for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i].title);
        const cartelerasElements = document.querySelectorAll('.carteleras1');
        cartelerasElements.forEach((element, index) => {
            element.innerHTML = `<h4>${data.results[i].title}</h4>
            <p>${data.results[i].release_date}</p>`;
        i += 1;          
    })}}

// Call the fetchData function when the page loads
window.onload = fetchData;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let urlseries = "https://api.themoviedb.org/3/tv/popular?api_key=f534b4f9cb5b663c994b7b752531f5a9";

fetch (urlseries)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i].name);
        const cartelerasElements = document.querySelectorAll('.carteleras2');
        cartelerasElements.forEach((element, index) => {
            element.innerHTML = `<h4>${data.results[i].name}</h4>
            <p>${data.results[i].first_air_date}</p>`;
        i += 1;          
        })}});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let urlvistas = "https://api.themoviedb.org/3/movie/upcoming?api_key=f534b4f9cb5b663c994b7b752531f5a9";

fetch (urlvistas)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    for (let i = 5; i < data.results.length; i++) {
        console.log(data.results[i].name);
        const cartelerasElements = document.querySelectorAll('.carteleras3');
        cartelerasElements.forEach((element, index) => {
            element.innerHTML = `<h4>${data.results[i].title}</h4>
            <p>${data.results[i].release_date}</p>`;
        i += 1;          
        })}});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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














