import {FC,  ReactElement,  useState } from 'react'
import { StackQueueContent } from '../Components/StackQueueContent'


export const StackQueueContainer: FC = (): ReactElement => {
  const [ stackOptions, setStackOptions ] = useState<string[] | never[]>(['a' ,'b', 'c', 'd'])
  const [ stack, setStack ] = useState<string[] | never[]>([]);
  const [ queueOptions, setQueueOptions ] = useState<string[] | never[]>(['a' ,'b', 'c', 'd'])
  const [ queue, setQueue ] = useState<string[] | never[]>([]);


  const handleQueuePush = () => {
    setQueueOptions(prevState => {
        const currentOption = prevState.shift();
        
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
            return [...prevState, currentOption];
        });

        return [...prevState];
    });
  }

  const handleStackPush = () => {
    setStackOptions(prevState => {
        const currentOption = prevState.shift();

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
            return [currentOption, ...prevState];
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
