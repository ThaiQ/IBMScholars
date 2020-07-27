import React, { Component } from 'react';
import Navbar from "../../../components/navbar/navbar.js";
import GameLayout from '../Autism/gameLayout.js'

import abc from './pictures/abc.png'



export default class Autism extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',

      activities: [
        {
          name: 'ABC Lesson',
          link: 'https://www.google.com',
          pic: abc
        },
        {
          name: 'Matching',
          link: 'https://www.google.com',
          pic: abc
        },
        {
          name: 'Letter Sounds',
          link: 'https://www.google.com',
          pic: abc
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
      <div className='overview' style={{ backgroundColor: 'blue' }}>
        <Navbar />
        <div>
            <ul className="flex-container wrap-reverse">
              {activities}
            </ul>
          </div>
        </div>
    )
  }
}
