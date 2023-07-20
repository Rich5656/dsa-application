import React, { useState, MouseEvent } from 'react'
import { TreeContent } from '../Components/TreeContent';
import { VoidExpression } from 'typescript';

export class Node {
    value: number
    children: [Node | null, Node | null]
    style: string
    leftChild: Node | null;
    rightChild: Node | null
    constructor(value: number) {
      this.value = value;
      this.style = 'standard'
      this.children = [null, null]
      this.leftChild = null;
      this.rightChild = null;
    }
};

export const TreeContainer = () => {
    const rootNode  = new Node(20);
    const leftNode = new Node(15);
    const rightNode = new Node(23);
    const node4 = new Node(5);
    const node5 = new Node(16);
    const node6 = new Node(22);
    const node7 = new Node(30);
    rootNode.children[0] = leftNode;
    rootNode.children[1] = rightNode;
    leftNode.children[0] = node4;
    leftNode.children[1] = node5;
    rightNode.children[0] = node6;
    rightNode.children[1] = node7;

    const [treeSearchInput, setTreeSearchInput] = useState<number>();
    const [targetFound, setTargetFound] = useState<boolean>(false);
    console.log(treeSearchInput)


    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTreeSearchInput(Number(e.target.value));
    };

    const handleTreeSearch = (e: MouseEvent<HTMLButtonElement>): void  => {
        e.preventDefault();
        // TODO this should perform a dfs that higlights node divs orange while visiting in the search and adds gree styling if it 
        // finds the correct value and returns a message if the node is not found in tree.
        const dfs = (root: Node, tragetValue: number | undefined): void => {
            console.log('running dfs')
            if (root === null) return;
            if (root.value === tragetValue) {
                console.log('found target node')
                // perform found function
                root.style = 'found';
                setTargetFound(prevState => !prevState);
                return;
            }
        }        
        dfs(rootNode, treeSearchInput);
        
    };
  

    return (
        <TreeContent rootNode={rootNode} targetFound={targetFound} handleSearchInputChange={handleSearchInputChange} handleTreeSearch={handleTreeSearch}/>
    )
}
