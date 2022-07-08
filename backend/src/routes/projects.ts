import express from "express";
import projectController from "../controllers/ProjectController";
import UserAuth from "../middlewares/UserAuth";

const router = express.Router();

router.get("/", UserAuth.verifyJWT(), projectController.getAll());
router.post("/", UserAuth.verifyJWT(), projectController.create());
router.put("/:id", UserAuth.verifyJWT(), projectController.update());
router.delete("/:id", UserAuth.verifyJWT(), projectController.delete());

export default router;
