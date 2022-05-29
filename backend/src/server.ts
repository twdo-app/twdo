import express from "express";
import cors from "cors";
import logger from "./utils/logger";

import router from "./routes/index";

const PORT = process.env.PORT;

const app = express();

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());
app.use(router);

const server = app.listen(PORT, () =>
    logger.info(`Server is running on port ${PORT}`)
);
