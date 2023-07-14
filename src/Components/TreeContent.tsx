import React, { FC } from 'react'
import { NodeDisplay } from './NodeDisplay'; 

const nodeCreation =  `class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
};

// now lets use this to create our souce node (I chose to use a number as the 
// value here but any type could be used depending on what
// is being represented)
const rootNode = new Node(5);

// Nice! Now we have our root node but it has no children. Lets add the children.
// First we will need two new Node objects to add
// create two new node objects
const child1 = new Node(4);
const child2 = new Node(6);

// Now that we have two Nodes to add, we can make our root refrence these as children
rootNode.leftChild = child1;
rootNode.rightChild = child2;   
`

const bfs = `const bfs = (rootNode) => {
  // create a queue that has an initial value of the tree's root node
  const queue = [ rootNode ];

  // continue to itterate as long as there is a node in the queue
  while (queue.length > 0) {
    // remove the first item from the queue to get the current node
    const currentNode = queue.shift();

    // this is the point where you would want to conduct checks or preform some sort of operation on the data
    console.log(currentNode.value);

    // finally we need to add both of the current node's children to the queue if the children exist
    if (currentNode.leftChild !== null) {
      queue.push(currentNode.leftChild);
    }
    if (currentNode.rightChilde !== null) {
      queue.push(currentNode.rightChild);
    }
  }
} 
`

export const TreeContent: FC = () => {
  return (
    <>
      <h1 className='display-title'>Binary Tree</h1>
      <p className='display-text-body'>
      Trees are a type of data structure that relates data through a parent-child relationship. Trees consists of nodes and will have one node that acts as the source or root of the tree. This source node is were you can begin an algorithm and start to do a tree traversal.As the you traverse the tree, you will work your way down each branch towards the leaves, which are the nodes that have no children.
      </p>
      <p className="display-text-body">
        Let's take a look at how to build a tree. Trees are made up of nodes where each node is an object that contains a value, left child, and a right child. Below shows how to implement this in java script by creating a node class.
      </p>
      <div className="code-section display-text-body">     
        <code className='code-display multiline'>
          {nodeCreation}
        </code>
      </div>

      <p className='display-text-body'>
          Great we now have a tree. But it isn't much use to have a tree if we don't know how to navigate it. This is where algorithms come to the rescue. Now it is time to learn how to write algorithms that allow us to traverse our tree data strcutures. Trees have two primary traversal methods: 1) Depth First Search (DFS) and 2) Breadth first search (BFS). 
      </p>
      <p className='display-text-body'>
          BFS is an algorithm that traverses a tree by starting at a root node and first looking at both of the current node's child nodes before moving down to the next level of the tree. BFS has an implementation that takes advantage of a queue data structure to to itterate through the nodes of the tree. Here is an example of what BFS looks like coded out.
      </p>
      <div className="code-section display-text-body">     
        <code className='code-display multiline'>
          {bfs}
        </code>
      </div>
      <NodeDisplay />
    </>
  )
}
