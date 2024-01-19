import React, { FC, ReactElement } from 'react';
import { TreeContent } from './TreeContent';
import { GraphContent } from './GraphContent';
import { HomeContent } from './HomeContent';
import { StackQueueContainer } from '../Containers/StackQueueContainer';
import { TreeContainer } from '../Containers/TreeContainer';
import { Components, DisplayAreaProps } from '../Common/types';

export const DisplayArea: FC<DisplayAreaProps> = ({ displaySelection }: DisplayAreaProps): ReactElement => {
    const components: Components = {
        home: <HomeContent />,
        stacksQueues: <StackQueueContainer />,
        trees: <TreeContainer />,
        graphs: <GraphContent />,
        linkedLists: null
    }

  return (
    <main>
        {components[displaySelection as keyof Components]}
    </main>
  )
}
