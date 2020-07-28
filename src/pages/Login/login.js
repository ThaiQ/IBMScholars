import React, { Component } from 'react';
import './login.css';
import { Label, Row, Col, Button, Container, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import UserNavbar from '../../components/navbar/navbar';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className = 'parent-container'>
                <div><UserNavbar /></div>
                <br></br>
                <h1>Hi</h1>
                <br></br>
                <div className = 'welcome-header'> Welcome Back! </div>
                <br></br>
                <Container className = 'sign-in-container'>
                    <div className = 'form-card'>
                        <h2> Login Here 📚</h2>
                        <hr /> 
                            <Label>Username</Label>
                            <Input
                                type = 'text'
                                placeholder = 'Enter your username'
                            >
                            </Input>
                            <Label>Password</Label>
                            <Input
                                type = 'password'
                                placeholder = '********'
                            >
                            </Input>
                        <hr />
                        <Row>
                            <Col>
                                <Link to = '/signUp'>
                                    <Button theme color = 'info'>Sign Up</Button>
                                </Link>
                            </Col>
                            <Col>
                                <Button theme color = 'info' className = 'submit-button'>Login</Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Login;