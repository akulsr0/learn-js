Currying is a way of constructing functions that allows partial application of a function’s arguments.

What this means is that you can pass all of the arguments a function is expecting and get the result, or pass a subset of those arguments and get a function back that’s waiting for the rest of the arguments. It really is that simple.

This function requires both the name and the greeting to be passed as arguments in order to work properly

```js
var greet = function (greeting, name) {
  console.log(greeting + ' ' + name); // Output: Hello Tom
};

greet('Hello', 'Tom');
```

But we could rewrite this function using simple nested currying, so that the basic function only requires a greeting, and it returns another function that takes the name of the person we want to greet.

```js
var greet = function (greeting) {
  return function (name) {
    console.log(greeting + ' ' + name); // Output: Hello Tom
  };
};

var greetHello = greet('Hello');
greetHello('Tom');
```

Let’s takes another example of currying.

In this example, the sum function only requires a first value, and it returns another function that takes the second value and returns the sum

```js
function sum(a) {
  return function (b) {
    return a + b;
  };
}

var sumWithTwo = sum(2);
console.log(sumWithTwo(3)); // Output: 5
```

Another way of calling sum function without assigning in a variable.

```js
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(2)(3)); // Output: 5
```