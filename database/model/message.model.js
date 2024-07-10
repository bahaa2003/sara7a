import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  resevedId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,

  }
});

export const messageModel = mongoose.model("Message", messageSchema);

// //validate: {
//     validator: function(v) {
//         return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
//     },
//     message: '{VALUE} is not a valid email address'
// }
