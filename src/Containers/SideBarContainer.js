import React, { useState } from 'react'
import { SideBar } from '../Components/SideBar'

export const SideBarContainer = ({ handleDisplaySelection }) => {
  const [ sideBarActive, setSideBarActive ] = useState(false);

  const handleSideBarToggle = () => {
    setSideBarActive(prevState => !prevState);
  };

  return (
    <SideBar handleSideBarToggle={handleSideBarToggle}  sideBarActive={sideBarActive} handleDisplaySelection={handleDisplaySelection} />
  )
}
