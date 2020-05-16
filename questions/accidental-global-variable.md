Why in the following code example a is not defined but b is

```javascript
function fun() {
  let a=b=10;
}

fun()

console.log("a: ", a)
// ReferenceError: a is not defined

console.log("b: ", b)
// b: 10

```

**Answer**

This statement inside function fun()

```javascript
let a=b=10;
```

can be break down into two statements, i.e.

```javascript
let b = 10 // global scope
let a = b // fun() scope
```

Hence, a is not available in global scope while b is available.

That's why on printing a and b in global scope b is printed but a says that it is not defined.

**Solution**

To prevent your code from creating global variables accidentally, you can use strict mode.

Add following line at top of your code -

```javascript
'use strict'
```