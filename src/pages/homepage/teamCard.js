import React, { Component } from 'react';
import { CardImg, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import './teamCard.css';

export default class TeamCard extends Component{
  render() {
    return (
      <div id='card-wrapper-home'>
        <Card id = 'card-size'>
          <CardImg className ='pic-dim' src={this.props.creators.pic} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.creators.name}</CardTitle>
            <CardText font-size='50%'>Software Engineering @ SJSU</CardText>
            <a href={this.props.creators.Linkedin} target="_blank"><i class="fa fa-linkedin"></i></a>
          </CardBody>
        </Card>
      </div>
    );
  }
}
