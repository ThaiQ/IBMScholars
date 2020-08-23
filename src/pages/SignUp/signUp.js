import React, { Component } from 'react';
import './signUp.css';
import { Label, Row, Col, Button, Container, Input, CardImg, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import UserNavbar from '../../components/navbar/navbar';
const {AutismColors} = require('../../const')

const renderYear = (years, ind) => {
    return (
        <option>{years.year}</option>
    )
}

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme: AutismColors.blue,
            years : [
                { year: '2013' },
                { year: '2014' },
                { year: '2015' },
                { year: '2016' },
                { year: '2017' },
            ],
            avatars : [
                { img: '/photos/bird.jpg' },
                { img: '/photos/panda.jpg' },
                { img: '/photos/puppy.jpg' },
            ]
        }
    }

    componentDidMount () {
        this.initTheme ()
      }
    
      initTheme () {
        let theme = JSON.parse(localStorage.getItem('theme'))
        theme && this.setState({theme:theme})
      }

    render(){
        return (
            <div className = 'parent-container' style={{backgroundColor:this.state.theme.normal}}>
                <div><UserNavbar signup={()=>this.initTheme()}/></div>
                <br></br>
                <h1>Hi</h1>
                <br></br>
                <div className = 'welcome-header'> Welcome </div>
                <br></br>
                <Container className = 'join-us-container' style={{backgroundColor:this.state.theme.light}}>
                    <div className = 'form-card' style={{backgroundColor:this.state.theme.light}}>
                        <h2> Sign Up with Us! 📚</h2>
                        <hr /> 
                        <Row className = 'row'>
                            <Col>
                                <Label>Full Name</Label>
                                <Input
                                    type = 'text'
                                    placeholder = 'Enter your name'
                                >
                                </Input>
                            </Col>
                            <Col>
                                <Label>Username</Label>
                                <Input
                                    type = 'text'
                                    placeholder = 'Enter username'
                                >
                                </Input>
                            </Col>
                        </Row>
                        <Row className = 'row'>
                            <Col>
                                <Label>Password</Label>
                                <Input
                                    type = 'password'
                                    placeholder = '********'
                                >
                                </Input>
                            </Col>
                            <Col>
                            <Label>Re-Enter Password</Label>
                                <Input
                                    type = 'password'
                                    placeholder = '********'
                                >
                                </Input>
                            </Col>
                        </Row>
                        <Row className = 'row'>
                            <Col>
                                <Label>Year Born</Label>
                                <Input id = 'input-year'
                                    type = 'select'
                                    placeholder = 'year'
                                >
                                    {this.state.years.map(renderYear)}
                                </Input>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <Link to = '/login'>
                                    <Button theme style={{backgroundColor:this.state.theme.dark}}>Login Instead</Button>
                                </Link>
                            </Col>
                            <Col>
                                <Button theme style={{backgroundColor:this.state.theme.dark}} className = 'submit-button'>Submit</Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default SignUp;