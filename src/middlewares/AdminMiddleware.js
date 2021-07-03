module.exports = (req, res, next) => {
	if (req.user.user_role == "admin") {
		next();
	} else {
		res.status(403).json({
			ok: false,
			message: "Permissions denied",
		});
	}
};
