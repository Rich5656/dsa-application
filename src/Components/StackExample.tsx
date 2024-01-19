import React, { FC, ReactElement } from 'react'
import { inherits } from 'util';
import { StackExampleProps } from '../Common/types';

export const StackExample = ({handleStackPush, handleStackPop, stack, stackOptions}: StackExampleProps) => {
  const stackCode = `// items ready to be pushed [${stackOptions}] \nconst stack = [${stack}] \n\n// code to push to the stack:\nstack.push()\n\n// code when you pop from the stack (remove last element of array):\nstack.pop()`

  return (
    <>
        <p><strong>Stack Example:</strong></p>
        <div className='interactive-buttons'>
          <button id='add-stack' className='stack-queue-button button-basic' onClick={handleStackPush}>
            Push to stack
          </button>
          <button id='remove-stack' className='stack-queue-button button-basic' onClick={handleStackPop}>
            Pop from stack
          </button>
        </div>
        <figure className="code-section display-text-body">        
          <code className='code-display multiline'>
            {stackCode}         
          </code>
        </figure>
    </>
  )
}
