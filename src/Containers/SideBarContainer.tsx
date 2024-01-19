import React, { useState } from 'react'
import { SideBar } from '../Components/SideBar'
import { SideBarContainterProps } from '../Common/types';

export const SideBarContainer = ({ handleDisplaySelection }: SideBarContainterProps) => {
  const [ sideBarActive, setSideBarActive ] = useState(false);

  const handleSideBarToggle = () => {
    setSideBarActive(prevState => !prevState);
  };

  return (
    <SideBar handleSideBarToggle={handleSideBarToggle}  sideBarActive={sideBarActive} handleDisplaySelection={handleDisplaySelection} />
  )
}
