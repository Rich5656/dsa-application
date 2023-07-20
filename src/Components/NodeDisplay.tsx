import React from 'react';
import { Node } from '../Containers/TreeContainer';
import { TreeContentProps } from './TreeContent';

interface NodeDisplayProps {
    rootNode: Node;
};


export const NodeDisplay = ({rootNode}: NodeDisplayProps)  => {
  // perform a DFS to render out all of the nodes
  const dfs = (current: Node | null): JSX.Element => {
    // base case where the current child is null and nothing should be rendered
    if (current === null) return <></>;

    // base case to return if both children are null
    if (current.children[0] === null && current.children[1] === null)  {
        return (
            <li>
                <div >{current.value}</div>
            </li>
        );
    }

    // make a recursive call to keep rendering children nodes
    return(
            <li className='main-tree-container'>
                <div className='node'>{current?.value}</div>
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
            {/* <ul>
                <li>
                    <a href="#">Root node</a>
                    <ul>
                        <li>
                            <a href="#">left child</a>
                            <ul>
                                <li>
                                    <a href="#">another child</a>
                                </li>
                                <li>
                                    <a href="#">and another</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">right child</a>
                        </li>
                    </ul>
                </li>
            </ul> */}
        </div>
    </>
  )
}
