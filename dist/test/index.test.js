"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var path = require("path");
var index_1 = require("../release/index");
var expect = chai.expect;
describe('module', function () {
    describe('load()', function () {
        var envFile = path.resolve('dist/.env');
        process.env.GHI = 'notOverWriten';
        it('load(`abc`) shoud return false if file was not loaded', function () {
            expect(index_1.default.load('abc')).to.eql(false);
        });
        it('load(`./dist/.env`, false) shoud return true if .env was loaded', function () {
            expect(index_1.default.load(envFile, false)).to.eql(true);
        });
        it('process.env.GHI should not be over written equal `notOverWriten`', function () {
            expect(process.env.GHI).to.eql('notOverWriten');
        });
        it('process.env.ABC should return `123` which was set by the load method', function () {
            expect(process.env.ABC).to.eql('123');
        });
        it('load(`./dist/.env`, true) shoud return true if .env was loaded', function () {
            expect(index_1.default.load(envFile, true)).to.eql(true);
        });
        it('process.env.GHI should not be over written and equal `uuu`', function () {
            expect(process.env.GHI).to.eql('uuu');
        });
    });
    describe('var()', function () {
        it('var(`aoo`) should return ``', function () {
            expect(index_1.default.var('aoo')).to.eql('');
        });
        it('var(`boo`, ` 123 `) should return `123`', function () {
            expect(index_1.default.var('boo', ' 123 ')).to.eql('123');
        });
        it('var(`boo`) should return `123`', function () {
            expect(index_1.default.var('boo')).to.eql('123');
        });
        it('var(`coo`, 123) should return `123`', function () {
            expect(index_1.default.var('coo', 123)).to.eql('123');
        });
        it('var(`doo`, null) should return `null`', function () {
            expect(index_1.default.var('doo', null)).to.eql('null');
        });
        it('var(`eoo`, true) should return `true`', function () {
            expect(index_1.default.var('eoo', true)).to.eql('true');
        });
        it('var(`foo`, [1, 2, 3]) should return `true`', function () {
            expect(index_1.default.var('foo', [1, 2, 3])).to.eql('1,2,3');
        });
        it('var(`goo`, [`1`, `a`, 3]) should return `true`', function () {
            expect(index_1.default.var('goo', ['1', 'a', 3])).to.eql('1,a,3');
        });
        it('var(`hoo`, {}) should return `[object Object]`', function () {
            expect(index_1.default.var('hoo', {})).to.eql('[object Object]');
        });
    });
    describe('isNodeEnv()', function () {
        it('isNodeEnv(`staging`) should return false', function () {
            expect(index_1.default.isNodeEnv('staging')).to.eql(false);
        });
        it('isNodeEnv(`staging`) should return false', function () {
            expect(index_1.default.isNodeEnv('staging')).to.eql(false);
        });
    });
    describe('nodeEnv()', function () {
        ['production', 'staging', 'dev'].forEach(function (environment) {
            it('nodeEnv(`' + environment + '`) should return `' + environment + '`', function () {
                expect(index_1.default.nodeEnv(environment)).to.eql(environment);
            });
            it('nodeEnv() should return `' + environment + '`', function () {
                expect(index_1.default.nodeEnv()).to.eql(environment);
            });
        });
    });
    describe('explode()', function () {
        process.env.uoo = 'a,b,c';
        process.env.poo = [1, 2, 3];
        it('explode(`uoo`) should return [`a`, `b`, `c`]', function () {
            expect(index_1.default.explode('uoo')).to.eql(['a', 'b', 'c']);
        });
        it('explode(`poo`) should return [`1`, `2`, `3`]', function () {
            expect(index_1.default.explode('poo')).to.eql(['1', '2', '3']);
        });
    });
});
