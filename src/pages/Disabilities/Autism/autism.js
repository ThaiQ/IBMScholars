import React, { Component } from 'react';
import Navbar from "../../../components/navbar/navbar.js";
import GameLayout from '../Autism/gameLayout.js'
import './autism.css'

import abc from './pictures/abc.png'
import matching from './pictures/matching.jpg'
import phonics from './pictures/phonics.jpg'



export default class Autism extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',

      activities: [
        {
          name: 'ABC Lesson',
          link: '/lesson',
          pic: abc
        },
        {
          name: 'Matching',
          link: 'https://www.google.com',
          pic: matching
        },
        {
          name: 'Letter Sounds',
          link: 'https://www.google.com',
          pic: phonics
        }
      ]
    };
  }

  render() {
    let activities = this.state.activities.map(activities => {
      return (

        <li className="flex-item">
          <GameLayout activities={activities} />
        </li>

      )
    })
    return (
      <div className='overview'>
        <Navbar />
        <div style={{ width: '100%', margin: 'auto' }}>
          <div className='autism-page'>
            <ul className="flex-container wrap-reverse">
           
        <div className="banner-text">
              <h1>About Us</h1>
              <hr />
              <p className='lead text-center'>
                {' '}
                Learn Your ABCs! 
            </p>
            </div>
              {activities}
            </ul>
            </div>
        
          </div>
        </div>
        )
      }
    }
