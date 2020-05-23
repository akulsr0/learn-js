```javascript
// Max Binary Heap Class
class MaxBinaryHeap {
  // Constructor for MaxBinaryHeap
  constructor() {
    this.values = [];
  }
  // Inserting data in heap
  insert(data) {
    this.values.push(data);
    // Building Max Heap
    this.buildMaxHeap();
  }
  // Function to build MaxBinaryHeap
  buildMaxHeap() {
    // Initialising i and e as inserted element's
    // index and value respectively.
    let i = this.values.length -1;
    let e = this.values[i];
    while(i>0) {
      // Getting parent index and value of
      // element at index i
      let parentIndex = Math.floor((i-1)/2);
      let parent = this.values[parentIndex];
      // If element e is less than or equal
      // to parent, break out of loop.
      if(e <= parent) {
        break;
      }
      // If element e is greater than
      // parent, swap them.
      this.values[i] = parent;
      this.values[parentIndex] = e;
      // Change index i to parent's index
      i = parentIndex
    }
  }
}

// Create a new Binary Heap
let heap = new MaxBinaryHeap();

heap.insert(12)
heap.insert(10)
heap.insert(15)
heap.insert(11)
heap.insert(20)

console.log(heap.values)
// [ 20, 15, 12, 10, 11 ]
```
