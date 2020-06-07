```javascript
let digits = '12345';

let iter = digits[Symbol.iterator]();
let char = iter.next();

console.log(typeof char.value);
```
