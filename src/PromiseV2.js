class PromiseV2 {
    /**
     * The constructor initializes the promise with an executor function and sets the initial state to 'pending'.
     * The executor is expected to handle asynchronous operations.
     */
    constructor(executor) {
        /**
         * Tracks the current state of the promise ('pending', 'fulfilled', or 'rejected').
         */
        this.state = 'pending';

        /**
         * Stores the result or reason for fulfillment or rejection of the promise.
         */
        this.value = undefined;

        /**
         * Holds the callbacks for fulfillment or rejection, which will be executed when the promise settles.
         */
        this.handlers = [];

        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }

    /**
     * Changes the state of the promise to 'fulfilled' and executes all stored 'onFulfilled' callbacks.
     * @param {*} value - The value to fulfill the promise with.
     */
    resolve(value) {
        if (this.state !== 'pending') return;

        this.state = 'fulfilled';
        this.value = value;

        this.handlers.forEach((handler) => {
            if (handler.onFulfilled) {
                handler.onFulfilled(value);
            }
        });
    }

    /**
     * Changes the state of the promise to 'rejected' and executes all stored 'onRejected' callbacks.
     * @param {*} reason - The reason for rejecting the promise.
     */
    reject(reason) {
        if (this.state !== 'pending') return;

        this.state = 'rejected';
        this.value = reason;

        this.handlers.forEach((handler) => {
            if (handler.onRejected) {
                handler.onRejected(reason);
            }
        });
    }

    /**
     * Registers callbacks to be executed when the promise is fulfilled or rejected.
     * Returns a new promise for chaining.
     * @param {Function} [onFulfilled] - Callback for when the promise is fulfilled.
     * @param {Function} [onRejected] - Callback for when the promise is rejected.
     * @returns {PromiseV2} - A new promise instance.
     */
    then(onFulfilled, onRejected) {
        return new PromiseV2((resolve, reject) => {
            const handler = {
                onFulfilled: (value) => {
                    try {
                        if (typeof onFulfilled === 'function') {
                            const result = onFulfilled(value);
                            resolve(result);
                        } else {
                            resolve(value);
                        }
                    } catch (error) {
                        reject(error);
                    }
                },
                onRejected: (reason) => {
                    try {
                        if (typeof onRejected === 'function') {
                            const result = onRejected(reason);
                            resolve(result);
                        } else {
                            reject(reason);
                        }
                    } catch (error) {
                        reject(error);
                    }
                },
            };

            if (this.state === 'pending') {
                this.handlers.push(handler);
            } else if (this.state === 'fulfilled' && handler.onFulfilled) {
                handler.onFulfilled(this.value);
            } else if (this.state === 'rejected' && handler.onRejected) {
                handler.onRejected(this.value);
            }
        });
    }

    /**
     * A shorthand for registering a rejection callback.
     * Equivalent to calling 'then' with 'null' as the first argument.
     * @param {Function} onRejected - Callback for when the promise is rejected.
     * @returns {PromiseV2} - A new promise instance.
     */
    catch(onRejected) {
        return this.then(null, onRejected);
    }

    /**
     * Registers a callback to be executed when the promise settles, regardless of its outcome.
     * @param {Function} onFinally - Callback to be executed when the promise settles.
     * @returns {PromiseV2} - A new promise instance.
     */
    finally(onFinally) {
        return this.then(
            (value) => {
                if (typeof onFinally === 'function') {
                    onFinally();
                }
                return value;
            },
            (reason) => {
                if (typeof onFinally === 'function') {
                    onFinally();
                }
                throw reason;
            }
        );
    }
}

module.exports = { PromiseV2 };