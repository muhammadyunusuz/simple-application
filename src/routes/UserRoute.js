const UserController = require("../controllers/UserController");

const router = require("express").Router();

router.post("/sign_up", UserController.UserSignUpPostController);
router.post("/sign_in", UserController.UserSignInPostController);

module.exports = {
	path: "/users",
	router,
};
