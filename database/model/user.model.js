import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [2, "name is shorter than"],
    maxLength: [20, "name is longer than"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "password is shorter than"],
  },
  age: {
    type: Number,
    required: true,
    min: [10, "age should be at least 18"],
    max: [80, "age should be less than or equal to 100"],
  },
  confirmedEmail: {
    type: Boolean,
    default: false,
  },
});

export const userModel = mongoose.model("User", userSchema);

// //validate: {
//     validator: function(v) {
//         return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
//     },
//     message: '{VALUE} is not a valid email address'
// }
