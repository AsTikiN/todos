import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuButton as MenuButtonStyled, MenuButtonWrapper } from "../styles/Styled";
import MenuDropdown from './MenuDropdown';

const MenuButton = () => {
  const [menuStatus, changeMenuStatus] = useState(false);

  const menuDropdownList = [
    {
      id: 1,
      title: "Completed",
    },
    {
      id: 2,
      title: "In Progress",
    },
    {
      id: 3,
      title: "Removed",
    },
  ]

  const handleMenuBtnClick = (e) => {
    e.stopPropagation();
    changeMenuStatus(!menuStatus)

    window.addEventListener("click", () => {
      changeMenuStatus(false);
    }, {once: true}) 
  }
  
  return (
    <div style={{position: "relative"}}>
      <MenuButtonWrapper active = {menuStatus} onClick={handleMenuBtnClick}>
        <MenuButtonStyled active = {menuStatus} />
      </MenuButtonWrapper>  
      <MenuDropdown dropdownList={menuDropdownList} activeStatus = {menuStatus} />
    </div> 
    
   );
}
 
export default MenuButton;