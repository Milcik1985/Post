import movieSchema from "../models/movie.js";
import { v4 as uuidv4 } from 'uuid';
import moviesListSchema from "../models/movie_group.js";

const CREATE_MOVIE = async (req, res) => {
        try {
            const movie = new movieSchema({
                id: uuidv4(),
                imageUrl: req.body.imageUrl,
                title: req.body.title,
                genre: req.body.genre,
                rating: req.body.rating,
            });
            
            const response = await movie.save();

            await moviesListSchema.updateOne(
                {id: req.params.movieId}, 
                {$push: {movies_ids: movie.id}}
            );
            
            return res.status(200).json({status: "Movie is created", response: response})
        } catch(err) {
            console.log("Handled error:", err);
            return res.status(500).json({message: "error occured"})
        }
    };

const GET_ALL_MOVIES = async (req, res) => {
        try {
            const movies = await movieSchema.find();
            return res.json({movies: movies});
        } catch(err) {
            console.log("Handled error:", err);
            return res.status(500).json({message: "error occured"})
        }
    };
    
const GET_SORTED_BY_RATING_MOVIES = async (req, res) => {
        try {
            const movies = await movieSchema.find().sort({ rating: -1 });
            return res.json({ movies });
        } catch (error) {
            console.error('Error getting sorted movies:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    };   

 const DELETE_ALL_MOVIES = async (req, res) => {
    try {
        await movieSchema.deleteMany({});
        return res.status(200).json({message: "All movies deleted"});
    } catch (err) {
        console.log("Handled error:", err);
        return res.status(500).json({message: "Error occured"})
    }
 };

const GET_MOVIE_BY_ID = async (req, res) => {
    try {
        const movie = await movieSchema.findOne({id: req.params.id});
        if (!movie) {
            return res.status(404).json({message: "There are no movie with such id"});
        }
        return res.status(200).json({movie: movie});
    } catch (err) {
        console.log("Error getting movie by ID:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const GET_10_MOVIES = async (req, res) => {
    try {
        const movies = await movieSchema.find().limit(10);    
        if (movies.length === 0) {
        return res.status(200).json({status: "Data not exist"});
    }
    return res.json({movies});
    } catch (error) {
        console.error("Error fetching movies:", error);
        return res.status(500).json({message: "Internal server error"});
    }
};

const UPDATE_MOVIE_BY_ID = async (req, res) => {
    try {
        const movie = await movieSchema.findByIdAndUpdate(
            {_id: req.params.id},
            {...req.body},
            {new: true}
        );
    if (!movie) {
        return res.status(404).json({message: `Movie with id ${req.params.id} does not exist`})
    }
        return res.status(200).json({message: "Updated", movie: movie});
    } catch (err) {
        console.log("Handled error:", err);
        return res.status(500).json({message: "Error occured"});
    }
};

export {CREATE_MOVIE, GET_ALL_MOVIES, GET_SORTED_BY_RATING_MOVIES, GET_MOVIE_BY_ID, GET_10_MOVIES, UPDATE_MOVIE_BY_ID, DELETE_ALL_MOVIES}


    
