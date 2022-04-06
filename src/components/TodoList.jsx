import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TodoList as TodoListStyled, CustomMessage } from "../styles/Styled";
import TodoItem from "./TodoItem";

const TodoList = () => {

  const { items : todos, currentFilter } = useSelector(state => state.todoReducer);

  const filteredTodos = todos?.filter(todo => {
    if(todo.status === currentFilter || !currentFilter) {
      return todo;
    }
  })

  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos])

  return ( 
    <TodoListStyled> 
      {
        todos.map((todo, index) => {
          if(todo.status === currentFilter || !currentFilter) {
            return <TodoItem key = {todo.id} item = {todo} index = {index}/>
          }
        })
      }
      {
        filteredTodos.length === 0 
        && <CustomMessage>You don't have todos yet</CustomMessage>
      }
      
    </TodoListStyled>
   );
}
 
export default TodoList;