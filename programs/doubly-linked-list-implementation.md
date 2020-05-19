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
  // Delete Tail Node from DLL
  delete() {
    if(!this.head) return undefined;
    let delNode = this.tail;
    if(this.length===1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = delNode.prev;
      this.tail.next = null;
      delNode.prev = null;
    }
    this.length--;
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

dll.insert(10); // 10
dll.insert(15); // 10 <-> 15
dll.insert(20); // 10 <-> 15 <-> 20
dll.insert(25); // 10 <-> 15 <-> 20 <-> 25

dll.delete(); // 10 <-> 15 <-> 20

dll.print()
// '10 <-> 15 <-> 20'
```
