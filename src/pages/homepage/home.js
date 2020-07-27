import React, { Component } from 'react';
import './home.css';
import titlePage from './pictures/titlePage.png'
import TeamCard from './teamCard'
import UserNavbar from '../../components/navbar/navbar';
import nanar from '../homepage/pictures/nanar.jpeg';
import annabel from '../homepage/pictures/annabel.jpeg';
import seema from '../homepage/pictures/seema.jpeg'
import surabhi from '../homepage/pictures/surabhi.png'
import thai from '../homepage/pictures/thai.png'


export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',

      creators: [
        {
          name: 'Nanar Boursalian',
          Linkedin: 'https://www.linkedin.com/in/nanarboursalian/',
          pic: nanar
        },
        {
          name: 'Seema Vora',
          Linkedin: 'https://www.linkedin.com/in/seemasvora/',
          pic: seema
        },
        {
          name: 'Thai Quach',
          Linkedin: 'https://www.linkedin.com/in/thai-quach/',
          pic: thai
        },
        {
          name: 'Surabhi Gupta',
          Linkedin: 'https://www.linkedin.com/in/gupta-surabhi/',
          pic: surabhi
        },
        {
          name: 'Annabel Kusumo',
          Linkedin: 'https://www.linkedin.com/in/annabelkusumo/',
          pic: annabel
        }
      ]
    };
  }

  render() {
    let creatorCards = this.state.creators.map(creators => {
      return (
        <li className="flex-item">
          <TeamCard creators={creators} />
        </li>

      )
    })
    return (
      <div className='overview' style={{ backgroundColor: 'blue' }}>
        <UserNavbar />
        <div style={{ width: '100%', margin: 'auto' }}>
          <div className="landing-grid">
            <img
              src={titlePage}
              className="homepage-img"
              alt="homepage image"
            />
            <div className="banner-text">
              <h1>About Us</h1>
              <hr />
              <p className='lead text-center'>
                {' '}
                Every child deserves the same opportunities. Our program hopes to give low-income elementary school kids with disabilities
                a personalized service, which teaches them primary school topics geared to fit their needs. Our platform is about creating a community
                for these students.
            </p>
            </div>
            <div className='meet-header'>
              Meet the Team
            </div>
            <p className='info'>Our team includes 5 young developers who hope to make a positive difference
              using their technical skills. This platform runs entirely on the IBM cloud.
            </p>
            <ul className="flex-container wrap-reverse">
              {creatorCards}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
