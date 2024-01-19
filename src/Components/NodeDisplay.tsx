import React from 'react';
import { Node } from '../Common/Utils';
import { TreeContentProps } from '../Common/types';
import { NodeDisplayProps } from '../Common/types';


export const NodeDisplay = ({rootNode}: NodeDisplayProps)  => {
  console.log('node display render')
  // perform a DFS to render out all of the nodes
  const dfs = (current: Node | null): JSX.Element => {
    // base case where the current child is null and nothing should be rendered
    if (current === null) return <></>;

    // base case to return if both children are null
    if (current.children[0] === null && current.children[1] === null)  {
        return (
            <li>
                <div className={current.style}>{current.value}</div>
            </li>
        );
    }
    console.log(`${current.style}`)

    // make a recursive call to keep rendering children nodes
    return(
            <li className='main-tree-container'>
                <div className={'node ' +  current.style}>{current?.value}</div>
                <ul>
                    {current.children.map(node => {
                        return dfs(node);
                    })}
                </ul>
            </li>
    );
  }

  return (
    <>
        <div className="tree">
            <ul>
            {dfs(rootNode)}
            </ul>
        </div>
    </>
  )
}
