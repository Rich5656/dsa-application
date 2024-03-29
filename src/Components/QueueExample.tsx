import React  from 'react';
import { QueueExampleProps } from '../Common/types';

export const QueueExample = ({handleQueuePush, handleQueuePop, queue, queueOptions}: QueueExampleProps)  => {
  const queueCode = `// items ready to be pushed [${queueOptions}] \nconst queue = [${queue}] \n\n// code to push to the queue:\nqueue.push()\n\n// code when you pop from the queue (remove last element of array):\nqueue.pop()`

    return (
      <>
          <p><strong>Queue Example:</strong></p>
        <div className="interactive-buttons">
          
          <button id='add-queue' className='stack-queue-button button-basic' onClick={handleQueuePush}>
            Push to queue
          </button>
          <button id='remove-queue' className='stack-queue-button button-basic' onClick={handleQueuePop}>
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
