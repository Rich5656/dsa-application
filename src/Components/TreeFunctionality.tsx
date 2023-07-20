import React from 'react'

interface TreeFunctionalityProps {
  handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // TODO: dont leave this as any!!
}
export const TreeFunctionality = ({handleSearchInputChange}: TreeFunctionalityProps) => {
  return (
    <div className='tree-functionality'>
        {/* TODO: CHECK IF A NUMBER IS IN TREE */}
        <div className="search-tree">
          Search Number(0-100):
          <input onChange={handleSearchInputChange} defaultValue='20' className='search-tree-input' type="number" max={100} min={0} />
          <button>Search</button>
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
