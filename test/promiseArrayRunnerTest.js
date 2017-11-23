const {PromiseArrayRunner} = require('../built/PromiseArrayRunner');
const {expect} = require('chai');

let startingObj = {a:0};
let methodOne = (startingObj) => {
	startingObj.a = 1;

	return new Promise( (resolve, reject) => {
		resolve(startingObj);
	});
};

let methodTwo = (startingObj) => {
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			startingObj.b = 1;
			resolve(startingObj);
		}, 1000)
	});
};

let methodThree = (startingObj) => {
	startingObj.a = 0;

	return new Promise( (resolve, reject) => {
		resolve(startingObj);
	});
};

describe( 'Testing promise runner helper', () => {

	it('Input is an empty array which returns Promise and has to reject with an error', () => {
		let arrayOfMethods = [
		];

		return PromiseArrayRunner.run(arrayOfMethods, startingObj).catch((err) => {
			expect(err).to.equals(PromiseArrayRunner.errMessage);
		});
	});

	it('Input is array with one method which returns Promise and has to resolve {a:1}', () => {
		let arrayOfMethods = [
			methodOne
		];

		return PromiseArrayRunner.run(arrayOfMethods, startingObj).then( (resultObj) => {
			expect(resultObj).to.not.equal(undefined);
			expect(resultObj).to.have.property('a').to.equals(1);
		});
	});

	it('Input is array with two methods which returns Promise and has to resolve {a:1, b:1}', () => {
		let arrayOfMethods = [
			methodOne,
			methodTwo
		];

		let promise = PromiseArrayRunner.run(arrayOfMethods, startingObj);

		return promise.then((resultObj) => {
			expect(resultObj).to.not.equal(undefined);
			expect(resultObj).to.have.property('a').to.equals(1);
			expect(resultObj).to.have.property('b').to.equals(1);
		});
	});

	it('Input is array with three methods which returns Promise and has to resolve {a:0, b:1}', () => {
		let arrayOfMethods = [
			methodOne,
			methodTwo,
			methodThree
		];

		return PromiseArrayRunner.run(arrayOfMethods, startingObj).then( (resultObj) => {
			expect(resultObj).to.not.equal(undefined);
			expect(resultObj).to.have.property('a').to.equals(0);
			expect(resultObj).to.have.property('b').to.equals(1);
		});
	});
});