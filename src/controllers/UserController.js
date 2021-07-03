const { generateCrypt } = require("../modules/bcrypt");
const { generateToken } = require("../modules/jsonwebtoken");
const Validations = require("../utils/validations");

module.exports = class UserController {
	static async UserSignUpPostController(req, res) {
		try {
			const data =
				await Validations.UserRegisterValidation().validateAsync(
					req.body
				);

			const user = await req.db.users.create({
				user_name: data.name,
				user_password: await generateCrypt(data.password),
				user_email: data.email,
			});

			res.status(201).json({
				ok: true,
				message: "Registered Successfully",
				data: generateToken(user.dataValues.user_id),
			});
		} catch (error) {
			if ((error = "SequelizeUniqueConstraintError: Validation error")) {
				error = "Email already exists";
			}
			res.status(400).json({
				ok: false,
				message: error + "",
			});
		}
	}
};
