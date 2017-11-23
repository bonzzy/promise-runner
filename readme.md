**Promise Array runner**
======
`let arrayOfMethods = [
 			methodOne,
 			methodTwo
 		];`
 		
 `let promise = PromiseRunner.run(arrayOfMethods, startingObj);`
 
 `promise.then((resultObj) => { });`
 
 
 _Parameter startingObj is piping through promise methods. So every method in array should be like:_
 
 `let methodOne = (startingObj) => {
 return new Promise( (resolve, reject) => {
  		resolve(startingObj);
  	});`
  };
  
  [Link to example](https://runkit.com/bonzzy/runkit-npm-promise-array-runner)