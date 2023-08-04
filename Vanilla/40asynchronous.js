// Synchronous
console.log("Synchronous 1");

// Asynchronous macrotask (gets called after the start of a new event loop)
setTimeout(() => console.log("Timeout 2"),0);

// Asynchronous microtask (gets called before the start of a new event loop )
Promise.resolve().then(() => console.log("Promise 3"));

// Synchronous
console.log("Synchronous 4");
