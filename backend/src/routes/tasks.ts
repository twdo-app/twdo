import express from "express";
import taskController from "../controllers/TaskController";
import UserAuth from "../middlewares/UserAuth";

const router = express.Router();

/**
 * List Tasks of the logged user
 */
router.get("/", UserAuth.verifyJWT(), taskController.getAll());

/**
 * Create one Task to the logged user
 */
router.post("/", UserAuth.verifyJWT(), taskController.create());

/**
 * Update one Task of the logged user
 */
router.put("/:id", (req, res) =>
  //isCompleted: boolean;
  res.status(200).send({ message: "mais um q existe" })
);

/**
 * Delete one Task of the logged user
 */
router.delete("/:id", UserAuth.verifyJWT(), taskController.delete());

export default router;
