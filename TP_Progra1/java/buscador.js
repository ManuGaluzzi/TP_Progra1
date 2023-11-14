let busqueda = data.get('title')

fetch(`https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${busqueda}`)
  