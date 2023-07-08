import React, { useState } from 'react'
import { StackQueueContent } from '../Components/StackQueueContent'

export const StackQueueContainer = () => {
  const [ stackOptions, setStackOptions ] = useState(['d' ,'c', 'b', 'a'])
  const [ stack, setStack ] = useState([]);
  const [ queueOptions, setQueueOptions ] = useState(['d' ,'c', 'b', 'a'])
  const [ queue, setQueue ] = useState([]);


  const handleQueuePush = () => {
    setQueueOptions(prevState => {
        const currentOption = prevState.pop();
        
        setQueue(prevState => {
            if (currentOption === undefined) {
                return [...prevState]
            }
            return [...prevState, currentOption]
        })

        return [...prevState]
    })
  }

  const handleQueuePop = () => {
    setQueue(prevState => {
        const currentOption = prevState.shift();

        setQueueOptions(prevState => {
            if (currentOption === undefined) {
                return [...prevState];
            } 
            return [currentOption, ...prevState];
        });

        return [...prevState];
    });
  }

  const handleStackPush = () => {
    setStackOptions(prevState => {
        const currentOption = prevState.pop();

        setStack(prevState => {
            if (currentOption === undefined) {
                return [...prevState];
            } 
            return [...prevState, currentOption];
        });

        return [...prevState];
    });
  }

  const handleStackPop = () => {
    setStack(prevState => {
        const currentOption = prevState.pop();

        setStackOptions(prevState => {
            if (currentOption === undefined) {
                return [...prevState];
            } 
            return [...prevState, currentOption];
        });

        return [...prevState];
    });
  }

  return (
    <StackQueueContent
        stackOptions={stackOptions}
        stack={stack} 
        queueOptions={queueOptions}
        queue={queue}   
        handleStackPush={handleStackPush}
        handleStackPop={handleStackPop}
        handleQueuePush={handleQueuePush}
        handleQueuePop={handleQueuePop}
    />
  );
};
