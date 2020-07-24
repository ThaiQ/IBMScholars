import React from 'react';
import {CardHeader, CardImg, Card} from 'reactstrap';
import mock from '../homepage/pictures/mock.jpg';


export default class teamCard extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',

      creators: [
        {
          name: 'Nanar Boursalian',
          Linkedin:'https://www.google.com/',
          pic: mock 
        },
        {
          name: 'Seema Vora',
          Linkedin:'https://www.google.com/',
          pic: mock 
        },
        {
          name: 'Thai Quach',
          Linkedin:'https://www.google.com/',
          pic: mock 
        },
        {
          name: 'Surabhi Gupta',
          Linkedin:'https://www.google.com/',
          pic: mock 
        },
        {
          name: 'Annabel Kusumo',
          Linkedin:'https://www.google.com/',
          pic: mock 
        }
      ]
    };
  }

  render() {
    return (
      <teamCard>

        <div className='about-me'>
          {this.state.creators.map((member, ind) =>(
            <div className = 'card-wrapper'>
              <Card outline color = "warning" className = 'sep-card' key = {ind}>
              <CardHeader className = 'card-header'>{member.name}</CardHeader>
              <CardImg className = 'card-img' top-width= "80%" src= {member.pic} alt = "Member Image"/>
              </Card>
            </div>
          
            
          ))}
        </div>
      </teamCard>
    );
  }
}