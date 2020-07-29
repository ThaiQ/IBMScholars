import React, { Component } from 'react';
import './login.css';
import { Label, Row, Col, Button, Container, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserNavbar from '../../components/navbar/navbar';
import { get } from 'http';
const { AutismColors } = require('../../const')



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: AutismColors.blue,
            isLogin: false,
            fakeLogin: { name: 'Bob', username: 'IBM', password: 'IBM2020' }

        }
    }

    loggedIn() {
        localStorage.setItem('user', JSON.stringify(this.state.fakeLogin))
    }
    componentDidMount() {
        this.initTheme()
    }

    initTheme() {
        let theme = JSON.parse(localStorage.getItem('theme'))
        theme && this.setState({ theme: theme })
    }

    render() {
        return (
            <div className='parent-container' style={{ backgroundColor: this.state.theme.normal }}>
                <div><UserNavbar login={() => this.initTheme()} /></div>
                <br></br>
                <h1>Hi</h1>
                <br></br>
                <div className='welcome-header'> Welcome Back! </div>
                <br></br>
                <Container className='sign-in-container'>
                    <div className='form-card' style={{ backgroundColor: this.state.theme.light }}>
                        <h2> Login Here 📚</h2>
                        <hr />
                        <Label>Username</Label>
                        <Input
                            type='text'
                            placeholder='Enter your username'
                        >
                        </Input>
                        <Label>Password</Label>
                        <Input
                            type='password'
                            placeholder='********'
                        >
                        </Input>
                        <hr />
                        <Row>
                            <Col>
                                <Link to='/signUp'>
                                    <Button theme style={{ backgroundColor: this.state.theme.dark }}>Sign Up</Button>
                                </Link>
                            </Col>
                            <Col>
                                <Button onClick={() => { this.loggedIn() }} theme style={{ backgroundColor: this.state.theme.dark }} className='submit-button'>
                                <Link to='/'>
                                        Login
                                </Link>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Login;
