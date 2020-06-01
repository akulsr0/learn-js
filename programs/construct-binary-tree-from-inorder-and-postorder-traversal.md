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

function buildTree(In, Post, n) {
  // Last element of postorder is root node
  // Hence creating new Node(root)
  let newNode = new Node(Post[n-1]);
  
  // Getting index of root node in
  // inorder traversal
  let iIndex = In.indexOf(Post[n-1]);
  
  // Left subarray to iIndex is left subtree
  // Getting inorder and postorder of left subtree
  let leftSubIn = In.slice(0, iIndex);
  let leftSubPost = Post.slice(0, leftSubIn.length);
  
  // Right subarray to iIndex is right subtree
  // Getting inorder and postorder of right subtree
  let rightSubIn = In.slice(iIndex+1, n);
  let rightSubPost = Post.slice(leftSubIn.length, n-1)
  
  // Recursively creating left subtree
  if(leftSubIn.length>0 && leftSubPost.length>0) {
    newNode.left = buildTree(leftSubIn, leftSubPost, leftSubIn.length);    
  }
  // Recursively creating right subtree
  if(rightSubIn.length>0 && rightSubPost.length>0) {
    newNode.right = buildTree(rightSubIn, rightSubPost, rightSubIn.length); 
  }
  
  // returning the root node
  return newNode;
}

// Preorder Traversal
function  preorder(root) {
  // Declaring an empty list for output
  let output = [];
  // Preorder Traversal:
  // Root, Left, Right
  function traverse(node) {
    output.push(node.data);
    if(node.left) {
      traverse(node.left);
    }
    if(node.right) {
      traverse(node.right);
    }
  }
  traverse(root);
  return output;
}

// Sample Inorder and Postorder 
let inorder = [3,5,6,8,11] ;
let postorder = [5,3,8,11,6];

// Building tree
let root = buildTree(inorder, postorder, inorder.length);

console.log(preorder(root));
// [6, 3, 5, 11, 8]
```

Following tree is mentioned in the program above.

<img width='200px' src='https://user-images.githubusercontent.com/43666833/83410860-c8a91400-a434-11ea-9d0c-e09e3694b017.png'>