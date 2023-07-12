import React, { FC } from 'react'

export const GraphContent: FC = () => {
  return (
    <>
        <h1 className='display-title'>Graphs</h1>
        <p className='display-text-body'>
            Graphs are similar to trees in the way that the are constructed with nodes that connect to other nodes. However, graphs 
            are less restrained in their relationships with other nodes than trees are. The nodes of a graph can have as many relationships
            as are necessary. These realtionships can also have some limitations depending on whether the graph is directed or undirected. 
        </p>
        <p className='display-text-body'>
            Directed: a type of graph where the graph is related in unidrectional manner that dictates which nodes can be travled to.
              
        </p>
        <p className='display-text-body'>
          Undirected: a type of graph where as long as a node is connected to another node, it can be traveled to in either direction.
          This is important to undrestand because it creates problems where cycles can exist, so make sure you know what type of graph
          you are dealing with before you begin a traversal. 
        </p>
    </>
  )
}
