import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const SIGN_UP = async (req, res) => {
  try {
    console.log(req.body);

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const userData = {
      id: uuidv4(),
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
      movies: [],
    };

    const newUser = new User(userData);
    const response = await newUser.save();

    return res.json({ movies: response });
  } catch (err) {
    console.log("Handled error:", err);
    return res.status(500).json({ message: "error occured" });
  }
};

const LOG_IN = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "User data is wrong" });
    }

    const doesPasswordMatch = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!doesPasswordMatch) {
      return res.status(500).json({ message: "User data is wrong" });
    }

    const jwt_token = jwt.sign(
      { userName: user.userName, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "20h",
      }
    );

    return res.json({ jwt: jwt_token, message: "Logged successfully" });
  } catch (err) {
    console.log("Handled error:", err);
    return res.status.json({ message: "Error occured" });
  }
};

export { SIGN_UP, LOG_IN };
