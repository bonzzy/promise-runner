"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PromiseRunner {
    static run(promiseMethods, startingObj) {
        if (promiseMethods.length === 0) {
            return new Promise((resolve, reject) => {
                reject(PromiseRunner.errMessage);
            });
        }
        return _runMethods(promiseMethods, startingObj);
    }
}
PromiseRunner.errMessage = 'Parameter promiseMethods is empty array';
exports.PromiseRunner = PromiseRunner;
function _runMethods(promiseMethods, params, currentIndex = 0) {
    return promiseMethods[currentIndex](params).then((params) => {
        if (currentIndex < promiseMethods.length - 1) {
            return _runMethods(promiseMethods, params, currentIndex + 1);
        }
        return new Promise((resolve, reject) => {
            resolve(params);
        });
    });
}
//# sourceMappingURL=PromiseRunner.js.map