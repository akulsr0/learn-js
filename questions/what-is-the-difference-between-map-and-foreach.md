### map():
- map() calls the provided function for each array element and returns a new array of results.
- It returns a new array.
- It can be chained with other methods.
  
### forEach():
- forEach() calls the provided for each array element but does not returns a new array.
- It returns undefined.
- It cannot be chained further.

```javascript
let nums = [1,2,3,4,5]

let twoTimesNums = nums.map(n => n*2) 
console.log(twoTimesNums) // [2,4,6,8,10]

// Similar thing using forEach
let twoTimesNumsFE = []
nums.forEach(n => {
  twoTimesNumsFE.push(n*2)
})
console.log(twoTimesNumsFE) // [2,4,6,8,10]

// Chaining
let sum = nums.map(n => n*2).reduce((sum, acc) => sum+acc)
console.log(sum) // 30

// Chaining not applicable in forEach as it returns undefined.
```