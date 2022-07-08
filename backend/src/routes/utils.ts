import express from "express";
import UserAuth from "../middlewares/UserAuth";
import utilsController from "../controllers/UtilsController";

const router = express.Router();

router.post(
  "/send-feedback",
  UserAuth.verifyJWT(),
  utilsController.sendFeedback()
);

export default router;
