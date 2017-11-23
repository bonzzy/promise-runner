"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PromiseArrayRunner {
    static run(promiseMethods, startingObj) {
        if (promiseMethods.length === 0) {
            return new Promise((resolve, reject) => {
                reject(PromiseArrayRunner.errMessage);
            });
        }
        return _runMethods(promiseMethods, startingObj);
    }
}
PromiseArrayRunner.errMessage = 'Parameter promiseMethods is empty array';
exports.PromiseArrayRunner = PromiseArrayRunner;
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
//# sourceMappingURL=PromiseArrayRunner.js.map