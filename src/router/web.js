import express from "express";
import {
  getHomepage,
  getDetailPage,
  createNewUser,
} from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomepage);

  router.get("/detail/user/:userId", getDetailPage);
  router.post("/create-new-user", createNewUser);
  app.get("/trang-chu", (req, res) => {
    res.send("Trang Chu");
  });

  return app.use("/", router);
};

export default initWebRoute;
