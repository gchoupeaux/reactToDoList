import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To do list</h2>
        </div>
          <ul className="App-list">
            {this.props.todos.map(todo => <li>{todo.description}</li>)}
          </ul>
      </div>
    );
  }
}

export default App;


