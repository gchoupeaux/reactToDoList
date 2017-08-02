import $ from 'jquery';
import React, { Component } from 'react';
import './App.css';

// window.$ = window.jQuery=jquery;

class App extends Component {
  render() {
    return (
      <div className="App">
      
          <h2>To Do List</h2>

          <input className="form-control" type="text"/>
          <button onClick={ () => {
             console.log('clicked: ', $('.form-control').val());
             this.props.todos.push({description: $('.form-control').val()})
          } }> <span>Add</span></button>
          
          <ul className="todos">
            {this.props.todos.map(todo => <li>{todo.description}</li>)}
          </ul>
          
      </div>
    );
  }
}

export default App;


    

    
    


