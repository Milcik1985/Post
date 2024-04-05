import express from 'express';
import { ADD_CART, GET_CART_BY_ID, ADD_TO_CART, USER_WITH_CART_PRODUCTS } from '../controllers/cart.js';

const cartRouter = express.Router();

cartRouter.post('/carts', ADD_CART);
cartRouter.post("/addToCart", ADD_TO_CART);
cartRouter.get("/userProductsCart", USER_WITH_CART_PRODUCTS)

cartRouter.get('/carts/:cartId', GET_CART_BY_ID);

export default cartRouter;
