const {Graph,Vertex,Edge} = require('./index');

describe('Graph', () => {

let graph = new Graph();
const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(B, G);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(F, H);
graph.addDirectedEdge(C, H);
graph.addDirectedEdge(F, E);

//An edge can be successfully added to the graph
it('can add and edge to the graph',()=>{
  let result = graph.addDirectedEdge(A,B);
  expect(result).toBeDefined();
});

it('can add vertex to the graph',()=>{
  let result = graph.addvertex('1');
  expect(console.log(result)).tobe('1');
});

it('can get Nodes from graph',()=>{
  let result = graph.getNodes();
  expect(result.next().value.value).toBe('A');
});

it('can get the size of the graph',()=>{
  let result = graph.size();
  expect(result).toBe(8);
});


});