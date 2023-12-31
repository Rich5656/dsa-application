import './App.css';
import React, { FC, useState } from 'react';
import { SideBarContainer } from './Containers/SideBarContainer';
import { DisplayArea } from './Components/DisplayArea';


const App: FC = () => {
  const [ displaySelection, setDisplaySection ] = useState('home');

  const handleDisplaySelection: any = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplaySection(event.target.id)
  }

  return (
    <>
      <SideBarContainer handleDisplaySelection={handleDisplaySelection}/>
      <DisplayArea displaySelection={displaySelection} />
    </>
  );
}

export default App;
