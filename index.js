import express from "express";
import 'dotenv/config'
import { dbConnection } from "./database/dbConnection.js";
import userRouter from "./src/modules/users/user.router.js";
import messageRouter from './src/modules/messages/message.router.js';
const app = express();
const port = 3000;
app.use(express.json());

app.use("/users", userRouter);
app.use("/messages", messageRouter)
dbConnection();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
