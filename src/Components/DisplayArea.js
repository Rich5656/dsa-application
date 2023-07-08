import React from 'react'
import { TreeContent } from './TreeContent'
import { GraphContent } from './GraphContent'
import { HomeContent } from './HomeContent'
import { StackQueueContainer } from '../Containers/StackQueueContainer'

export const  DisplayArea = ({ displaySelection }) => {
    const components = {
        home: <HomeContent />,
        stacksQueues: <StackQueueContainer />,
        trees: <TreeContent />,
        graphs: <GraphContent />,
        linkedLists: null
    }

  return (
    <div className='display-area'>
        {components[displaySelection]}
    </div>
  )
}
