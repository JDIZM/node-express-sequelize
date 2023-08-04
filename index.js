const express = require("express");
const logger = require("./services/logger");
const db = require("./services/db");

const app = express();
const port = 3000;

const router = express.Router();
const routes = require("./routes");

app.use(express.json());

app.use(router);
routes(router);

const connect = async () => {
  try {
    logger.info("Trying to connect to the database...");
    await db.authenticate();
    logger.info("Connection has been established successfully.");
    logger.info(`Server listening on port ${port}`);
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
};

app.listen(port, () => {
  connect();
});
