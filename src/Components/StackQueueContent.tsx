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
            Stacks utilize a method known as LIFO (Last In First Out). This means that when you preform a pop operation it will remove
            the item that is at the top of the stack. It also means that when you push items to the stack, the new item will be placed at
            the top. Play around with the demo below to get a feel for how this works! 
        </p>
        <StackExample
          handleStackPush={handleStackPush}
          handleStackPop={handleStackPop}
          stack={stack}
          stackOptions={stackOptions}
        />
        <p className='display-text-body'>
            <strong>Queue:</strong><br/>
            Queues utilize a method known as FIFO (First In First Out). The most common example of a queue in real life is waiting in a
            line at the store, where the first person in line is helped before the cashier moves on to the next. Queues in JavaScript are implemented in 
            a similar way to stacks since they both make use of arrays. The primary difference here is that popping from a queue will remove
            the first item in the array rather than the last. Push operations, however, still function in the exact same way as they did
            in a stack, where the item being pushed is added as the last element in the array. Play around with the demo below to get a feel for how this works! 
        </p>
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
