```javascript
// Node Class
class Node {
  // Constructor for Node
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList Class
class LinkedList {
  // Constructor for LinkedList
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Inserting data in LinkedList
  insert(data) {
    if(this.tail===null) {
      this.head = new Node(data);
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
      this.length++;
    }
  }
  // Print whole LinkedList
  print() {
    let current = this.head;
    let output = [];
    while(current !== null) {
      output.push(current.data);
      current = current.next;
    }
    console.log(output.join('->'))
  }
  // Print nth node of LinkedList
  printNthNode(n) {
    if(n>this.length || n<0) {
      return null;
    }
    let current = this.head;
    let count = 1;
    while(count!==n) {
      count++;
      current = current.next;
    }
    console.log(current.data);
  }
}

// Creating a new LinkedList
let ll = new LinkedList();

// Inserting elements
ll.insert(10);
ll.insert(20);
ll.insert(8);
ll.insert(13);

// Printing LinkedList
ll.print();
// '10->20->8->13'

// Printing nth node
// of LinkedList
ll.printNthNode(3)
// 8
```
