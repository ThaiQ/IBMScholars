import React, { Component } from 'react';
import { CardImg, Card, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import './gameLayout.css';

export default class GameLayout extends Component {
  render() {
    return (
      <div className='card-wrapper'>
        <Card style={{cursor:'default'}}>
          <CardImg className='pic-dim' src={this.props.activities.pic} alt="Card image cap" />
          <CardBody>
            <CardTitle className='text-set'>{this.props.activities.name}</CardTitle>
            <Button><Link to={this.props.activities.link}>Click Here to Begin!</Link></Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
