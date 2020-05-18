```javascript
// Graph Class
class Graph {
  // Constructor for Graph
  constructor() {
    this.AdjList = new Map();
  }
  // Adding a new Vertex(v)
  addVertex(v) {
    this.AdjList.set(v, []);
  }
  // Adding an edge from source(src)
  // to destination(dest)
  addEdge(src, dest) {
    this.AdjList.get(src).push(dest);
    this.AdjList.get(dest).push(src);
  }
  // Print the Graph
  printGraph() {
    let keys = this.AdjList.keys();
    for (let key of keys) {
      let values = this.AdjList.get(key);
      console.log(`${key} -> ${values.join(' ')}`);
    }
  }
  // Breadth First Search
  bfs(startNode) {
    let q = [];
    let visited = new Set();
    q.push(startNode);
    visited.add(startNode);
    let bfsOutput = [];
    while (q.length !== 0) {
      let ele = q.shift();
      bfsOutput.push(ele);
      this.AdjList.get(ele)
        .filter((n) => !visited.has(n))
        .forEach((n) => {
          visited.add(n);
          q.push(n);
        });
    }
    console.log('BFS:', bfsOutput.join(' '));
  }
  // Get no. of vertices in Graph
  getSize() {
    return this.AdjList.size;
  }
}

// Creating a new Graph
let g = new Graph();

// Adding vertices to graph
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');

// Adding edges to graph
g.addEdge('A', 'C');
g.addEdge('C', 'D');
g.addEdge('C', 'B');

g.bfs('A');
// BFS: A C D B
```

Following graph is demonstrated in the code above.
Note: This is an undirected Graph.

<img width="150px" src="https://user-images.githubusercontent.com/43666833/82234116-94225c00-994e-11ea-8d95-b489ee2c5d40.png">
