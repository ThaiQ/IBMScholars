 
import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routes'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function App(props) {

  return (
      <Routing />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
