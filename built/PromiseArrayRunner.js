"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseArrayRunner = void 0;
class PromiseArrayRunner {
    static run(promiseMethods, startingObj) {
        if (promiseMethods.length === 0) {
            return new Promise((resolve, reject) => {
                reject(PromiseArrayRunner.errMessage);
            });
        }
        let returnPromise = promiseMethods[0](startingObj);
        for (let i = 1; i < promiseMethods.length; i++) {
            returnPromise = returnPromise.then((resultObj) => {
                return promiseMethods[i](resultObj);
            });
        }
        return returnPromise;
    }
}
exports.PromiseArrayRunner = PromiseArrayRunner;
PromiseArrayRunner.errMessage = 'Parameter promiseMethods is empty array';
//# sourceMappingURL=PromiseArrayRunner.js.map