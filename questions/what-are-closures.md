```
// When a function remembers it's lexical scope even when it is executed out of its lexical scope, closure persists.

const outerFunction = (...args) => {
	let counter = 0;
	return () => {
		console.log(args[0]);
		console.log(counter++);
	};
};

const innerFunction = outerFunction('Incrementing counter');
innerFunction();
innerFunction();
innerFunction();
innerFunction();

// Output:
// Incrementing counter
// 0
// Incrementing counter
// 1
// Incrementing counter
// 2
// Incrementing counter
// 3

```
