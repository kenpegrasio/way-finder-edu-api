import express from "express";

import {
  createUser,
  findUser,
  deleteUser,
  getUsers,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.get("/:id", findUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;