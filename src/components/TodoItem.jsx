import React, { useEffect, useState } from 'react';

import { TodoItem as TodoItemStyled, TodoItemCheckbox, TodoItemRemoveBtn } from '../styles/Styled';

import { changeItemStatus, removeTodo } from '../store/actions/actionCreator';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

const TodoItem = ({item, index: elementIndex}) => {
  const [activeTodo, setActiveTodo] = useState(false);
  const [crossBtn, setCrossBtn] = useState(false);

  const dispatch = useDispatch();
  const changeTodoStatus = bindActionCreators(changeItemStatus, dispatch);
  const removeTodoItem = bindActionCreators(removeTodo, dispatch);

  const handleTodoItemClick = (e) => {
    e.stopPropagation();
    setActiveTodo(!activeTodo);

    console.log(item.status, elementIndex);
    let status = item.status === "In Progress" ? "Completed" : "In Progress";
    console.log(status)
    changeTodoStatus({index: elementIndex, status});
  }

  const handleTodoHover = (e) => {
    setCrossBtn(true);
  }
  
  const handleTodoUnhover = (e) => {
    setCrossBtn(false);
  }
  
  const handleRemoveBtnClick = (e) => {
    e.stopPropagation();

    removeTodoItem(elementIndex);
  }

  useEffect(() => {
    if(item.status === "Completed") {
      setActiveTodo(true);
    }
  }, [])

  return (
    <TodoItemStyled 
      active = {activeTodo} 
      onClick={handleTodoItemClick} 
      onMouseOver = {handleTodoHover}
      onMouseLeave = {handleTodoUnhover}
      >
        {item.title}
      <TodoItemCheckbox active = {activeTodo} />
      {
        crossBtn
        && <TodoItemRemoveBtn onClick={handleRemoveBtnClick} />
      }
    </TodoItemStyled>
  );
}
 
export default TodoItem;