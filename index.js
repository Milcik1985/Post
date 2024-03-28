//  2. Per front-end sukurt formą kuri įdėtu filmą į servisą; 

// const express = require('express');
// const cors = require('cors');
// const movieRouter = require("./src/routes/movie.js");
// require("dotenv").config();
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(movieRouter);

// app.listen(process.env.PORT, ()=> {
//     // console.log("App is running")
//     console.log(`app runs on port ${process.env.PORT}`)
// });


// 0. Pakeisti common js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import movieRouter from "./src/routes/movie.js";
// https://www.npmjs.com/package/dotenv?activeTab=readme:
import 'dotenv/config'
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_CONNECTION)
.then(() => console.log("Connected to DB"))
.catch((err) => {
    console.log("err", err)
})

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


// 1. Sukurti product rest api.
// 2. Naudoti teisingus endoint'ų pavadinimus.+
// 3. Panaudot GET, POST, PUT, DELETE+
// 4. Pamodifikuot, /tasks, kad jis visad gražintu tam tikrą nurodytą kiekį products. (default 10).