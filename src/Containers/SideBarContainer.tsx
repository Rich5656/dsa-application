import React, { useState } from 'react'
import { SideBar } from '../Components/SideBar'

interface SideBarContainterProps {
  handleDisplaySelection: () => void;
}

export const SideBarContainer = ({ handleDisplaySelection }: SideBarContainterProps) => {
  const [ sideBarActive, setSideBarActive ] = useState(false);

  const handleSideBarToggle = () => {
    setSideBarActive(prevState => !prevState);
  };

  return (
    <SideBar handleSideBarToggle={handleSideBarToggle}  sideBarActive={sideBarActive} handleDisplaySelection={handleDisplaySelection} />
  )
}
