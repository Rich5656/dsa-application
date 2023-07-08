import React from 'react'

export const SideBar = ({ handleSideBarToggle, sideBarActive, handleDisplaySelection }) => {
  console.log(sideBarActive)
  return (
    sideBarActive === false ? 
      <div onClick={handleSideBarToggle} className="hamburger-menu">
        Menu
      </div>
    :
      <>    
        <div onClick={handleSideBarToggle} className="hamburger-menu">
        Menu
        </div>
        <div className="sidebar">
          <div id='stacksQueues' onClick={handleDisplaySelection} className="sidebar-link">Stacks/Queues</div>
          <div id='linkedLists' onClick={handleDisplaySelection} className="sidebar-link">Linked Lists</div>
          <div id='trees' onClick={handleDisplaySelection} className="sidebar-link">Trees</div>
          <div id='graphs' onClick={handleDisplaySelection} className="sidebar-link">Graphs</div>
        </div>
      </>
  )
  
}
