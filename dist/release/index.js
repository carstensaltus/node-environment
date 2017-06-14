"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
exports.env = {
    explode: function (key, splitCharacter, defaultVal) {
        var a = Array.isArray(defaultVal) ? defaultVal : [];
        var b = _this.var(key).split(splitCharacter || ',');
        return typeof process.env[key] === 'undefined' ? a : b;
    },
    isNodeEnv: function (name) {
        return name === _this.nodeEnv();
    },
    load: function (file, overWrite) {
        var lines;
        try {
            lines = (fs.readFileSync((file || '.env'), 'utf8') || '')
                .split(/\r?\n|\r/)
                .filter(function (line) {
                return /\s*=\s*/i.test(line);
            })
                .map(function (line) {
                return line.replace('exports ', '');
            });
        }
        catch (err) {
            return false;
        }
        lines.forEach(function (line) {
            if (/^\s*\#/i.test(line)) {
                // comment
            }
            else {
                var keyValue = line.match(/^([^=]+)\s*=\s*(.*)$/);
                var envKey = keyValue[1];
                // remove ' and " characters if right side of = is quoted
                var envValue = keyValue[2].match(/^(['"]?)([^\n]*)\1$/m)[2];
                // overwrite already defined `process.env.*` values?
                if (overWrite || typeof process.env[envKey] === 'undefined') {
                    _this.env(envKey, process.env[envKey] || envValue);
                }
            }
        });
        return true;
    },
    nodeEnv: function (name) {
        return _this.var('NODE_ENV', name);
    },
    var: function (key, val) {
        if (typeof val !== 'undefined') {
            process.env[key] = val;
            process.env[key] = process.env[key];
        }
        return typeof process.env[key] === 'undefined' ? '' : process.env[key].trim();
    },
};
exports.default = exports.env;
