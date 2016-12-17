import { addTodo, getTodos, deleteTodo, toggleTodo } from '../util/local_storage_manager';
import { receiveAllTodos } from '../actions/todo_actions';

const TodosMiddleware = store => next => action => {
  switch(action.type){
    case "RECEIVE_TODO":
      addTodo(action.todo);
      next(action);
      break;
    case "REQUEST_ALL_TODOS":
      const allTodos = getTodos();
      store.dispatch(receiveAllTodos(allTodos));
      break;
    case "DELETE_TODO":
      deleteTodo(action.id);
    case "TOGGLE_TODO":
      toggleTodo(action.id);
    default:
      next(action);
  }
}

export default TodosMiddleware;
