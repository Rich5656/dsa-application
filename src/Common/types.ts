
import { Node } from './Utils';
import React, { FC, MouseEvent, ReactElement } from 'react'

export interface NodeDisplayProps {
    rootNode: Node;
    targetFound: boolean;
};

export interface TreeContentProps {
    rootNode: Node;
    targetFound: boolean;
    handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    handleTreeSearch: (e: MouseEvent<HTMLButtonElement>) => void ;
}

export interface Components {
    home: ReactElement;
    stacksQueues: ReactElement;
    trees: ReactElement;
    graphs: ReactElement;
    linkedLists: null;
}

export interface DisplayAreaProps {
    displaySelection: string;
}

export interface SideBarProps {
    handleSideBarToggle: () => void;
    sideBarActive: boolean;
    handleDisplaySelection: () => void;
}

export interface SideBarContainterProps {
    handleDisplaySelection: () => void;
  }

export interface StackQueueContentProps {
    stackOptions: string[];
    stack: string[];
    queueOptions: string[];
    queue: string[];
    handleStackPush: () => void;
    handleStackPop: () => void;
    handleQueuePop: () => void;
    handleQueuePush: () => void;
  }

export type QueueExampleProps = Partial<StackQueueContentProps>;

export type StackExampleProps = Partial<StackQueueContentProps>;

export type TreeFunctionalityProps = Partial<TreeContentProps>;

