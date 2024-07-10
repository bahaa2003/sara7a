import { messageModel } from "../../../database/model/message.model.js";

export const addMessage = async (req, res) => {
  const { message, resevedId } = req.body;
  await messageModel.insertMany({ message, resevedId });
  res.json({ message: "success" });
};

export const getMessages = async (req, res) => {
  const  id  = req.Id;
  const messages = await messageModel.find({ resevedId: id });
  res.json({ message: "success", messages });
};

export const deleteMessages = async (req, res) => {
  const { id } = req.body;
  let deleted = await messageModel.findByIdAndDelete({ id });
  res.json({ message: "success", deleted });
};
