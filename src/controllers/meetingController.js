import Meeting from "../models/Meeting.js";

export const createMeeting = async (req, res) => {
  try {
    const meeting = new Meeting({
      ...req.body,
    });
    await meeting.save();
    res.status(201).json(meeting);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An Unknown error occured" });
    }
  }
};

export const getMeetings = async (req, res) => {
  try {
    const meeting = await Meeting.find();
    if (!meeting) {
      res.status(404).json({ message: "Meeting not found" });
    } else {
      res.status(200).json(meeting);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An Unknown error occured" });
    }
  }
};
