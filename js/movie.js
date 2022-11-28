
let qs = location.search
let qsobj = new URLSearchParams(qs);
let idpelicula = qsobj.get('id')

let urlUserdetallepelis = `https://api.themoviedb.org/3/movie/${idpelicula}?api_key=cf7707fd77a1290e2423ba7e39e253a8&language=en-US`

let tituloDePelicula = document.querySelector(".alert-primary");
let descripcion = document.querySelector(".description");
let fechaEstreno= document.querySelector("#release-date");
let duración = document.querySelector("#duracion");
let puntuación= document.querySelector("#votes");
let imagen = document.querySelector(".col-md-6");

fetch(urlUserdetallepelis)
.then(function (response) {
    return response.json();

})
.then(function (data) {
    console.log(data);

    imagen.src=`https://image.tmdb.org/t/p/w500${data.poster_path}`;
    tituloDePelicula.innerText = `${data.title}`;
    descripcion.innerText = `${data.overview}`;
    fechaEstreno.innerText = `Se estrenó el ${data.release_date}`;
    puntuación.innerText = `La puntuación es ${data.vote_average}/10`;
    duracion.innerText = `Duracion: ${data.runtime} min`;
    return data
})
.catch(function (error) {
    return error
})

