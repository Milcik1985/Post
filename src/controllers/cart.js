import Cart from '../models/cart.js';
import Movie from "../models/movie.js";
import User from "../models/user.js";

const ADD_CART = async (req, res) => {
  const { userId, items } = req.body;

  try {
    const newCart = await Cart.create({ userId, items });
    res.status(201).json(newCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const GET_CART_BY_ID = async (req, res) => {
  const { cartId } = req.params;

  try {
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const ADD_TO_CART = async (req, res) => {
  try {
    const {movieId} = req.body;
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({message: "Movie recommendation not found"});
    }

    const user = await User.findById(req.user.id);
    user.userCartProducts.push(movieId);
    await user.save();

    return res.status(200).json({message: "Movie recommendation added to cart"});
  } catch (err) {
    console.error("Error adding movie recommendation to cart", err);
    return res.status(500).json({message: "Internal server error"});
  }
};

const USER_WITH_CART_PRODUCTS = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("userProductsCart");
    if (!user) {
      return res.status(404).json({message: "User not found"});
    }
    return res.status(200).json({user});
  } catch (err) {
    console.error("Error fetching user with cart products:", err);
    return res.status(500).json({message: "Internal server error"});
  }
};

export {ADD_CART, GET_CART_BY_ID, ADD_TO_CART, USER_WITH_CART_PRODUCTS}
