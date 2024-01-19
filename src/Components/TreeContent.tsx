import React, { FC, MouseEvent } from 'react'
import { NodeDisplay } from './NodeDisplay'; 
import { Node } from '../Common/Utils';
import { TreeFunctionality } from './TreeFunctionality';
import { TreeContentProps } from '../Common/types';
import { nodeCreation, bfs } from "../Common/textConstants";

export const TreeContent = ({rootNode, targetFound, handleSearchInputChange, handleTreeSearch}: TreeContentProps) => {
  return (
    <section className='display-area'>
      <h1 className='display-title'>Binary Tree</h1>
      <p className='display-text-body'>
      Trees are a type of data structure that relates data through a parent-child relationship. Trees consists of nodes and will have one node that acts as the source or root of the tree. This source node is were you can begin an algorithm and start to do a tree traversal.As the you traverse the tree, you will work your way down each branch towards the leaves, which are the nodes that have no children.
      </p>
      <p className="display-text-body">
        Let's take a look at how to build a tree. Trees are made up of nodes where each node is an object that contains a value, left child, and a right child. Below shows how to implement this in java script by creating a node class.
      </p>
      <figure className="code-section display-text-body">     
        <code className='code-display multiline'>
          {nodeCreation}
        </code>
      </figure>

      <p className='display-text-body'>
          Great we now have a tree. But it isn't much use to have a tree if we don't know how to navigate it. This is where algorithms come to the rescue. Now it is time to learn how to write algorithms that allow us to traverse our tree data strcutures. Trees have two primary traversal methods: 1) Depth First Search (DFS) and 2) Breadth first search (BFS). 
      </p>
      <p className='display-text-body'>
          BFS is an algorithm that traverses a tree by starting at a root node and first looking at both of the current node's child nodes before moving down to the next level of the tree. BFS has an implementation that takes advantage of a queue data structure to to itterate through the nodes of the tree. Here is an example of what BFS looks like coded out.
      </p>
      <figure className="code-section display-text-body">     
        <code className='code-display multiline'>
          {bfs}
        </code>
      </figure>
      <TreeFunctionality handleSearchInputChange={handleSearchInputChange} handleTreeSearch={handleTreeSearch}/>
      <NodeDisplay rootNode={rootNode} targetFound={targetFound}/>
    </section>
  )
}
