import express from "express";
import {
  getHomepage,
  getDetailPage,
  createNewUser,
  deleteUser,
  editUser,
  updateUser,
} from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomepage);

  router.get("/detail/user/:userId", getDetailPage);
  router.get("/edit-user/:userId", editUser);

  router.post("/create-new-user", createNewUser);
  router.post("/delete-user", deleteUser);
  router.post("/update-user/:userId", updateUser);

  app.get("/trang-chu", (req, res) => {
    res.send("Trang Chu");
  });

  return app.use("/", router);
};

export default initWebRoute;
