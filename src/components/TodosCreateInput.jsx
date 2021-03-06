import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodosCreateInputWrapper, TodosCreateInput as TodosCreateInputStyled, TodosCreateInputCancel, TodosCreateInputSuccess } from "../styles/Styled";
import { appendTodo } from '../store/actions/actionCreator';
import { bindActionCreators } from 'redux';

const TodosCreateInput = ({setModalStatus}) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const appendTodoItem = bindActionCreators(appendTodo, dispatch);
  const {currentFilter, items: todoList} = useSelector(state => state.todoReducer);


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleInputCancelClick = (e) => {
    
    setInputValue("");
  }

  const handleOverAreaClick = (e) => {
    if(e.target !== e.currentTarget) {
      return;
    }

    setModalStatus(false);
  }

  const generateTodoId = (todos) => {
    let todoIdList = todos.map(todo => todo.id); 

    
    return todoIdList.length === 0 ? 1 : Math.max(...todoIdList) + 1;
  }

  const handleInputSuccessClick = (e) => {
    appendTodoItem({id: generateTodoId(todoList), title: inputValue, status: "In Progress" });

    setInputValue("");
    setModalStatus(false);
  }

  const handleInputKeyUp = (e) => {
    console.log(e);
    if(e.code === "Enter") {
      appendTodoItem({id: generateTodoId(todoList), title: inputValue, status: "In Progress" });

      setInputValue("");
      setModalStatus(false);
    }
    if(e.code === "Escape") {
      setModalStatus(false);
    }
  }

  return ( 
    <TodosCreateInputWrapper onClick={handleOverAreaClick}>
      <div style={{position: "relative"}}>
        <TodosCreateInputStyled 
          placeholder='Write your new post' 
          value={inputValue} 
          onChange={handleInputChange} 
          onKeyUp = {handleInputKeyUp}
          autoFocus={true}
        />
        {
          inputValue 
          && <>
            <TodosCreateInputSuccess onClick={handleInputSuccessClick} />
            <TodosCreateInputCancel onClick={handleInputCancelClick}/>
          </>
        }
      </div>
    </TodosCreateInputWrapper>
  );
}
 
export default TodosCreateInput;