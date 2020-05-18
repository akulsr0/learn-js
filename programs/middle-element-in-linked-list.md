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
  // Get Middle Element
  getMiddleElement() {
    let size = this.getSize();
    let mid = Math.floor(size/2)
    let head = this.headNode;
    for(let i=0; i<mid+1; i++) {
      if(i===mid) {
        console.log(head.data)
      } else {
        head = head.next
      }
    }
  }
  // Get no. of nodes in Linked List
  getSize() {
    let count = 0;
    let head = this.headNode;
    while(head!==null) {
      count = count + 1;
      head = head.next;
    }
    return count;
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
ll.addNode(10) // ll: 2->4->6->8->10

// Printing Linked List
ll.printLinkedList(); // 2 4 6 8 10

// Get Middle Element of Linked List
ll.getMiddleElement(); // 6
```