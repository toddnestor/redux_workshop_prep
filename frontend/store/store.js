import { createStore, combineReducers, applyMiddleware } from 'redux';
import TodosReducer from '../reducers/todos_reducer';
import FiltersReducer from '../reducers/filters_reducer';
import TodosMiddleware from '../middleware/todos_middleware';

const RootReducer = combineReducers({
  todos: TodosReducer,
  filter: FiltersReducer
});

const MasterMiddleware = applyMiddleware(TodosMiddleware);

const Store = createStore(
  RootReducer,
  MasterMiddleware
);

export default Store;
