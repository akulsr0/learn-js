```javascript
// Node Class
class Node {
  // Constructor for new Node
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

// Linked List Class
class LinkedList {
  // Constructor for Linked List
  constructor() {
    this.headNode = null;
    this.lastNode = null;
  }
  // Adding New Node to Linked List
  addNode(data) {
    if (this.lastNode === null) {
      this.headNode = new Node(data);
      this.lastNode = this.headNode;
    } else {
      this.lastNode.next = new Node(data);
      this.lastNode = this.lastNode.next;
    }
  }
  // Deleting a node from Linked List
  deleteNode(data) {
    let head = this.headNode;
    if (head.data === data) {
      this.headNode = this.headNode.next;
    } else {
      while (head.next.data !== data) {
        head = head.next;
      }
      head.next = head.next.next;
    }
  }
  // Printing The Linked List
  printLinkedList() {
    let head = this.headNode;
    let output = [];
    while (head !== null) {
      output.push(head.data);
      head = head.next;
    }
    console.log(output.join(' '));
  }
}

// Creating a new Linked List
let ll = new LinkedList();

// Adding Nodes
ll.addNode(2); // ll: 2
ll.addNode(4); // ll: 2->4
ll.addNode(6); // ll: 2->4->6
ll.addNode(8); // ll: 2->4->6->8

// Printing Linked List
ll.printLinkedList(); // 2 4 6 8

ll.deleteNode(6); // ll: 2->4->8

// Printing Linked List Again
ll.printLinkedList(); // 2 4 8
```
