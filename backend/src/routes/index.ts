import express from "express";

import usersRoutes from "./users";
import tasksRoutes from "./tasks";

// const tasksRouter = require("./tasks");

const router = express.Router();

router.get("/test", (req, res) => res.status(200).send({ message: "foi" }));
router.use("/users", usersRoutes);
router.use("/tasks", tasksRoutes);

export default router;
