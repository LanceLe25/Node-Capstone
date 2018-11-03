"use strict";

const user = require("./models/user")
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const config = require("./config.js");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

mongoose.Promise = global.Promise;

// ---------------- RUN/CLOSE SERVER -----------------------------------------------------
let server = undefined;

function runServer(urlToUse) {
    return new Promise((resolve, reject) => {
        mongoose.connect(urlToUse, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(config.PORT, () => {
                console.log(`Listening on localhost:${config.PORT}`);
                resolve();
            }).on('error', err => {
                mongoose.disconnect();
                reject(err);
            });
        });
    });
}

if (require.main === module) {
    runServer(config.DATABASE_URL).catch(err => console.error(err));
}

function closeServer() {
    return mongoose.disconnect().then(() => new Promise((resolve, reject) => {
        console.log('Closing server');
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    }));
}

app.listen(process.env.PORT || 8080);

//signing in the user
app.post('/users/login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	User.findOne({
		username: username
	}, function (err, items) {
		if (err) {
			return res.status(500).json({
				message: "Internal server error"
			});
		}

		if(!items) {
			return res.status(401).json({
				message: "No users with this username"
			});
		}

		else {
			items.validatePassword(password, function (err, isValid) {
				if(err) {
					console.log("Could not connect to DB to validate password");
				}

				if(!isValid) {
					return res.status(401).json({
						message: "Password invalid"
					});
				}

				else {

					return res.json(items);
				}
			}); 
		};
	});
});

module.exports = app; 