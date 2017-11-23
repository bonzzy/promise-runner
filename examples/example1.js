const {PromiseRunner} = require("promise-array-runner");

let methodOne = (startingObj) => {
    startingObj.a = 1;

    return new Promise( (resolve, reject) => {
        resolve(startingObj);
    });
};
let arrayOfMethods = [
    methodOne
];

PromiseRunner.run(arrayOfMethods, {}).then( (resultObj) => {
    console.log(resultObj);
});