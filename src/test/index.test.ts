import * as chai from 'chai';
import * as mocha from 'mocha';
import env from '../release/index';
const expect = chai.expect;

describe('module', () => {

	describe('load()', () => {

		it('load() shoud return true if no file name specified and .env exists', () => {
			expect(env.load()).to.eql(true);
		});

		it('load() shoud return true if no file name specified and .env exists', () => {
			expect(env.load('.env', false)).to.eql(true);
		});

		it('load(`abc`) shoud return false if file was not loaded', () => {
			expect(env.load('abc')).to.eql(false);
		});

	});

	describe('var()', () => {

		it('var(`ALTUS`) should return `hello world` from the loaded env file', () => {
			expect(env.var('ALTUS')).to.eql('hello world');
		});

		it('var(`aoo`) should return ``', () => {
			expect(env.var('aoo')).to.eql('');
		});

		it('var(`boo`, ` 123 `) should return `123`', () => {
			expect(env.var('boo', ' 123 ')).to.eql('123');
		});

		it('var(`boo`) should return `123`', () => {
			expect(env.var('boo')).to.eql('123');
		});

		it('var(`coo`, 123) should return `123`', () => {
			expect(env.var('coo', 123)).to.eql('123');
		});

		it('var(`doo`, null) should return `null`', () => {
			expect(env.var('doo', null)).to.eql('null');
		});

		it('var(`eoo`, true) should return `true`', () => {
			expect(env.var('eoo', true)).to.eql('true');
		});

		it('var(`foo`, [1, 2, 3]) should return `true`', () => {
			expect(env.var('foo', [1, 2, 3])).to.eql('1,2,3');
		});

		it('var(`goo`, [`1`, `a`, 3]) should return `true`', () => {
			expect(env.var('goo', ['1', 'a', 3])).to.eql('1,a,3');
		});

		it('var(`hoo`, {}) should return `[object Object]`', () => {
			expect(env.var('hoo', {})).to.eql('[object Object]');
		});

	});

	describe('isNodeEnv()', () => {

		it('isNodeEnv(`staging`) should return false', () => {
			expect(env.isNodeEnv('staging')).to.eql(false);
		});

		it('isNodeEnv(`staging`) should return false', () => {
			expect(env.isNodeEnv('staging')).to.eql(false);
		});

	});

	describe('nodeEnv()', () => {

		['production', 'staging', 'dev'].forEach((environment) => {

			it('nodeEnv(`' + environment + '`) should return `' + environment + '`', () => {
				expect(env.nodeEnv(environment)).to.eql(environment);
			});

			it('nodeEnv() should return `' + environment + '`', () => {
				expect(env.nodeEnv()).to.eql(environment);
			});

		});

	});

	describe('explode()', () => {
		process.env.uoo = 'a,b,c';
		process.env.poo = [1, 2, 3];

		it('explode(`uoo`) should return [`a`, `b`, `c`]', () => {
			expect(env.explode('uoo')).to.eql(['a', 'b', 'c']);
		});

		it('explode(`poo`) should return [`1`, `2`, `3`]', () => {
			expect(env.explode('poo')).to.eql(['1', '2', '3']);
		});

	});
});
