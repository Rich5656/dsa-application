import React, {useState} from 'react'
import { TreeContent } from '../Components/TreeContent';

export class Node {
    value: number
    children: [Node | null, Node | null]
    leftChild: Node | null;
    rightChild: Node | null
    constructor(value: number) {
      this.value = value;
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
    rootNode.children[0] = leftNode;
    rootNode.children[1] = rightNode;
    leftNode.children[0] = node4;
    leftNode.children[1] = node5;
    // rootNode.leftChild = leftNode;
    // rootNode.rightChild = rightNode;  
  

    return (
        <TreeContent rootNode={rootNode} />
    )
}
