# PromiseV2 Implementation

## Overview
This project demonstrates a custom implementation of the `Promise` mechanism in JavaScript. It provides two versions:

1. **PromiseV2** - A synchronous-like custom implementation for understanding the core mechanics of promises.
2. **PromiseV2Async** - An asynchronous version that emulates real-world async behavior.

The project includes example usage for both versions to showcase their functionality and features.

## Features
- Implements promise states: `pending`, `fulfilled`, and `rejected`.
- Supports `then`, `catch`, and `finally` methods for chaining and handling outcomes.
- Demonstrates how promises can be chained and handle success/failure cases.
- Includes examples for both synchronous-like and asynchronous behavior.

## File Structure
- `PromiseV2.js`: The custom synchronous-like promise implementation.
- `PromiseV2Async.js`: The asynchronous version of the promise implementation.
- `main.js`: Example usage of both `PromiseV2` and `PromiseV2Async`.

## Getting Started
### Prerequisites
- Node.js (version 12 or higher recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/maorilevi/promise-v2.git
   cd promise-v2
   ```
2. Install any dependencies if applicable (none required for this project).

### Usage
Run the examples provided in the `main.js` file:
```bash
node main.js
```
You will see output demonstrating the functionality of both `PromiseV2` and `PromiseV2Async`.

## Example Output
### Synchronous-like PromiseV2
```
--- Demo with PromiseV2 ---
Creating a synchronous-like promise using PromiseV2.
First then: Operation succeeded (sync). This demonstrates the success case of the promise.
Second then: Chained result (sync). This shows how promises can chain results.
Finished (sync)! This block executes regardless of success or failure.
```

### Asynchronous PromiseV2Async
```
--- Demo with PromiseV2Async ---
Creating an asynchronous promise using PromiseV2Async with a delay of 1 second.
First then: Operation succeeded (async). Demonstrates how async operations resolve with a delay.
Second then: Chained result (async). This showcases chaining in an asynchronous context.
Finished (async)! This block executes regardless of the outcome of the promise.
```

## About the Author
This project was created by **Maor Levi**, a Senior Fullstack Developer. With expertise in JavaScript, Node.js, and modern web development practices, Maor brings a deep understanding of both front-end and back-end systems. The custom implementation of promises in this project showcases their commitment to learning, teaching, and exploring core JavaScript concepts.

---
For questions, feedback, or collaboration opportunities, feel free to reach out!

