'use strict';

var expect = require('chai').expect;
var env = require('./index');

describe('module', function () {

	describe('load()', () => {

		it ('load() shoud return false if file was not loaded', function () {
			expect(env.load()).to.eql(false);
		});

		it ('load(`.env.example`) should return true if file has been loaded', function () {
			expect(env.load('.env.example')).to.eql(true);
		});

		it ('process.env.MY_STRING should return `hello world`', function () {
			expect(process.env.MY_STRING).to.eql('hello world');
		});

	});

	describe('set()', function () {

		it('set(`moo`) with no value should return undefined', function () {
			env.set('moo');
			expect(process.env.moo).to.eql('undefined');
		});

		it('set(`zoo`, 123) should return a string of `123`', function () {
			env.set('zoo', 123);
			expect(process.env.zoo).to.eql('123');
		});

		it('set(`koo`, [1,2,3]) should return a string of `1,2,3`', function () {
			env.set('koo', [1,2,3]);
			expect(process.env.koo).to.eql('1,2,3');
		});

		it('set(`foo`, `abc`) should return a string of `abc`', function () {
			env.set('foo', 'abc');
			expect(process.env.foo).to.eql('abc');
		});

		it('set(`aoo`, null) should return a string of `null`', function () {
			env.set('aoo', null);
			expect(process.env.aoo).to.eql('null');
		});

		it('set(`boo`, true) should return a string of `true`', function () {
			env.set('boo', true);
			expect(process.env.boo).to.eql('true');
		});

	});

	describe('get()', function () {

		it('get(`moo`) should return `abc`', function () {
			process.env.moo = 'abc';
			expect(env.get('moo')).to.eql('abc');
		});

		it('get(`jkl`) should return `undefined`', function () {
			expect(env.get('jkl')).to.eql(undefined);
		});

		it('get(`jkl`, `foo`) should return `foo`', function () {
			expect(env.get('jkl', 'foo')).to.eql('foo');
		});

		it('get(`jkl`, `[]`) should return `foo`', function () {
			expect(env.get('jkl', [])).to.eql(undefined);
		});

		it('get(`jkl`, `{}`) should return `foo`', function () {
			expect(env.get('jkl', {})).to.eql(undefined);
		});

	});

	describe('explode()', function () {
		process.env.uoo = 'a,b,c';
		process.env.poo = [1,2,3];

		it('explode(`uoo`) should return [`a`, `b`, `c`]', function () {
			expect(env.explode('uoo')).to.eql(['a', 'b', 'c']);
		});

		it('explode(`poo`) should return [`1`, `2`, `3`]', function () {
			expect(env.explode('poo')).to.eql(['1', '2', '3']);
		});

	});

});
