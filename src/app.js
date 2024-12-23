import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Way Finder Edu API!" });
});

export default app;
