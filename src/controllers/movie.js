// 1. Parašyt endpointą kuris leistu atspauzdint concolėje filmo rekomendacijos objektą, filmo rekomendacija susideda iš: id, title, raiting, description, imdbLink. Filmo rekomendacija turi būt atsiųsta per body;
let movieRecommendations = [];

const CREATE_MOVIE_RECOMMENDATION = (req, res) => {

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
    movieRecommendations.push(movieRecommendation);
    
        console.log("Movie Recommendation", movieRecommendation);
    
        return res.status(200).json({status: "Movie recommendation is created"})
    };


// 3. Parašyt endpointą kuris parsiųstu visas išsaugotas rekomendacijas;
const GET_ALL_MOVIE_RECOMMENDATIONS = (req, res) => {

    // 7. Patobulint savo endpointą bei bei jei masyvas yra tuščias - gražinti 200 statusa su žinute "Data not exist".
        if (movieRecommendations.length === 0) {
            return res.status(200).json({status: "Data not exist"})
        }
        return res.json({movieRecommendations: movieRecommendations})
    };
    
    // if (!tasks.length) {
    //     return res.json({ status: "task array is empty" });
    //   }

// 4. Parašyt endpointą kuris gražintu visas rekomendacijas išrikiuotas mažėjimo tvarka pagal reitingą;
const GET_SORTED_BY_RATING_MOVIE_RECOMMENDATIONS = (req, res) => {
    movieRecommendations.sort((a, b) => b.rating - a.rating);
    return res.json({movieRecommendations: movieRecommendations})
};

// 5. Parašyt endpointą kuris ištrintų visas rekomendacijas;
const DELETE_ALL_MOVIE_RECOMMENDATIONS = (req, res) => {
    movieRecommendations.length = 0;
    return res.status(200).json({status: "All movie recommendations are deleted"})
};

// 1. Prie buvusios  užduoties reikia pridėti getById endpointą;
const GET_MOVIE_RECOMMENDATION_BY_ID = (req, res) => {
    const movieRecommendationById = movieRecommendations.find((m) => m.id === Number(req.params.movieRecommendationId));

// Parašytas endpointas turi gražint 404 statusą jei filmo su tokiu id neegzistuoja;
    if (!movieRecommendationById) {
        return res.status(404).json({message: "There are no movie recommendation with such ID"})
    }

    return res.json({movieRecommendation: movieRecommendationById})
};

const GET_10_MOVIE_RECOMMENDATIONS = (req, res) => {
    if (movieRecommendations.length === 0) {
        return res.status(200).json({status: "Data not exist"});
    }
    const limitedRecommendations = movieRecommendations.slice(0,10);
    return res.json({movieRecommendations: limitedRecommendations});
}

const UPDATE_MOVIE_RECOMMENDATION_BY_ID = (req, res) => {
    const doesMovieRecommendationExist = movieRecommendations.some((movieRecommendation) => movieRecommendation.id === req.params.id);

    if (!doesMovieRecommendationExist) {
        return res.status(404).json({message: `Movie recommendation with id ${req.params.id} does not exist`})
    }
    const index = movieRecommendations.findIndex((movieRecommendation) => movieRecommendation.id === req.params.id);

        movieRecommendations[index] = {...movieRecommendations[index], ...req.body};

        return res.json({updatedMovieRecommendation: movieRecommendations[index]})
    }


export {CREATE_MOVIE_RECOMMENDATION, GET_ALL_MOVIE_RECOMMENDATIONS, GET_SORTED_BY_RATING_MOVIE_RECOMMENDATIONS, DELETE_ALL_MOVIE_RECOMMENDATIONS, GET_MOVIE_RECOMMENDATION_BY_ID, GET_10_MOVIE_RECOMMENDATIONS, UPDATE_MOVIE_RECOMMENDATION_BY_ID}

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

    
