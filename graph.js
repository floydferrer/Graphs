class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray) {
      this.nodes.add(vertex)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1); 
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
    vertex.adjacent.clear();
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const toVisitStack = [start];
    const seen = new Set();
    const results = [];
  
    while(toVisitStack.length > 0) {
      let currentVertex = toVisitStack.pop();
      seen.add(currentVertex)

      for(let neighbor of currentVertex.adjacent) {
        if(!seen.has(neighbor) && toVisitStack.indexOf(neighbor) === -1) toVisitStack.push(neighbor)
      }
    }
    for(let s of seen) {
      results.push(s.value)
    }
    return results;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const toVisitStack = [start];
    const seen = new Set();
    const results = [];
  
    while(toVisitStack.length > 0) {
      let currentVertex = toVisitStack.shift();
      seen.add(currentVertex)

      for(let neighbor of currentVertex.adjacent) {
        if(!seen.has(neighbor) && toVisitStack.indexOf(neighbor) === -1) toVisitStack.push(neighbor)
      }
    }
    for(let s of seen) {
      results.push(s.value)
    }
    return results;
  }
}

module.exports = {Graph, Node}