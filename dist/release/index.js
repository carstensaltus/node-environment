"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
exports.env = {
    explode: function (key, splitCharacter, defaultVal) {
        var a = Array.isArray(defaultVal) ? defaultVal : [];
        var b = exports.env.var(key).split(splitCharacter || ',');
        return typeof process.env[key] === 'undefined' ? a : b;
    },
    isNodeEnv: function (name) {
        return name === exports.env.nodeEnv();
    },
    load: function (file, overWrite) {
        var lines;
        try {
            lines = (fs.readFileSync(path.resolve((file || '.env')), 'utf8') || '')
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
            var isComment = /^\s*\#/i.test(line);
            if (!isComment) {
                var keyValue = line.match(/^([^=]+)\s*=\s*(.*)$/);
                var envKey = keyValue[1];
                // remove ' and " characters if right side of = is quoted
                var envValue = keyValue[2].match(/^(['"]?)([^\n]*)\1$/m)[2];
                // overwrite already defined `process.env.*` values?
                if (overWrite || typeof process.env[envKey] === 'undefined') {
                    exports.env.var(envKey, process.env[envKey] || envValue);
                }
            }
        });
        return true;
    },
    nodeEnv: function (name) {
        return name ? exports.env.var('ttt', name) : exports.env.var('ttt');
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
