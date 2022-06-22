import express from "express";
import projectController from "../controllers/ProjectController";
import UserAuth from "../middlewares/UserAuth";

const router = express.Router();

router.post("/", UserAuth.verifyJWT(), projectController.create());
router.get("/projects", UserAuth.verifyJWT(), () => "lala");
router.put("/projects/:id", UserAuth.verifyJWT(), () => "lala");

export default router;
