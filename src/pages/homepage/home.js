import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './home.css';
import { Grid, Cell } from 'react-mdl'
import titlePage from './pictures/titlePage.png'
import TeamCard from './teamCard'
import UserNavbar from '../../components/navbar/navbar';
import nanar from '../homepage/pictures/nanar.png';
import annabel from '../homepage/pictures/annabel.jpeg';
import seema from '../homepage/pictures/seema.jpeg'
import surabhi from '../homepage/pictures/surabhi.png'
import thai from '../homepage/pictures/thai.png'


class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',

      creators: [
        {
          name: 'Nanar Boursalian',
          Linkedin:'https://www.linkedin.com/in/nanarboursalian/',
          pic: nanar 
        },
        {
          name: 'Seema Vora',
          Linkedin:'https://www.linkedin.com/in/seemasvora/',
          pic: seema 
        },
        {
          name: 'Thai Quach',
          Linkedin:'https://www.linkedin.com/in/thai-quach/',
          pic: thai
        },
        {
          name: 'Surabhi Gupta',
          Linkedin:'https://www.linkedin.com/in/gupta-surabhi/',
          pic: surabhi
        },
        {
          name: 'Annabel Kusumo',
          Linkedin:'https://www.linkedin.com/in/annabelkusumo/',
          pic: annabel
        }
      ]
    };
  }

  render() {
    let creatorCards = this.state.creators.map(creators => {
      return (
        <Col sm="5">
          <TeamCard creators={creators}/>
        </Col>
      )
    })
    return (
      <div className='overview'>
        <div style={{ width: '100%', margin: 'auto' }}>
          <Grid className="landing-grid">
          <UserNavbar />
            <Cell col={12}>
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
                  Every child deseverves the same opportunities. Our program hopes to give low-income elementary school kids with disabilities,
                  a personalized service which teaches them primary school topics geared to fit their needs. Our platform is about creating a community
                  for these students.
            </p>
              </div>
            </Cell>
            <div className = 'meet-header'>
            Meet the Team
            <p>Our team includes 5 young developers who hope to make a positive differnce
              using their technical skills. This platform runs entirely on the IBM cloud.
            </p>
            </div>
                <div className='meet-team'>
                  {creatorCards}

                </div>


          </Grid>
        </div>
      </div>
    )
  }
}

export default home