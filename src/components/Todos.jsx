import React from 'react';
import { useSelector } from 'react-redux';
import { TodosWrapper } from '../styles/Styled';
import TodoCreator from './TodoCreator';
import TodoList from './TodoList';
import TodosMenu from './TodosMenu';


const Todos = () => {

  const {currentFilter, items} = useSelector(state => state.todoReducer);

  return ( 
    <TodosWrapper>
      <TodosMenu />
      <TodoList />
      {
        currentFilter !== "Completed"
        && <TodoCreator />
      }
    </TodosWrapper>
   );
}
 
export default Todos;