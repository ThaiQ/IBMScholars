import React, { Component } from 'react';
import './login.css';
import {
    Label, Row, Col, Button, Container, Input,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import UserNavbar from '../../components/navbar/navbar';
const { AutismColors } = require('../../const')

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: AutismColors.blue,
            isLogin: false,
            fakeLogin: {
                name: 'Bob',
                username: 'IBM',
                password: 'IBM2020',
                points: 100
            },
            modal: true
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

    toggleModal() {
        this.setState({ modal: !this.state.modal })
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
                            value='CLICK LOGIN BELOW'
                        >
                        </Input>
                        <Label>Password</Label>
                        <Input
                            type='password'
                            placeholder='********'
                            value='MOCKED - PASSWORD'
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
                                <Link to='/'>
                                    <Button onClick={() => { this.loggedIn() }} theme style={{ backgroundColor: this.state.theme.dark }} className='submit-button'>
                                        Login
                                </Button>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <Modal isOpen={this.state.modal} toggle={() => { this.toggleModal() }}>
                    <ModalHeader toggle={() => { this.toggleModal() }}>Demo-Notification</ModalHeader>
                    <ModalBody>
                        For demo purposes and your conveniences, we had disabled login. Click below or
                        "Login" to access a mock account.
                    </ModalBody>
                    <ModalFooter>
                        <Link to='/'>
                            <Button color="primary" style={{ backgroundColor: this.state.theme.dark }}

                                onClick={() => { this.toggleModal(); this.loggedIn() }}>Login!</Button>{' '}
                        </Link>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Login;
