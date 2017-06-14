"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var mocha = require("mocha");
var index_1 = require("../release/index");
var expect = chai.expect;
mocha.describe('module', function () {
    mocha.describe('load()', function () {
        // mocha.it('load() shoud return false if file was not loaded', () => {
        // 	expect(env.load()).to.eql(false);
        // });
        // mocha.it('load(`../../.env.example`) should return true if file has been loaded', () => {
        // 	expect(env.load('../../.env.example')).to.eql(true);
        // });
        //
        // mocha.it('process.env.MY_STRING should return `hello world`', () => {
        // 	expect(process.env.MY_STRING).to.eql('hello world');
        // });
        mocha.it('load(`../.env.example`) should return true if file has been loaded');
        mocha.it('process.env.MY_STRING should return `hello world`');
    });
    mocha.describe('var()', function () {
        mocha.it('var(`aoo`) should return ``', function () {
            expect(index_1.default.var('aoo')).to.eql('');
        });
        mocha.it('var(`boo`, ` 123 `) should return `123`', function () {
            expect(index_1.default.var('boo', ' 123 ')).to.eql('123');
        });
        mocha.it('var(`boo`) should return `123`', function () {
            expect(index_1.default.var('boo')).to.eql('123');
        });
        mocha.it('var(`coo`, 123) should return `123`', function () {
            expect(index_1.default.var('coo', 123)).to.eql('123');
        });
        mocha.it('var(`doo`, null) should return `null`', function () {
            expect(index_1.default.var('doo', null)).to.eql('null');
        });
        mocha.it('var(`eoo`, true) should return `true`', function () {
            expect(index_1.default.var('eoo', true)).to.eql('true');
        });
        mocha.it('var(`foo`, [1, 2, 3]) should return `true`', function () {
            expect(index_1.default.var('foo', [1, 2, 3])).to.eql('1,2,3');
        });
        mocha.it('var(`goo`, [`1`, `a`, 3]) should return `true`', function () {
            expect(index_1.default.var('goo', ['1', 'a', 3])).to.eql('1,a,3');
        });
        mocha.it('var(`hoo`, {}) should return `[object Object]`', function () {
            expect(index_1.default.var('hoo', {})).to.eql('[object Object]');
        });
    });
    mocha.describe('isNodeEnv()', function () {
        mocha.it('isNodeEnv(`45t5erg3`) should return false');
    });
    mocha.describe('nodeEnv()', function () {
        mocha.it('nodeEnv()');
    });
    // mocha.describe('explode()', () => {
    // 	process.env.uoo = 'a,b,c';
    // 	process.env.poo = [1, 2, 3];
    //
    // 	mocha.it('explode(`uoo`) should return [`a`, `b`, `c`]', () => {
    // 		expect(env.explode('uoo')).to.eql(['a', 'b', 'c']);
    // 	});
    //
    // 	mocha.it('explode(`poo`) should return [`1`, `2`, `3`]', () => {
    // 		expect(env.explode('poo')).to.eql(['1', '2', '3']);
    // 	});
    //
    // });
});
