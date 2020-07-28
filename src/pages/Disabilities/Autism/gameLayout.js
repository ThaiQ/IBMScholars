import React, { Component } from 'react';
import { CardImg, Card, CardBody, CardTitle, Button } from 'reactstrap';

import './gameLayout.css';

export default class GameLayout extends Component {
  render() {
    return (
      <div className='card-wrapper'>
        <Card >
          <CardImg className='pic-dim' src={this.props.activities.pic} alt="Card image cap" />
          <CardBody>
            <CardTitle className='text-set'>{this.props.activities.name}</CardTitle>
            <Button href={this.props.activities.link}><i>Clear Here to Begin!</i></Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
