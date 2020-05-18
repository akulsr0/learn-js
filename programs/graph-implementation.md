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

// Print the graph
g.printGraph();
// A -> C
// B -> C
// C -> A D B
// D -> C
```

Following graph is demonstrated in the code above.
Note: This is an undirected Graph.

<img width="150px" src="https://user-images.githubusercontent.com/43666833/82234116-94225c00-994e-11ea-8d95-b489ee2c5d40.png">
