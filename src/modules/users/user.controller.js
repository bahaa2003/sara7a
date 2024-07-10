import bcrypt from "bcrypt";
import { userModel } from "../../../database/model/user.model.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { name, password, email, age } = req.body;
  const user = await userModel.findOne({ email });
  if (user) return res.json({ message: "email already in use" });

  bcrypt.hash(password,Number( process.env.ROUND), async function (err, hash) {
    await userModel.insertMany({ name, password: hash, email, age });
    res.json({ message: "success" });
  });
};

export const signIn = async (req, res) => {
  const { password, email } = req.body;
  const user = await userModel.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.json({ message: "email or password not found" });
  }
  user.password = undefined;
  var token = jwt.sign({ user }, process.env.JWT_KEY);

  res.json({ message: "success", token });
};
