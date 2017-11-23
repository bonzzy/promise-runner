export class PromiseArrayRunner {
    static errMessage = 'Parameter promiseMethods is empty array';
    /**
     *
     * @param promiseMethods
     * @param {{}} startingObj
     * @return {Promise<any>}
     */
    static run( promiseMethods: { ({}): Promise<any>; } [], startingObj: {}): Promise<any> {
        if (promiseMethods.length === 0) {
            return new Promise((resolve, reject)=>{
                reject(PromiseArrayRunner.errMessage)
            });
        }
        return _runMethods(promiseMethods, startingObj);
    }

}

function _runMethods(promiseMethods: { ({}): Promise<any>; } [], params: {}, currentIndex = 0): Promise<any> {
    return promiseMethods[currentIndex](params).then( (params) => {

        if ( currentIndex < promiseMethods.length-1) {
            return _runMethods(promiseMethods, params, currentIndex +1);
        }

        return new Promise((resolve, reject) => {
            resolve(params);
        });
    });
}