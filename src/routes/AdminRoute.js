const AdminController = require("../controllers/AdminController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const AdminMiddleware = require("../middlewares/AdminMiddleware");

const router = require("express").Router();

router.use(AuthMiddleware);
router.use(AdminMiddleware);

router.get("/get_users", AdminController.GetUsersController);

module.exports = {
	path: "/admin",
	router,
};
