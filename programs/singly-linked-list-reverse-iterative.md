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
  // Reverse Linked List
  reverse() {
    this.tail = this.head;
    let prev = null;
    let current = this.head;
    let next;
    while(current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  // Print Linked List
  print() {
    let current = this.head;
    let output = [];
    while(current !== null) {
      output.push(current.data);
      current = current.next;
    }
    console.log(output.join('->'));
  }
}

// Creating a new Linked List
let ll = new LinkedList();

// Inserting Nodes
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);

// Print linked list
ll.print();
// 1->2->3->4

// Reverse the linked list
ll.reverse();

// Print linked list
// after reversing
ll.print();
// 4->3->2->1
```
