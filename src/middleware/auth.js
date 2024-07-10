import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.header("token");
  console.log(token);
  jwt.verify(token, process.env.JWT_KEY, async function (err, decoded) {
    if (err) {
      res.json({ message: "token not valid", err });
    } else {
      console.log(decoded.user._id);
      req.Id = decoded.user._id;
      next();
    }
  });
};
