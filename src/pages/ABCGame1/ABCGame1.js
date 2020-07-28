import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import './ABCGame1.css';
import { Row, Modal, Container, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
const { base_URL } = require('../../const')

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: {
                showModal: false,
            },
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
            ]
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
    }

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
            alert("You have reached the end!")
        }
        console.log("generator:", this.state.call)
    }

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

    check() {
        if (this.state.call === 4) {
            this.setState({ toggle: { showModal: true } })
        }

        if (this.state.call === 8) {
            alert("You have reached the end!");
        }

        if (this.state.input === this.state.letter) {
            alert("great");
            this.generateLetter();
        }
        else {
            this.setState({ call: this.state.call - 1 });
            alert("Please Try again!");
        }


    }

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
            <div className="background">
                <div className="title">
                    <h1 className="page-title">ABC Game!</h1>
                    <h4 className="game-title">Guess the Letter</h4>
                </div>
                <div className="instructions-container">
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
                        <input onChange={this.changeInput} />
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

            </div>

        );
    }
}

export default Game;

// export default function Lesson(props) {
//     const [letter, setLetter] = useState('a')
//     const [previous, setPrevious] = useState('not')
//     const [call, setCall] = useState(0)

//     const practiceChain = [
//         {
//             letter: 'a',
//             success: 0,
//             call: 0
//         },
//         {
//             letter: 'b',
//             success: 0,
//             call: 0
//         },
//         {
//             letter: 'c',
//             success: 0,
//             call: 0
//         }
//     ]

//     useEffect(() => {

//     }, []);

//     function generateLetter() {
//         if (call < practiceChain.length * 3) {
//             let num = Math.floor((Math.random() * practiceChain.length));
//             if (practiceChain[num].letter === previous || practiceChain[num].call >= 3) return generateLetter()
//             else {
//                 practiceChain[num].call = practiceChain[num].call + 1
//                 setPrevious(practiceChain[num].letter)
//                 setCall(call + 1)
//                 return setLetter(practiceChain[num].letter);
//             }

//         }
//         console.log('done')
//     }

//     return (
//         <div>

//             <Practice letter={letter} generateLetter={generateLetter} />

//         </div>
//     );
// }
