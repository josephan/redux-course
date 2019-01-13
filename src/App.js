import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import Message from './components/Message.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Todo-App">
          <Message />
          <TodoForm />
          <Route path='/:filter?' render={({match}) => (
            <TodoList filter={match.params.filter} />
          )} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
