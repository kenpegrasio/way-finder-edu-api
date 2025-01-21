import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  teacher: { type: String, required: true },
  student: { type: String, required: true },
  date: { type: String, required: true },
  meeting_link: { type: String },
});

export default mongoose.model("Meeting", meetingSchema);
