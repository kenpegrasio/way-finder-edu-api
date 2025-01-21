import express from "express"
import { getMeetings, createMeeting, deleteMeeting, updateMeeting } from "../controllers/meetingController.js"

const meetingRouter = express.Router();

meetingRouter.get("/", getMeetings);
meetingRouter.post("/", createMeeting);
meetingRouter.delete("/:id", deleteMeeting);
meetingRouter.put("/:id", updateMeeting);

export default meetingRouter;