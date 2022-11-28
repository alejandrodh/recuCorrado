let urlUser = "https://api.themoviedb.org/3/trending/movie/week?api_key=e3f1ae8bae04c04c63af7b6996decd02"

let section_home = document.querySelector(".cards_movies")

fetch(urlUser)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    result = data.results
    console.log(result);
    let contenido = "";

    for (let i = 0; i < 4; i++) {
        contenido +=        `<article class="single-card-movie">
                            <img src="https://image.tmdb.org/t/p/w500/${result[i].poster_path}" class="card-img-top"
                            alt="...">
                            <div class="cardBody">
                            <h5 class="card-title">${result[i].title}</h5>
                            <p class="card-text">${result[i].overview}</p>
                            <a href="./movie.html?id=${result[i].id}" class="btn btn-primary">Ver más</a>
                             </div>
                            </article>`
    }
        section_home.innerHTML=contenido

        return data
    })
.catch(function (error) {
        return error;
    })

