const UserController = require("../controllers/UserController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = require("express").Router();

router.post("/sign_up", UserController.UserSignUpPostController);
router.post("/sign_in", UserController.UserSignInPostController);
router.get("/get_me", AuthMiddleware, UserController.GetMeController);

module.exports = {
	path: "/users",
	router,
};
