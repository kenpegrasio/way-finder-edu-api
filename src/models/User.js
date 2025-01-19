import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  google_id: { type: String, unique: true, required: true },
  accesstype: { type: String },
  phone_number: {type: String},
  school: { type: String },
  gender: { type: String },
  grade: { type: Number },
});

export default mongoose.model("User", userSchema);
