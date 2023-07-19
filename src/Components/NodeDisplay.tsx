import { FC } from 'react';
import { Node } from '../Containers/TreeContainer';
import { TreeContentProps } from './TreeContent';

type NodeDisplayProps = TreeContentProps;


export const NodeDisplay = ({rootNode}: NodeDisplayProps)  => {
  // perform a DFS to render out all of the nodes
  const dfs = (current: Node | null): JSX.Element => {
    // base case to return if both children are null
    if (current?.children[0] === null && current.children[1] === null)  {
        return (
            <li>
                <a href="#">{current.value}</a>
            </li>
        )
    }

    return(
            <li>
                <a href="#">{current?.value}</a>
                <ul>
                    {current?.children.map(node => {
                        return dfs(node);
                    })}
                </ul>
            </li>
    )

    // const stack: Array<Node | undefined> = [rootNode];

    // while (stack.length) {
    //     // pop to get current value
    //     const currNode: Node | undefined = stack.pop();
    //     console.log(currNode?.value)
        
    //     // add to the stack if child values exist
    //     if (currNode?.leftChild !== null) {
    //         stack.push(currNode?.leftChild)
    //     }
    //     if (currNode?.rightChild !== null) {
    //         stack.push(currNode?.rightChild)
    //     }
    // }
  }

//   dfs(rootNode);

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
