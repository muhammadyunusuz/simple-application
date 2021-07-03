module.exports = class AdminController {
	static async GetUsersController(req, res) {
		try {
			const users = await req.db.users.findAll({
				raw: true,
				attributes: [
					"user_name",
					"user_role",
					"user_email",
					"createdAt",
				],
			});

			res.status(200).json({
				ok: true,
				data: users,
			});
		} catch (error) {
			res.status(400).json({
				ok: false,
				error: error + "",
			});
		}
	}
};
