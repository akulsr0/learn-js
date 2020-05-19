```javascript
// Node Class
class Node {
  // Constructor for Node
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

// DoublyLinkedList Class
class DoublyLinkedList {
  // Constructor for DLL
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Insert Node at end of DLL
  insert(data) {
    let newNode = new Node(data);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  // Insert a new node at beginning of DLL
  insertHead(data) {
    let newNode = new Node(data);
    if(this.head === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  // Print the DLL
  print() {
    let head = this.head;
    let dllOutput = [];
    while(head!==null) {
      dllOutput.push(head.data)
      head = head.next
    }
    console.log(dllOutput.join(' <-> '))
  }
}

// Creating a new DoublyLinkedList
let dll = new DoublyLinkedList()

// Inserting Some Nodes
dll.insert(10); // 10
dll.insert(15); // 10 <-> 15
dll.insert(20); // 10 <-> 15 <-> 20
dll.insert(25); // 10 <-> 15 <-> 20 <-> 25

// Printing DLL after inserting Nodes
dll.print();
// '10 <-> 15 <-> 20 <-> 25'

// Inserting a new node at beginning of DLL
dll.insertHead(5); // 5 <-> 10 <-> 15 <-> 20 <-> 25

// Printing DLL after removing head node
dll.print()
// '5 <-> 10 <-> 15 <-> 20 <-> 25'
```
