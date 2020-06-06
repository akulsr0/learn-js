```javascript
// Node Class
class Node {
  // Constructor for Node
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// BinaryTree Class
class BinaryTree {
  // Constructor for Node
  constructor() {
    this.root = null;
  }
  // Inorder Traversal
  inorder() {
    // Declaring an empty list for output
    let output = [];
    // Inorder Traversal:
    // Left, Root, Right
    function traverse(node) {
      if(node.left) {
        traverse(node.left);
      }
      output.push(node.data);
      if(node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return output;
  }
  // If Inorder traversal of binary tree is
  // sorted, then its a BST.
  checkBST() {
    let inorder = this.inorder();
    let sortedInorder = this.inorder().sort((x,y)=>x-y);
    return inorder.join()===sortedInorder.join();
  }
}

// Creating a new Binary Tree
let bt = new BinaryTree();

// Adding some nodes
bt.root = new Node(10);
bt.root.left = new Node(5);
bt.root.right = new Node(15);

// Checking for BST (fig. a)
console.log(bt.checkBST());
// true

// Now its no more BST (fig. b)
bt.root.left.left = new Node(11);

// Checking for BST (fig. b)
console.log(bt.checkBST());
// false
```

Following trees are mentioned in above code.

![](https://user-images.githubusercontent.com/43666833/83417634-00698900-a440-11ea-98a5-2245e33c8a9b.png)