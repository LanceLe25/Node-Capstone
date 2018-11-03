const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema ({
	name: {
		type: String,
		required: false
	},
	username: {
		type: String,
		required: false
	},
	password: {
		type: String,
		required: false
	}
});

userSchema.methods.validatePassword = function (password, callBack) {
	bcrypt.compare(password, this.password, (err, isValid) => {
		if(err) {
			callBack(err);
			return;
		}
		callBack(null, isValid);
	});
};

const User = mongoose.model('User', userSchema);

module.exports = User;