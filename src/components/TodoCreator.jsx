import React, { useState } from 'react';
import { TodoCreateBtn, TodoCreatorWrapper, TodoAddPlus } from "../styles/Styled";
import TodosCreateInput from './TodosCreateInput';

const TodoCreator = () => {

  const [modalStatus, setModalStatus] = useState(false);

  const handleAddBtnClick = (e) => {
    setModalStatus(true);
  }

  return (
    <TodoCreatorWrapper>
      <TodoCreateBtn onClick={handleAddBtnClick}>
        Create New Item
      </TodoCreateBtn>
      <TodoAddPlus/>
      {
        modalStatus
        && <TodosCreateInput setModalStatus = {setModalStatus} />
      }
    </TodoCreatorWrapper>
   );
}
 
export default TodoCreator;