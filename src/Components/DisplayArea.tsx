import React, { FC, ReactElement } from 'react';
import { TreeContent } from './TreeContent';
import { GraphContent } from './GraphContent';
import { HomeContent } from './HomeContent';
import { StackQueueContainer } from '../Containers/StackQueueContainer';

export interface DisplayAreaProps {
  displaySelection: string;
}

export interface Components {
  home: ReactElement;
  stacksQueues: ReactElement;
  trees: ReactElement;
  graphs: ReactElement;
  linkedLists: null;
}

export const DisplayArea: FC<DisplayAreaProps> = ({ displaySelection }: DisplayAreaProps): ReactElement => {
    const components: Components = {
        home: <HomeContent />,
        stacksQueues: <StackQueueContainer />,
        trees: <TreeContent />,
        graphs: <GraphContent />,
        linkedLists: null
    }

  return (
    <main>
        {components[displaySelection as keyof Components]}
    </main>
  )
}
