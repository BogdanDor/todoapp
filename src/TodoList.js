import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul className="TodoList">
      {props.items.map((todo) =>
        <li
         key={todo.id}
         className="TodoList__item"
        >
          <TodoItem 
            id={todo.id}
            initTitle={todo.title}
            onButtonClick={props.onDeleteTodo}
            onTitleChange={props.onUpdateTodo}
          />
        </li>
        )}
    </ul>
  )
}

export default TodoList;