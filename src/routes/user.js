import express from 'express';
import User from '../models/user.js';

const userRouter = express.Router();

userRouter.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

userRouter.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default userRouter;
