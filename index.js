'use strict';
var env = require('node-env-file');
var nodeEnvironment = {

	/**
	 * Load environment files
	 */
	load: function (path, overWrite) {
		try {
			env((path || '.env'), {overwrite: overWrite === true});
			return true;
		} catch (e) {
			return false;
		}
	},

	set: function (key, val) {
		process.env[key] = val;
	},

	get: function (key, defaultVal) {
		return typeof process.env[key] === 'undefined' ? (typeof defaultVal === 'string' ? defaultVal : undefined) : process.env[key];
	},

	/**
	 * Splits a string by a specified character and returns an array.
	 *
	 * @param  {String} key - The key value of the env variable.
	 * @param  {String} splitCharacter - The character you want to use to split the string.
	 * @param  {Array<string>} defaultVal - If key value wasn't found, use default value
	 * @return {Array<string>}
	 */
	explode: function (key, splitCharacter, defaultVal) {
		return typeof process.env[key] === 'undefined' ? (Array.isArray(defaultVal) ? defaultVal : []) : (process.env[key].split(splitCharacter || ','));
	}

};

module.exports = nodeEnvironment;
