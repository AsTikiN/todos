import React from 'react';
import { MenuWrapper, TitleWrapper, TodosTitle } from "../styles/Styled";
import Calendar from './Calendar';
import MenuButton from "../components/MenuButton";

const TodosMenu = () => {
  return ( 
    <MenuWrapper>
      <TitleWrapper>
        <Calendar />
        <TodosTitle>Today</TodosTitle>
      </TitleWrapper>
      <MenuButton />
    </MenuWrapper>
   );
}
 
export default TodosMenu;