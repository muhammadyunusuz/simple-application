const router = require("express").Router();

router.get("/test", (req, res) => res.json({ ok: true }));

module.exports = {
	path: "/users",
	router,
};
