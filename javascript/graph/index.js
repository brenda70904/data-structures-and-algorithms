'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    // Map is a hash table with key value pairs
    this.adjacencyList = new Map();
  };

  addVertex(value) {
    const vertex = new Vertex(value);
    // [] is going to hold all the edges for this vertex
    this.adjacencyList.set(vertex, []);
    return vertex;
  };

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    // find the vertex we want ot connect and grab it's edge array
    // notice there is no validation here ... yet
    const neighbor = this.adjacencyList.get(startVertex);
    neighbor.push(new Edge(endVertex, weight));
  };

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  };

  getNodes() {
    let iterator = this.adjacencyList.keys();
    return iterator;

  }

  breadthFirst(root, callback) {
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;
    while (queue.length) {
      // the first time, we pop the vertex
      current = queue.pop();
      // if callback exist, we use it to 'do the things'
      if (callback) callback(current.value);

      //grab neighbor if it exists
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          queue.unshift(edge.vertex); // add to the front of the queue
        }
      }
    }
    return visited;
  };

  depthFrist(root, callback){
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(stack.length){
      // the first tiime, we pop the vertex
      current = stack.pop();
      
      // if a callback exist, we use it to "do the things"

      if(callback){
        callback(current.value);      
      }

      //grab neighbor if it exists
      const neighbors = this.getNeighbors(current);
      for(let edge of neighbors){
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          stack.push(edge.vertex); // add to the end of the stack
        }
      }
    }
    return visited;
  }

  
  // size() {
  //   let count = 0;
  //   let iterator = this.getNodes();
  //   for (let item of iterator) {
  //     count++;
  //   }
  //   return count;
  // }

  size(){
    return this.adjacencyList.size;
  }
}

module.exports= {Graph,Vertex,Edge};