import './App.css';
import { useState } from 'react';
import { SideBarContainer } from './Containers/SideBarContainer';
import { DisplayArea } from './Components/DisplayArea';

function App() {
  const [ displaySelection, setDisplaySection ] = useState('home');

  const handleDisplaySelection = (event) => {
    setDisplaySection(event.target.id)
  }

  return (
    <div>
      <SideBarContainer handleDisplaySelection={handleDisplaySelection}/>
      <DisplayArea displaySelection={displaySelection} />
    </div>
  );
}

export default App;
