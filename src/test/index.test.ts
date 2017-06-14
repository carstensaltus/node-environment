import * as chai from 'chai';
import * as mocha from 'mocha';
import env from '../release/index';
const expect = chai.expect;

mocha.describe('module', () => {

	mocha.describe('load()', () => {

		mocha.it('load() shoud return true if no file name specified and .env exists', () => {
			expect(env.load()).to.eql(true);
		});

		mocha.it('load() shoud return true if no file name specified and .env exists', () => {
			expect(env.load('.env', false)).to.eql(true);
		});

		mocha.it('load(`abc`) shoud return false if file was not loaded', () => {
			expect(env.load('abc')).to.eql(false);
		});

	});

	mocha.describe('var()', () => {

		mocha.it('var(`ALTUS`) should return `hello world` from the loaded env file', () => {
			expect(env.var('ALTUS')).to.eql('hello world');
		});

		mocha.it('var(`aoo`) should return ``', () => {
			expect(env.var('aoo')).to.eql('');
		});

		mocha.it('var(`boo`, ` 123 `) should return `123`', () => {
			expect(env.var('boo', ' 123 ')).to.eql('123');
		});

		mocha.it('var(`boo`) should return `123`', () => {
			expect(env.var('boo')).to.eql('123');
		});

		mocha.it('var(`coo`, 123) should return `123`', () => {
			expect(env.var('coo', 123)).to.eql('123');
		});

		mocha.it('var(`doo`, null) should return `null`', () => {
			expect(env.var('doo', null)).to.eql('null');
		});

		mocha.it('var(`eoo`, true) should return `true`', () => {
			expect(env.var('eoo', true)).to.eql('true');
		});

		mocha.it('var(`foo`, [1, 2, 3]) should return `true`', () => {
			expect(env.var('foo', [1, 2, 3])).to.eql('1,2,3');
		});

		mocha.it('var(`goo`, [`1`, `a`, 3]) should return `true`', () => {
			expect(env.var('goo', ['1', 'a', 3])).to.eql('1,a,3');
		});

		mocha.it('var(`hoo`, {}) should return `[object Object]`', () => {
			expect(env.var('hoo', {})).to.eql('[object Object]');
		});

	});

	mocha.describe('isNodeEnv()', () => {

		mocha.it('isNodeEnv(`staging`) should return false', () => {
			expect(env.isNodeEnv('staging')).to.eql(false);
		});

		mocha.it('isNodeEnv(`staging`) should return false', () => {
			expect(env.isNodeEnv('staging')).to.eql(false);
		});

	});

	mocha.describe('nodeEnv()', () => {

		mocha.it('nodeEnv(`production`) should return `production`', () => {
			expect(env.nodeEnv('production')).to.eql('production');
		});

	});

	mocha.describe('explode()', () => {
		process.env.uoo = 'a,b,c';
		process.env.poo = [1, 2, 3];

		mocha.it('explode(`uoo`) should return [`a`, `b`, `c`]', () => {
			expect(env.explode('uoo')).to.eql(['a', 'b', 'c']);
		});

		mocha.it('explode(`poo`) should return [`1`, `2`, `3`]', () => {
			expect(env.explode('poo')).to.eql(['1', '2', '3']);
		});

	});
});
