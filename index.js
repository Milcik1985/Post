// 1. Parašyt endpointą kuris leistu atspauzdint concolėje filmo rekomendacijos objektą, filmo rekomendacija susideda iš: id, title, raiting, description, imdbLink. Filmo rekomendacija turi būt atsiųsta per body;
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json());
app.use(cors())

 const movieRecommendations = []

app.post("/createMovieRecommendation", function (req, res){

// 6. Patobulint add movie endpointą, kad jus neleistu pridėti filmo su jau egzistuojančiu id;
    const existingMovieId = movieRecommendations.find(movie => movie.id === req.body.id);
    if (existingMovieId) {
        return res.status(409).json({status: "Conflict", message: "Movie with this id already exists"})
    }
    const movieRecommendation = {
     "id": req.body.id, 
     "title": req.body.title, 
     "rating": req.body.rating,
     "description": req.body.description, 
     "imdbLink": req.body.imdbLink,
    };

    // kitas sprendimas:
    // const isTaskExists = tasks.some((t) => t.id === task.id);
 
    // if (isTaskExists) {
    //   return res.status(409).json({ message: "This task already exists" });
    // }

// 2. Pamodifikuot endpointą, sugebėtu išsaugoti filmo rekomendaciją į masyvo kintamąjį; // Reiks rekomandaciją supushint;
movieRecommendations.push(movieRecommendation)

    console.log("Movie Recommendation", movieRecommendation)

    return res.status(200).json({status: "Movie recommendation is created"})
})

// 3. Parašyt endpointą kuris parsiųstu visas išsaugotas rekomendacijas;
app.get("/getAllMovieRecommendations", (req, res) => {

// 7. Patobulint savo endpointą bei bei jei masyvas yra tuščias - gražinti 200 statusa su žinute "Data not exist".
    if (movieRecommendations.length === 0) {
        return res.status(200).json({status: "Data not exist"})
    }
    return res.json({movieRecommendations: movieRecommendations})
})

// if (!tasks.length) {
//     return res.json({ status: "task array is empty" });
//   }

// 4. Parašyt endpointą kuris gražintu visas rekomendacijas išrikiuotas mažėjimo tvarka pagal reitingą;

app.get("/getSortedByRatingMovieRecommendations", (req, res) => {
    movieRecommendations.sort((a, b) => b.rating - a.rating);
    return res.json({movieRecommendations: movieRecommendations})
})

// 5. Parašyt endpointą kuris ištrintų visas rekomendacijas;
app.delete("/deleteAllMovieRecommendations", (req, res) => {
    movieRecommendations.length = 0;
    return res.status(200).json({status: "All movie recommendations are deleted"})
})

// 1. Prie buvusios  užduoties reikia pridėti getById endpointą;
app.get("/getMovieRecommendationById/:movieRecommendationId", (req, res) => {
    const movieRecommendationById = movieRecommendations.find((m) => m.id === Number(req.params.movieRecommendationId));

    if (!movieRecommendationById) {
        return res.status(404).json({message: "There are no movie recommendation with such ID"})
    }

    return res.json({movieRecommendation: movieRecommendationById})
})

app.listen(3000, ()=> {
    console.log("App is running")
})

// 8. CAO;

/*
 {
     "id": 1, 
     "title": "Gladiator", 
     "rating": 8.5,
     "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery", 
     "imdbLink": "https://www.imdb.com/title/tt0172495/"
   }

 {
     "id": 2, 
     "title": "Titanic", 
     "rating": 7.9,
     "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.", 
     "imdbLink": "https://www.imdb.com/title/tt0120338/"
   }

 {
     "id": 3, 
     "title": "Gold", 
     "rating": 5.4,
     "description": "In the not too distant future, a drifter travelling through the desert discovers the largest gold nugget ever found. He must guard it from thieves amid harsh conditions and wild dogs while waiting for his partner to return.", 
     "imdbLink": "https://www.imdb.com/title/tt6020800/?ref_=fn_al_tt_2"
   }

 {
     "id": 4, 
     "title": "The Shawshank Redemption", 
     "rating": 9.3,
     "description": "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.", 
     "imdbLink": "https://www.imdb.com/title/tt0111161/?ref_=chttp_t_1"
   }

   */


// Parašytas endpointas turi gražint 404 statusą jei filmo su tokiu id neegzistuoja;
// 2. Per front-end sukurt formą kuri įdėtu filmą į servisą;

const btn = document.getElementsByClassName("btn")[0];
const movieRecommendationsContainer = document.getElementById("movie-recommendation-container");
const idInput = document.getElementById("id");
const titleInput = document.getElementById("title");
const ratingInput = document.getElementById("rating");
const descriptionInput = document.getElementById("description");
const linkInput = document.getElementById("imdb-link");

btn.addEventListener("click", () => {
    const id = document.createElement("div");
    ondblclick.innerHTML = `ID: ${idInput.value}`;
    const title = document.createElement("div");
    title.innerHTML = `Title: ${titleInput.value}`;
    const rating = document.createElement("div");
    rating.innerHTML = `Rating: ${ratingInput.value}`;
    const description = document.createElement("div");
    description.innerHTML = `Description: ${descriptionInput.value}`;
    const imdbLink = document.createElement("a");
    imdbLink.href = linkInput.value;
    imdbLink.innerHTML = `IMDB link`;
    imdbLink.target = "_blank";

    movieRecommendationsContainer.append(id);
    movieRecommendationsContainer.append(title);
    movieRecommendationsContainer.append(rating);
    movieRecommendationsContainer.append(description);
    movieRecommendationsContainer.append(imdbLink);
})
// 3. CAO 4
