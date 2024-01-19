import { FC } from 'react'
import { SideBarProps } from '../Common/types';

export const SideBar: FC<SideBarProps> = ({ handleSideBarToggle, sideBarActive, handleDisplaySelection }: SideBarProps) => {
  console.log(sideBarActive)
  return (
    sideBarActive === false ? 
      <button onClick={handleSideBarToggle} className="hamburger-menu">
        Menu
      </button>
    :
      <>    
      {/* TODO: MAKE SURE THAT NONE OF THE NAV LINKS ARE DIVS!!!! */}
        <nav className="sidebar">
          <div onClick={handleSideBarToggle} className="hamburger-menu">
          Menu
          </div>
          <div id='stacksQueues' onClick={handleDisplaySelection} className="sidebar-link">Stacks/Queues</div>
          <div id='linkedLists' onClick={handleDisplaySelection} className="sidebar-link">Linked Lists</div>
          <div id='trees' onClick={handleDisplaySelection} className="sidebar-link">Trees</div>
          <div id='graphs' onClick={handleDisplaySelection} className="sidebar-link">Graphs</div>
        </nav>
      </>
  )
  
}
