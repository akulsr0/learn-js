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

function buildTree(In, Pre, n) {
  // First element of preorder is root node
  // Hence creating new Node(root)
  let newNode = new Node(Pre[0]);
  
  // Getting index of root node in
  // inorder traversal
  let iIndex = In.indexOf(Pre[0]);
  
  // Left subarray to iIndex is left subtree
  // Getting inorder and preorder of left subtree
  let leftSubIn = In.slice(0, iIndex);
  let leftSubPre = Pre.slice(1, leftSubIn.length+1);
 
  // Right subarray to iIndex is right subtree
  // Getting inorder and preorder of right subtree
  let rightSubIn = In.slice(iIndex+1, n);
  let rightSubPre = Pre.slice(leftSubIn.length+1, n);
  
  // Recursively creating left subtree
  if(leftSubIn.length>0 && leftSubPre.length>0) {
    newNode.left = buildTree(leftSubIn, leftSubPre, leftSubIn.length);
  }
  // Recursively creating right subtree
  if(rightSubIn.length>0 && rightSubPre.length>0) {
    newNode.right = buildTree(rightSubIn, rightSubPre, rightSubIn.length);
  }
  // returning the root node
  return newNode;
}

// Postorder Traversal
function postorder(root) {
  // Declaring an empty list for output
  let output = [];
  // Postorder Traversal:
  // Left, Right, Root
  function traverse(node) {
    if(node.left) {
      traverse(node.left);
    }
    if(node.right) {
      traverse(node.right);
    }
    output.push(node.data);
  }
  traverse(root);
  return output;
}

// Sample Inorder and Preorder
let inorder = [3,5,6,8,11];
let preorder = [6,3,5,11,8];

// Building tree
let root = buildTree(inorder, preorder, inorder.length);

console.log(postorder(root));
// [5, 3, 8, 11, 6]
```

Following tree is mentioned in the program above.

<img width='200px' src='https://user-images.githubusercontent.com/43666833/83410860-c8a91400-a434-11ea-9d0c-e09e3694b017.png'>