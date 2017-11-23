const {PromiseArrayRunner} = require("promise-array-runner");

let methodOne = (startingObj) => {
    startingObj.a = 1;

    return new Promise( (resolve, reject) => {
        resolve(startingObj);
    });
};
let arrayOfMethods = [
    methodOne
];

PromiseArrayRunner.run(arrayOfMethods, {}).then( (resultObj) => {
    console.log(resultObj);
});