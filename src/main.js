// Importing the PromiseV2 class
// Assume the async version is in a separate file named 'PromiseV2Async.js' and the current version is in 'PromiseV2.js'
const { PromiseV2 } = require('./PromiseV2');
const { PromiseV2Async } = require('./PromiseV2Async');

// Synchronous-like example with the original PromiseV2
console.log('--- Demo with PromiseV2 ---');
console.log('Creating a synchronous-like promise using PromiseV2.');
const syncPromise = new PromiseV2((resolve, reject) => {
    const success = true;
    if (success) {
        resolve('Operation succeeded (sync)');
    } else {
        reject('Operation failed (sync)');
    }
});

syncPromise
    .then((result) => {
        console.log(`First then: ${result}. This demonstrates the success case of the promise.`);
        return 'Chained result (sync)';
    })
    .then((chainedResult) => {
        console.log(`Second then: ${chainedResult}. This shows how promises can chain results.`);
    })
    .catch((error) => {
        console.error(`Error: ${error}. This will only execute if the promise is rejected.`);
    })
    .finally(() => {
        console.log('Finished (sync)! This block executes regardless of success or failure.');
    });

// Asynchronous example with PromiseV2Async
console.log('\n--- Demo with PromiseV2Async ---');
console.log('Creating an asynchronous promise using PromiseV2Async with a delay of 1 second.');
const asyncPromise = new PromiseV2Async((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Operation succeeded (async)');
        } else {
            reject('Operation failed (async)');
        }
    }, 1000);
});

asyncPromise
    .then((result) => {
        console.log(`First then: ${result}. Demonstrates how async operations resolve with a delay.`);
        return 'Chained result (async)';
    })
    .then((chainedResult) => {
        console.log(`Second then: ${chainedResult}. This showcases chaining in an asynchronous context.`);
    })
    .catch((error) => {
        console.error(`Error: ${error}. This will only execute if the async operation fails.`);
    })
    .finally(() => {
        console.log('Finished (async)! This block executes regardless of the outcome of the promise.');
    });
