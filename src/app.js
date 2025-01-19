import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";
import userRouter from "./routes/userRoutes.js";
import meetingRouter from "./routes/meetingRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Way Finder Edu API!" });
});

app.use("/api/user", userRouter);
app.use("/api/meetings", meetingRouter);

export default app;
