import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./router/web";
import bodyParser from "body-parser";

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5050;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

//setup view engine
configViewEngine(app);

//setup init web route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
