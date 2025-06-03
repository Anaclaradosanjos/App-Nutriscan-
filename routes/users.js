const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/:id", userController.getUser);
router.post("/:id/favorites", userController.addFavorite);
router.post("/:id/history", userController.addHistory);

module.exports = router;
