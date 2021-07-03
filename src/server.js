require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const app = express();
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const postgres = require("./modules/postgres");

app.listen(process.env.PORT);

async function server() {
	const db = await postgres();

	app.use(
		cors({
			origin: process.env.FRONT_URL,
		})
	);
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(helmet());

	app.use((req, res, next) => {
		req.db = db;
		next();
	});

	const routesPath = path.join(__dirname, "routes");
	fs.readdir(routesPath, (err, files) => {
		if (err) throw err;

		files.forEach((file) => {
			const routePath = path.join(__dirname, "routes", file);
			const route = require(routePath);

			if (route.path && route.router) {
				app.use(route.path, route.router);
			}
		});
	});
}

server();
