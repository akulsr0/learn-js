### indexOf() - 

- The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

- It takes element to locate in array as parameter.

### findIndex()-

- The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.

- It takes a callback function as a parameter

```javascript
let arr = [-3, 4, -2, 6, 7, -1]

console.log(arr.indexOf(4))
// 1

console.log(arr.findIndex(4))
// TypeError: 4 is not a function

let isPositive = e => e>0
console.log(arr.findIndex(isPositive))
// 1
```
