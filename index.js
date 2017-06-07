'use strict';
var env = require('node-env-file');
module.exports = {

	load: function (path, overWrite) {
		env(__dirname + '/' + path, {overwrite: overWrite === true});
	},

	get: function (key, defaultVal) {
		return process.env[key] || defaultVal;
	},

	set: function (key, val) {
		process.env[key] = val;
	}

};
