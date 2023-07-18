import React, {FC, ReactElement} from 'react'
import { StackExample } from './StackExample';
import { QueueExample } from './QueueExample';

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

export const StackQueueContent: FC<StackQueueContentProps> = ({ 
  stackOptions, stack, queueOptions, queue, handleStackPush, handleStackPop, handleQueuePop, handleQueuePush 
}: StackQueueContentProps): ReactElement => {
  return (
    <>
      <section className='display-area'>
        <header>
          <h1 className='display-title'>Stacks and Queues</h1>
        </header>    

        <p className='display-text-body'>
            Stacks and Queues are data structures that utilize arrays in different ways to allow for quick insertion and removal
            of desired items. They do this by using Last In First Out (Stacks) and First In Frist Out (Queues) methods. While this is 
            a rather basic data structure, it is very uselful and being comfortable with both of these is critical in some algorithms
            like Depth First Search and Breadth First Search (see Trees or Graphs for more details).
        </p>
        <p className='display-text-body'>
            <strong>Stack:</strong><br/>
            Stacks ustilize a method known as LIFO (Last In First Out). This means that when you preform a pop operation it will remove
            the item that is at the top of the stack. It also means that when you push items to the stack, the new item will be placed at
            the top. Play around with the demo bellow to get a feel for how this works! 
        </p>
        <StackExample
          handleStackPush={handleStackPush}
          handleStackPop={handleStackPop}
          stack={stack}
          stackOptions={stackOptions}
        />
        <QueueExample 
          handleQueuePush={handleQueuePush}
          handleQueuePop={handleQueuePop}
          queue={queue}
          queueOptions={queueOptions}
        />
      </section> 
    </>
  )
}
