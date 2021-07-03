const jwt = require("jsonwebtoken");

module.exports.generateToken = (data) => {
	return jwt.sign(data, process.env.SECRET_WORD);
};

module.exports.checkToken = (token) => {
	try {
		return jwt.verify(token);
	} catch (error) {
		return false;
	}
};
