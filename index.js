import { addMovieRecommendationButton } from './Front-End/script.js';

//  2. Per front-end sukurt formą kuri įdėtu filmą į servisą; 
    document.addEventListener('DOMContentLoaded', () => {
     addMovieRecommendationButton()
 }); 

const express = require('express');
const cors = require('cors');
const movieRouter = require("./src/routes/movie.js");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(movieRouter);

app.listen(process.env.PORT, ()=> {
    // console.log("App is running")
    console.log(`app runs on port ${process.env.PORT}`)
});




// 1. Į savo applikacija isidiegti nodemon bei sukurti dev scriptą;

// 2. Užsirašyt dotenv bei padėt savo portą į secret failą (.env);+
// 3. Iškelti savo kodą į controller ir routes folderius;+
// 4. eslint+

// 5. Prasitestuoti savo applikaciją, patikrint ar endpointai gražiną teisingą informaciją;