import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeFilter } from '../store/actions/actionCreator';
import { MenuDropdownList, MenuDropdownItem } from '../styles/Styled';

const MenuDropdown = ({dropdownList, activeStatus}) => {

  const dispatch = useDispatch();
  const changeTodoStatus = bindActionCreators(changeFilter, dispatch);

  const handleDropdownItemClick = (e) => {
    let newFilter = e.target.innerText;

    if(newFilter !== "Removed") {
      changeTodoStatus(newFilter)
    } else {
      changeTodoStatus(null)
    }

  }

  return ( 
    <MenuDropdownList active = {activeStatus}> 
      {
        dropdownList.map(dropdownItem => {
          return (
          <MenuDropdownItem key={dropdownItem.id} onClick={handleDropdownItemClick}>
            {
              dropdownItem.title
            }
          </MenuDropdownItem>
        )})
      }
    </MenuDropdownList>
   );
}
 
export default MenuDropdown;