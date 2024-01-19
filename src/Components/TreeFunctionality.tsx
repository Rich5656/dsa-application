import React from 'react'
import { TreeFunctionalityProps } from '../Common/types';
 
export const TreeFunctionality = ({handleSearchInputChange , handleTreeSearch}: TreeFunctionalityProps) => {
  return (
    <div className='tree-functionality'>
        {/* TODO: CHECK IF A NUMBER IS IN TREE */}
        <div className="search-tree">
          Search Number(0-100):
          <input onChange={handleSearchInputChange} defaultValue='20' className='search-tree-input' type="number" max={100} min={0} />
          <button onClick={handleTreeSearch}>Search</button>
        </div>
        {/* TODO: DFS ILLUSTRATION */}
        <div className="dfs-bfs-tree">
          <button>DFS</button>
        </div>
        {/* TODO: BFS ILLUSTRATION */}
        <div className="dfs-bfs-tree">
          <button>BFS</button>
        </div>
        {/* TODE: PRORDER, POSTORDER, ADN INORDER TRAV IF TIME PERMITS */}
    </div>
  )
}
