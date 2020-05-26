```javascript
// Node Class
class Node {
  // Constructor for Node
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List Class
class LinkedList {
  // Constructor for Linked List
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // Insert node into Linked List
  insert(data) {
    if(this.tail === null) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
    }
  }
  // Checking if linked list
  // has a loop
  checkLoop() {
    let s = new Set();
    let current = this.head;
    while(current !== null) {
      if(s.has(current)) {
        return true;
      }
      s.add(current);
      current = current.next;
    }
    return false;
  }
}

// Creating a new Linked List
let ll = new LinkedList();

// Inserting Nodes
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);

// Check Loop before
// creating a loop
ll.checkLoop();
// false

// Creating a loop
ll.head.next.next.next.next = ll.head.next

// Check Loop after
// creating a loop
ll.checkLoop();
// true
```

Following loop is created in the above code.

![](https://user-images.githubusercontent.com/43666833/82942161-2a8cf800-9fb5-11ea-99b4-7650ba660b2a.png)