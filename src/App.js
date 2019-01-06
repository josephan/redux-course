import React, {Component} from 'react';
import './App.css';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import Message from './components/Message.js';

class App extends Component {
  render() {
    return (
      <div className="Todo-App">
        <Message message='hello there' />
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
