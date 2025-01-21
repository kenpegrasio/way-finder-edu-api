import Meeting from "../models/Meeting.js";

export const createMeeting = async (req, res) => {
  try {
    const meeting = new Meeting({
      ...req.body,
      meeting_link:
        req.body.meeting_link || "Meeting link has not been provided",
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

export const updateMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
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

export const deleteMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.findOneAndDelete({
      _id: req.params.id,
    });
    if (!meeting) {
      res.status(404).json({ message: "Meeting not found" });
    } else {
      res.status(200).json({ message: "Meeting deleted successfully" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occured" });
    }
  }
};

export const findMeetingbyID = async (req, res) => {
  try {
    const meeting = await Meeting.findOne({
      _id: req.params.id,
    });
    if (!meeting) {
      res.status(404).json({ message: "Meeting not found" });
    } else {
      res.status(200).json({ message: "Meeting deleted successfully" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occured" });
    }
  }
};
