import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(req.headers);

  if (!token) {
    console.log("hit1");
    return res.status(401).json({ MessageChannel: "User is not authorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log("hit2");
      return res.status(401).json({ message: "User is not authorized" });
    }

    req.body.userid = decoded.user_id;
    return next();
  });
};

export default authUser;
