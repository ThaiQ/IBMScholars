import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import './ABCGame1.css';
import { Row, Modal, Container, Label, Button, ModalBody, ModalFooter  } from 'reactstrap';
import { Link } from 'react-router-dom';
import Nav from '../../components/navbar/navbar'
const { base_URL } = require('../../const')
const { AutismColors } = require('../../const')
class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: {
                showModal: false,
            },
            theme: AutismColors.blue,
            letter: '',
            previous: 'not',
            call: 0,
            input: '',
            practiceChain: [
                {
                    letter: 'a',
                    success: 0,
                    call: 0
                },
                {
                    letter: 'b',
                    success: 0,
                    call: 0
                },
                {
                    letter: 'c',
                    success: 0,
                    call: 0
                }
            ],
            instructions: [
                '1. Click "Play Sound!" button to listen to letter audio',
                '2. Enter your response',
                '3. Click "Submit" to check answer!'
            ],
            msg : ''
        }
        this.generateLetter = this.generateLetter.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.check = this.check.bind(this);
        this.playSound = this.playSound.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        this.generateLetter();
        this.initTheme();
    }

    initTheme() {
        let theme = JSON.parse(localStorage.getItem('theme'))
        theme && this.setState({ theme: theme })
    }

    toggleModal(msg) {
        this.setState({msg: msg||''})
    }

    //Function to randomly generate a letter, for the randomized audio
    generateLetter() {
        if (this.state.call < this.state.practiceChain.length * 4) {
            let num = Math.floor((Math.random() * this.state.practiceChain.length));
            if (this.state.practiceChain[num].letter === this.state.previous || this.state.practiceChain[num].call >= 3) return this.generateLetter()
            else {
                this.state.practiceChain[num].call = this.state.practiceChain[num].call + 1
                this.setState({ previous: this.state.practiceChain[num].letter });
                this.setState({ call: this.state.call + 1 });
                this.setState({ letter: this.state.practiceChain[num].letter });
            }
        }
        else {
            this.toggleModal('You have reached the end!')
        }
    }

    //Function to play sound using the Audio library
    playSound = () => {
        console.log("play:", this.state.letter)
        this.setState(
            () => {
                this.audio = new Audio(base_URL + '/mp3/' + this.state.letter);
                this.audio.load();
                this.audio.play();
            }
        );
    }

    //Function to check the student's response
    check() {
        if (this.state.call === 4) {
            this.setState({ toggle: { showModal: true } })
        }

        if (this.state.call === 7) {
            this.toggleModal('You have reached the end!')
        }

        else if (this.state.input.toLowerCase() === this.state.letter.toLowerCase()) {
            this.toggleModal('Great Job!')
            this.generateLetter();
        }
        else {
            this.setState({ call: this.state.call - 1 });
            this.toggleModal('Ooops, Please Try again!')
        }


    }

    //These functions take care of the break time Modal
    changeInput = (event) => {
        this.setState({ input: event.target.value })
    }

    close() {
        this.setState({ toggle: { showModal: false } })
    }
    open() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <div className="background" style={{ backgroundColor: this.state.theme.normal, color: this.state.theme.light }}>
                <Nav soundgame={() => this.initTheme()} />
                <div className="game1-title">
                    <h1 className="page-title">ABC Game</h1>
                    <Row>
                        <h4 className="game-title">Guess the Letter!</h4>
                        <img className="title-icon" src="https://i.imgur.com/KSqLZU9.png" />
                    </Row>
                </div>
                <div className="instructions-container" style={{ backgroundColor: this.state.theme.light }}>
                    <Container className="container">
                        {this.state.instructions.map((type, ind) => (
                            <p key={ind} className='instructions-text'>
                                <Label>{type}</Label>
                            </p>
                        ))
                        }
                    </Container>
                </div>
                <div className="entry-field">
                    <Row className="row-field">
                        <Link className="sound-btn" onClick={this.playSound}>Play Sound!</Link>
                        <input className="input-field" onChange={this.changeInput} />
                        <Link className="submit-btn" onClick={this.check}> Submit  </Link>
                    </Row>
                </div>
                <Modal isOpen={this.state.toggle.showModal}>
                    <Container className="modal-background">
                        <div class="modal-header">
                            <h1 className="modal-title">Take a little break!</h1>
                            <Button
                                onClick={this.close}>×</Button>
                        </div>
                        <iframe width="460" height="315" src="https://www.youtube.com/embed/Bomb0-996JM" frameborder="0" allow="accelerometer; encrypted-media" allowfullscreen></iframe>
                    </Container>
                </Modal>

                <p className='msg'>{this.state.msg}</p>
            </div>

        );
    }
}

export default Game;

