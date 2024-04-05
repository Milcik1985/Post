import { v4 as uuidv4 } from 'uuid';
import MoviesList from "../models/movie_group.js";
import User from '../models/user.js';
import movieList from '../models/movie_group.js';

let movies = [];

const CREATE_MOVIE_GROUP = async (req, res) => {
        try {
            const group = new MoviesList({
                genre: req.body.genre,
                movies_ids: req.body.movies_ids,
            });
            
            const response = await group.save();
            
            return res.status(201).json({status: "Movie group is created", response: response})
        } catch(err) {
            console.log("Handled error:", err);
            return res.status(500).json({message: "error occured"})
        }
    };

const GET_ALL_MOVIES_GROUP = async (req, res) => {
        try {
            const lists = await MoviesList.find();

            return res.json({lists: lists});
        } catch(err) {
            console.log("Handled error:", err);
            return res.status(500).json({message: "error occured"})
        }
    };

const GET_SORTED_BY_RATING_MOVIES = (req, res) => {
    movies.sort((a, b) => b.rating - a.rating);
    return res.json({movies: movies})
};

const DELETE_ALL_MOVIES = (req, res) => {
    movies.length = 0;
    return res.status(200).json({status: "All movie recommendations are deleted"})
};

const GET_MOVIE_BY_ID = (req, res) => {
    const movieById = movies.find((m) => m.id === Number(req.params.id));

    if (!movieById) {
        return res.status(404).json({message: "There are no movie with such ID"})
    }

    return res.json({movie: movieById})
};

const GET_10_MOVIES = (req, res) => {
    if (movies.length === 0) {
        return res.status(200).json({status: "Data not exist"});
    }
    const limitedMovies = movies.slice(0,10);
    return res.json({movies: limitedMovies});
}

const UPDATE_MOVIE_BY_ID = (req, res) => {
    const doesMovieExist = movies.some((movie) => movie.id === req.params.id);

    if (!doesMovieExist) {
        return res.status(404).json({message: `Movie with id ${req.params.id} does not exist`})
    }
    const index = movies.findIndex((movie) => movie.id === req.params.id);

        movies[index] = {...movies[index], ...req.body};

        return res.json({updatedMovie: movies[index]})
    };

const ADD_MOVIES_LIST = async (req, res) => {
        try {
            const { movies_list_title, userEmail, likedMovies } = req.body;
            const id = uuidv4();
            const moviesList = new MoviesList({ id, movies_list_title, userEmail, likedMovies });
            const newMoviesList = await moviesList.save();
            res.status(201).json(newMoviesList);
          } catch (error) {
            console.error('Error creating movies list:', error);
            res.status(500).json({ message: 'Internal server error' });
          }
        };

const GET_MOVIES_LIST = async (req, res) => {
    try {
        const userEmail = req.user.email;
        const moviesLists = await MoviesList.find({ userEmail }).populate('likedMovies');
        res.json(moviesLists);
      } catch (error) {
        console.error('Error fetching movies lists:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    };

const GET_MOVIES_LIST_BY_ID = async (req, res) => {
    try {
      const { moviesListId } = req.params;
      const moviesList = await MoviesList.findById(moviesListId).populate('likedMovies');
      if (!moviesList) {
        return res.status(404).json({ message: 'Movies list not found' });
      }
      res.json(moviesList);
    } catch (error) {
      console.error('Error fetching movies list by ID:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  const ADD_MOVIE_TO_LIST = async (req, res) => {
    try {
        const { movieId, userId } = req.body;
        const movie = await movieList.findById(movieId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.userCartProducts.push(movieId); 
        await user.save();

        return res.status(200).json({ message: 'Movie added to list successfully' });
    } catch (error) {
        console.error('Error adding movie to list:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const GET_ALL_MOVIES_LISTS = async (req, res) => {
    try {
        const listId = req.params.listId; 
        const moviesList = await MoviesList.findById(listId).populate('movies');
        if (!moviesList) {
            return res.status(404).json({ message: 'Movies list not found' });
        }
        const movies = moviesList.movies; 
        return res.status(200).json(movies);
    } catch (error) {
        console.error('Error getting movies in list:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export {CREATE_MOVIE_GROUP, GET_ALL_MOVIES_GROUP, GET_SORTED_BY_RATING_MOVIES, DELETE_ALL_MOVIES, GET_MOVIE_BY_ID, GET_10_MOVIES, UPDATE_MOVIE_BY_ID, ADD_MOVIES_LIST, GET_MOVIES_LIST, GET_MOVIES_LIST_BY_ID, ADD_MOVIE_TO_LIST, GET_ALL_MOVIES_LISTS}


    
