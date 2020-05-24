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
    return output.join('->');
  }
  // Check if LinkedList is palindrome
  isPalindrome() {
    let currentLL = this.print();
    let revCurrentLL = currentLL
        .split('->')
        .reverse()
        .join('->');
    if(currentLL === revCurrentLL) {
      return true;
    }
    return false;
  }
}

// Creating a new LinkedList
let ll = new LinkedList();

// Inserting elements
ll.insert(1);
ll.insert(2);
ll.insert(2);
ll.insert(1);

// Printing LinkedList
console.log(ll.print())
// '1->2->2->1'

console.log(ll.isPalindrome());
// true

// Now testing for non-
// palindromic LinkedList
ll.insert(5);
console.log(ll.print());
// '1->2->2->1->5'

console.log(ll.isPalindrome())
// false
```
