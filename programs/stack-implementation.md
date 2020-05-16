```javascript
let stack = []

console.log("Initially Stack: ", stack)
// 'Initially Stack: ' []

// Push
stack.push(1)
stack.push(2)
stack.push(3)

// After Push
console.log("After Push: ", stack)
// 'After Push: ' [ 1, 2, 3 ]

// Pop
let poppedValue = stack.pop()
console.log("Popped Value: ", poppedValue)
// 'Popped Value: ' 3

// After Pop
console.log("After Pop: ", stack)
// 'After Pop: ' [ 1, 2 ]

// Peek
Array.prototype.peek = function() {
  return this[this.length-1]
}
console.log("Peek: ", stack.peek())
// 'Peek: ' 2

// After Peek
console.log("After Peek: ", stack)
// 'After Peek: ' [ 1, 2 ]

```