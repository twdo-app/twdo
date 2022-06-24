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
router.put("/:id", UserAuth.verifyJWT(), taskController.update());

router.post("/reorder", UserAuth.verifyJWT(), taskController.reorder());

/**
 * Delete one Task of the logged user
 */
router.delete("/:id", UserAuth.verifyJWT(), taskController.delete());

export default router;
