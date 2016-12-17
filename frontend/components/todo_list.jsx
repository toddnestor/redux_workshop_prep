import React from 'react';

const TodoList = ({todos, toggleTodo = function(){}, deleteTodo = function(){}, toggleFilter = function(){} }) => {

  const _getClassName = done => (
    done ? "done" : ""
  );

  const _handleX = id => e => {
    e.stopPropagation();
    deleteTodo(id);
  };

  const _generateList = () => (
    todos.map( todo => (
      <li key={todo.id}
          className={_getClassName(todo.done)}
          onClick={() => toggleTodo(todo.id)}>
          <span onClick={_handleX(todo.id)}>X</span>
          {todo.body}
      </li>
    ))
  );

  return (
    <div>
      <div>
        <button onClick={() => toggleFilter("ALL")}>ALL</button>
        <button onClick={() => toggleFilter("COMPLETE")}>COMPLETE</button>
        <button onClick={() => toggleFilter("INCOMPLETE")}>INCOMPLETE</button>
      </div>
      <ul id="todoList">
        {_generateList()}
      </ul>
    </div>
  );
}

export default TodoList;
