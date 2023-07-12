import React, {FC, ReactElement} from 'react'

interface StackQueueContentProps {
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
        <h1 className='display-title'>Stacks and Queues</h1>
        <p className='display-text-body'>
            Stacks and Queues are data structures that utilize arrays in different ways to allow for quick insertion and removal
            of desired items. They do this by using Last In First Out (Stacks) and First In Frist Out (Queues) methods. While this is 
            a rather basic data structure, it is very uselful and being comfortable with both of these is critical in some algorithms
            like Depth First Search and Breadth First Search (see Trees or Graphs for more details).
        </p>
        <p className='display-text-body'>
            Stack:
            Stacks ustilize a method known as LIFO (Last In First Out). This means that when you preform a pop operation it will remove
            the item that is at the top of the stack. It also means that when you push items to the stack, the new item will be placed at
            the top. Play around with the demo bellow to get a feel for how this works! 
        </p>
      
      {/* give this its own component */}
          <div className='interactive-buttons'>
            <button id='add-stack' onClick={handleStackPush}>
              Push to stack
            </button>
            <button id='remove-stack' onClick={handleStackPop}>
              Pop from stack
            </button>
          </div>
          <div className="code-section display-text-body">        
            <code className='code-display'>
              {`// items ready to be pushed [${stackOptions}]`} <br />
              {`const stack = [${stack}]`} <br />
              {'// code to push to the stack:'} <br />
              {'stack.push()'} <br />
              {'// code when you pop from the stack (remove last element of array):'} <br />
              {'stack.pop()'} <br />
            </code>
          </div>

          {/* <div className='stack-demo'>
            {stack.toReversed().map(item => <div>{item}</div>)}
          </div> */}
          {/* give this its own component */}
          <div className="interactive-buttons">
            <button id='add-queue' onClick={handleQueuePush}>
              Push to queue
            </button>
            <button id='remove-queue' onClick={handleQueuePop}>
              Pop from queue
            </button>
          </div>
          <div className="code-section display-text-body">        
            <code className='code-display'>
              {`// items ready to be pushed [${queueOptions}]`} <br />
              {`const queue = [${queue}]`} <br />
              {'// code to push to the queue:'} <br />
              {'queue.push()'} <br />
              {'// code to pop from the queue (remove first element of array):'} <br />
              {'queue.shift()'} <br />
            </code>
          </div>
          {/* <div className="queue-demo">
            {queue.toReversed().map(item => <div>{item}</div>)}
          </div> */}  
    </>
  )
}
