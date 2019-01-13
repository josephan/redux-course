import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos, toggleTodo, removeTodo, getVisibleTodos} from '../reducers/todo';

const TodoItem = ({id, name, isComplete, toggleTodo, removeTodo}) => (
  <li>
    <button onClick={() => removeTodo(id)}>X</button>
    <input
      type="checkbox"
      defaultChecked={isComplete}
      onChange={() => toggleTodo(id)}
    />{' '}
    {name}
  </li>
);

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="Todo-List">
        <ul>
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              toggleTodo={this.props.toggleTodo}
              removeTodo={this.props.removeTodo}
              {...todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter)}),
  {fetchTodos, toggleTodo, removeTodo},
)(TodoList);
