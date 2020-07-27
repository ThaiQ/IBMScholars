import React from 'react';
import { CardImg, Card, CardBody, CardTitle, CardText } from 'reactstrap';

import './teamCard.css';

class TeamCard extends React.Component {
  render() {
    return (
<<<<<<< HEAD

      <div className='card-wrapper'>
        <Card >
          <CardImg className='pic-dim' src={this.props.creators.pic} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.creators.name}</CardTitle>
            <CardText font-size='50%'>B.E. Software Engineering at SJSU</CardText>
            <a href={this.props.creators.Linkedin}><i class="fa fa-linkedin"></i></a>
          </CardBody>
        </Card>
      </div>
=======
   
        <div className = 'card-wrapper'>
      <Card >
        <CardImg className = 'pic-dim'src={this.props.creators.pic} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.creators.name}</CardTitle>
          <CardText font-size = '50%'>B.E. Software Engineering at SJSU</CardText>
          <a href={this.props.creators.Linkedin}><i class="fa fa-linkedin"></i></a>
        </CardBody>
      </Card>
    </div> 
>>>>>>> 608087af1a9599836e52a58ee556b2139b52f558
    );
  }
}

export default TeamCard