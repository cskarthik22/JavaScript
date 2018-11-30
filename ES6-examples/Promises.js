/* Promises exists in one of 3 states
 - unresolved state - waiting for something to finish
 - resolved -> Then()
 - rejected -> catch()
*/

// In ES6

let promise = new Promise((resolve,reject) => {
reject();
});

promise.then(()=> {
    console.log("REsolved !!!")
}).then(()=> {
    console.log("REsolved again !!!")
}).catch(()=> {
    console.log("REJECTED !!!")
})

console.log(promise);
