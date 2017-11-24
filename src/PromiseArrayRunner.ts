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

        let returnPromise = promiseMethods[0](startingObj);

        for (let i=1; i<promiseMethods.length; i++) {
            returnPromise = returnPromise.then( (resultObj) => {
                return promiseMethods[i](resultObj);
            });
        }

        return returnPromise;
    }

}