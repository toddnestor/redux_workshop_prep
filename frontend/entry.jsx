import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import TodoListContainer from './components/todo_list_container';
import { receiveTodo, requestAllTodos } from './actions/todo_actions';
import NewTodoFormContainer from './components/new_todo_form_container';

// Just for testing!
window.Store = Store;
window.receiveTodo = receiveTodo;

const Root = () => (
  <Provider store={Store}>
    <div>
      <TodoListContainer />
      <NewTodoFormContainer />
    </div>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
  Store.dispatch(requestAllTodos());
});
