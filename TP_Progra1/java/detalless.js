let qs = location.search;
let qsObj = new URLSearchParams(qs);
let buscar = qsObj.get("id");
let apiKey = "f534b4f9cb5b663c994b7b752531f5a9";

fetch(`https://api.themoviedb.org/3/tv/${buscar}?api_key=${apiKey}`)
    
    .then(function(data){
        console.log(data)




    })
    .catch(function(err){
        console.log(err)
    })