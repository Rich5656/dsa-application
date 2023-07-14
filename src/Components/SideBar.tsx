import { FC } from 'react'

interface SideBarProps {
  handleSideBarToggle: () => void;
  sideBarActive: boolean;
  handleDisplaySelection: () => void;
}

export const SideBar: FC<SideBarProps> = ({ handleSideBarToggle, sideBarActive, handleDisplaySelection }: SideBarProps) => {
  console.log(sideBarActive)
  return (
    sideBarActive === false ? 
      <div onClick={handleSideBarToggle} className="hamburger-menu">
        Menu
      </div>
    :
      <>    
        {/* <div onClick={handleSideBarToggle} className="hamburger-menu">
        Menu
        </div> */}
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
