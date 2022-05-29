import express from "express";
import cors from "cors";
import logger from "./utils/logger";

import router from "./routes/index";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const server = app.listen(PORT, () =>
    logger.info(`Server is running on port ${PORT}`)
);
