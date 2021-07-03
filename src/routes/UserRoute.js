const UserController = require("../controllers/UserController");

const router = require("express").Router();

router.post("/sign_up", UserController.UserSignUpPostController);

module.exports = {
	path: "/users",
	router,
};
