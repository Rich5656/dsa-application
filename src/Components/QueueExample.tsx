import React  from 'react';
import { StackQueueContentProps } from './StackQueueContent';

type QueueExampleProps = Partial<StackQueueContentProps>;

export const QueueExample = ({handleQueuePush, handleQueuePop, queue, queueOptions}: QueueExampleProps)  => {
    const queueCode = `// items ready to be pushed [${queueOptions}] \nconst queue = [${queue}] \n\n// code to push to the queue:\nqueue.push()\n\n// code when you pop from the queue (remove last element of array):\nqueue.pop()`

    return (
      <>
          <p><strong>Queue Example:</strong></p>
        <div className="interactive-buttons">
          
          <button id='add-queue' className='stack-queue-button' onClick={handleQueuePush}>
            Push to queue
          </button>
          <button id='remove-queue' className='stack-queue-button' onClick={handleQueuePop}>
            Pop from queue
          </button>
        </div>
        <figure className="code-section display-text-body">        
          <code className='code-display multiline'>
            {queueCode}
          </code>
        </figure>
      </>
    )
}
