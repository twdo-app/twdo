import express from "express";

import usersRoutes from "./users";

// const tasksRouter = require("./tasks");

const router = express.Router();

router.use("/users", usersRoutes);
// router.use("/tasks", tasksRouter);

export default router;
