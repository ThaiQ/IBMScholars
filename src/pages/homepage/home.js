import React from 'react';
import './home.css';

import SampleMerchant from '../sample_merchant-page/test'
import UserNavbar from '../../components/navbar/navbar';

export default function Home() {
  return (
    <div className="App">
      <UserNavbar />
      <header className="App-header">
        <p>
          THIS IS THAI, YOU CAN TOUCH NOW!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SampleMerchant />
      </header>
    </div>
  );
}
