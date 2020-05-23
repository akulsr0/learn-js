```javascript
// Class Node
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
    this.last = null;
  }
  // Insert Nodes into LinkedList
  insert(data) {
    let newNode = new Node(data);
    if(this.last === null) {
      this.head = newNode;
      this.last = this.head;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
  }
  // Sort a LinkedList
  sort() {
    // Creating an empty array
    let arr = [];
    // Pushing each element of 
    // linked list to array
    let current = this.head;
    while(current !== null) {
      arr.push(current.data);
      current = current.next;
    }
    // Sorting the array
    arr.sort((a,b) => a-b);
    // Changing each node's data
    // as per the sorted array
    current = this.head;
    let c = 0;
    while(current !== null) {
      current.data = arr[c];
      c++;
      current = current.next;
    }
    // Returning the linked list
    return this;
  }
  // Print a LinkedList
  print() {
    let head = this.head;
    let output = [];
    while (head !== null) {
      output.push(head.data);
      head = head.next;
    }
    console.log(output.join('->'));
  }
}

// Merge two or more LinkedLists
// in sorted order
function sortedMerge(...args) {
  // Creating an empty array
  let tempArr = []
  // Pushing data of each node of
  // each linked list to tempArr
  for(let arg of args) {
    let current = arg.head;
    while(current !== null) {
      tempArr.push(current.data)
      current = current.next;
    }
  }
  // Sorting tempArr
  tempArr.sort((a,b) => a-b)
  // Creating a new LinkedList
  let newL = new LinkedList();
  // For each element in tempArr
  // Inserting into LinkedList (newL)
  for(let e of tempArr) {
    newL.insert(e);
  }
  // Returning New LinkedList (newL)
  return newL;
}

// Creating LinkedList 1 (l1)
let l1 = new LinkedList();
l1.insert(10);
l1.insert(30);
l1.insert(8);

// Printing LinkedList 1 (l1)
l1.print()
// '10->30->8'

// Creating LinkedList 2 (l2)
let l2 = new LinkedList();
l2.insert(13);
l2.insert(5);
l2.insert(24);

// Printing LinkedList 2 (l2)
l2.print()
// '13->5->24'

// Merging both linkedlists in 
// sorted order
let sl = sortedMerge(l1,l2)

// Printing merged linkedlist
sl.print()
// '5->8->10->13->24->30'
```
