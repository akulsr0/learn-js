```javascript
// Node Class
class Node {
  // Constructor for Node
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

// BST Class
class BinarySearchTree {
  // Constructor for BST
  constructor() {
    this.root = null;
  }
  // Inserting Elements in BST
  insert(val) {
    // Creating the new Node
    let newNode = new Node(val)
    // If tree is empty i.e. root node is null
    if(this.root === null) {
      // Insert new Node as Root Node
      this.root = newNode;
      return this;
    } else {
      // Initialize current as root node
      let current = this.root;
      while(true) {
        if(val < current.data) {
          // Checking if new node value is less
          // than current node's value
          if(current.left === null) {
            // If there is no left subtree,
            // Insert node as left child and return BST
            current.left = newNode;
            return this;
          } else {
            // If there is left subtree, change
            // current to current.left
            current = current.left;
          }
        } else {
          // If new node value is greater than
          // current node's value
          if(current.right === null) {
            // If there is no right subtree,
            // Insert node as right child and return BST
            current.right = newNode;
            return this;
          } else {
            // If there is right subtree, change
            // current to current.right
            current = current.right;
          }
        }
      }
    }
  }
  // Breadth First Search of BST
  bfs() {
    let node = this.root;
    let queue = [];
    let output = [];
    queue.push(node);
    while(queue.length!==0) {
      node = queue.shift();
      output.push(node.data);
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }
    return output;
  }
}

// Creating a Binary Search Tree
let bst = new BinarySearchTree();

// First node will be inserted 
// as root node
bst.insert(100);

// Inserting more nodes...
bst.insert(50);
bst.insert(150);
bst.insert(175);
bst.insert(130);
bst.insert(60);
bst.insert(20);

// Getting BFS of tree
bst.bfs();
// [100,50,150,20,60,130,175]
```

Following tree is demonstrated in the code above.

![](https://user-images.githubusercontent.com/43666833/82456922-73830f00-9ad2-11ea-8462-6735e2ec415a.png)
