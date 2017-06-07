'use strict';
var env = require('node-env-file');
module.exports = {

	load: function (path, overWrite) {
		try {
			env((path || '.env'), {overwrite: overWrite === true});
			return true;
		} catch (e) {
			return false;
		}
	},

	get: function (key, defaultVal) {
		return process.env[key] || defaultVal;
	},

	set: function (key, val) {
		process.env[key] = val;
	}

};
