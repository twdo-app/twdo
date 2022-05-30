import express from "express";

const router = express.Router();

/**
 * Get today tasks of the logged user
 */
router.get("/today", (req, res) => res.status(200).send({ message: "existe" }));

/**
 * Create one Task to the logged user
 */
router.post("/", (req, res) =>
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
