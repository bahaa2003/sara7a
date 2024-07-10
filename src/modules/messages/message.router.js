import express from "express";
import { addMessage, deleteMessages, getMessages } from "./message.controller.js";
import { auth } from "../../middleware/auth.js";

const messageRouter = express.Router();

messageRouter.post("/", addMessage);
messageRouter.get("/", auth ,getMessages);
messageRouter.delete("/", deleteMessages);

export default messageRouter;
