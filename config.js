exports.DATABASE_URL = process.env.DATABASE_URL || "mongodb://admin:password1@ds137483.mlab.com:37483/time-is-ticking";
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
	'mongodb://admin:password1@ds137483.mlab.com:37483/time-is-ticking';
exports.PORT = process.env.PORT || 8080;