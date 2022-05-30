import express from "express";

import usersRoutes from "./users";
import tasksRoutes from "./tasks";

// const tasksRouter = require("./tasks");

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/tasks", tasksRoutes);

export default router;
