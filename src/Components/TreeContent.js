import React from 'react'

export const TreeContent = () => {
  return (
    <>
      <h1 className='display-title'>Binary Tree</h1>
      <p className='display-text-body'>
          Trees are a type of data structure that relates data through a parent-child relationship. Trees consists of nodes and will have
          one node that acts as the source or root of the tree. This source node is were you can begin an algorithm and start to do a tree traversal.
          As the you traverse the tree, you will work your way down each branch towards the leaves, which are the nodes that have no children. 
      </p>
      <p className='display-text-body'>
          A tree has two primary traversal methods: 1) Depth First Search (DFS) and 2) Breadth first search (BFS).  
      </p>
    </>
  )
}
