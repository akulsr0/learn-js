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
  // Get element by index
  get(i) {
    if(i<0 || i>this.length) return null
    if(i <= this.length/2) {
      let count = 0;
      let tempHead = this.head;
      while(count != i) {
        tempHead = tempHead.next;
        count++;
      }
      return tempHead;
    } else {
      let count = this.length-1;
      let tempHead = this.tail;
      while(count != i) {
        tempHead = tempHead.prev;
        count--;
      }
      return tempHead;
    }
  }
  // Insert Node at given index
  insertAt(i, val) {
    if(i<0 || i>this.length) {
      return null;
    } else if(i===0) {
      this.insertHead(val);
    } else if(i===this.length) {
      this.insert(val)
    } else {
      // We have to insert between before and after
      // i.e. before <-> newNode <-> after
      let newNode = new Node(val);
      let before = this.get(i-1);
      let after = before.next;
      before.next = newNode;
      newNode.prev = before;
      newNode.next = after;
      after.prev = newNode;
      this.length++;
      return newNode;
    }
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

// Suppose we have to add a node between 15 and 20
// i.e. at index 2
dll.insertAt(2, 50);

// Printing DLL after inserting node at index 2
dll.print();
// 10 <-> 15 <-> 50 <-> 20 <-> 25
```
