import express from "express"
import { getMeetings, createMeeting } from "../controllers/meetingController.js"

const meetingRouter = express.Router();

meetingRouter.get("/", getMeetings);
meetingRouter.post("/", createMeeting);

export default meetingRouter;