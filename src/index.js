 
import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routes'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function App(props) {

  return (
      <Routing />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
