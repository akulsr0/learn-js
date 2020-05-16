```javascript
let queue = []

console.log("Initially Queue: ", queue)
// 'Initially Queue: ' []

// Inserting Element in Queue
queue.push(1)
queue.push(2)
queue.push(3)

// After inserting elements
console.log("After Enqueue: ", queue)
// 'After Enqueue: ' [ 1, 2, 3 ]

// Deleting Element from Queue
let delElement = queue.shift()
console.log("Deleted Element: ", delElement)
// 'Deleted Element: ' 1

// After deleting element
console.log("After Dequeue: ", queue)
// 'After Dequeue: ' [ 2, 3 ]
```