 
import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routes'
import './index.css'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

export default function App(props) {

  return (
      <Routing />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
