import { connect } from 'react-redux';
import NewTodoForm from './new_todo_form';
import { receiveTodo } from '../actions/todo_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  handleSubmit: todo => dispatch( receiveTodo( todo ) )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( NewTodoForm );
