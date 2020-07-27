import React, { Component } from 'react';
import { CardImg, Card, CardBody, CardTitle, CardText } from 'reactstrap';

import './gameLayout.css';

export default class GameLayout extends Component{
  render() {
    return (

      <div className='card-wrapper'>
        <Card >
          <CardImg className='pic-dim' src={this.props.activities.pic} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.activities.name}</CardTitle>
            <CardText font-size='50%'>B.E. Software Engineering at SJSU</CardText>
            <a href={this.props.activities.link}><i class="fa fa-linkedin"></i></a>
          </CardBody>
        </Card>
      </div>
    );
  }
}
