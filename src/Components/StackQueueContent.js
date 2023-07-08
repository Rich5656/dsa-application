import React from 'react'

export const StackQueueContent = ({ 
  satckOpitons, stack, queueOptions, queue, handleStackPush, handleStackPop, handleQueuePop, handleQueuePush 
}) => {
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
        <section className='dsa-demo-section'>
          <div className='interactive-buttons'>
            <button id='add-stack' onClick={handleStackPush}>
              Push to stack
            </button>
            <button id='remove-stack' onClick={handleStackPop}>
              Pop from stack
            </button>
          </div>
          <div className='stack-demo'>
            {stack.toReversed().map(item => <div>{item}</div>)}
          </div>

          <div className="interactive-buttons">
            <button id='add-queue' onClick={handleQueuePush}>
              Push to stack
            </button>
            <button id='remove-queue' onClick={handleQueuePop}>
              Pop from stack
            </button>
          </div>
          <div className="queue-demo">
            {queue.map(item => <div>{item}</div>)}
          </div>
          <code>
            {`const queue = []`} <br />
            {'more code '} <br />
            {'more code '} <br />
          </code>



        </section>
    </>
  )
}
