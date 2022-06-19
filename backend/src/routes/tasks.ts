import express from "express";
import UserAuth from "../middlewares/UserAuth";

const router = express.Router();

/**
 * Create one Task to the logged user
 */
router.get("/", UserAuth.verifyJWT(), (req, res) =>
  res.status(200).send({ message: "tambem existe" })
);

/**
 * Create one Task to the logged user
 */
router.post("/", UserAuth.verifyJWT(), (req, res) =>
  res.status(200).send({ message: "tambem existe" })
);

/**
 * Update one Task of the logged user
 */
router.put("/:id", (req, res) =>
  res.status(200).send({ message: "mais um q existe" })
);

/**
 * Delete one Task of the logged user
 */
router.delete("/:id", (req, res) =>
  res.status(200).send({ message: "deletado" })
);

export default router;
