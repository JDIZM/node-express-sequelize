const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const express = require("express");
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
    console.log("Trying to connect to the database...");
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
