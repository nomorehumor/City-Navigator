import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App'
import './index.css';

require('dotenv').config()

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
