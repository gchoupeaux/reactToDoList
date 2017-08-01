import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var todos = [
  {description: 'Dev a todolist app'},
  {description: 'Dev the todolist backend'},
  {description: 'Store to in db'},
  {description: 'Go crazy and add an authentication!'}
];

ReactDOM.render(<App todos={todos}/>, document.getElementById('root'));
registerServiceWorker();
