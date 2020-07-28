import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import './ABCGame1.css';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';
const { base_URL } = require('../../const')


class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            ]
        }
        this.generateLetter = this.generateLetter.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.check = this.check.bind(this);
        this.playSound = this.playSound.bind(this);
    }

    componentDidMount() {
        this.generateLetter();
    }

    generateLetter() {
        if (this.state.call < this.state.practiceChain.length * 3) {
            let num = Math.floor((Math.random() * this.state.practiceChain.length));
            if (this.state.practiceChain[num].letter === this.state.previous || this.state.practiceChain[num].call >= 3) return this.generateLetter()
            else {
                this.state.practiceChain[num].call = this.state.practiceChain[num].call + 1
                this.setState({ previous: this.state.practiceChain[num].letter });
                this.setState({ call: this.state.call + 1 });
                this.setState({ letter: this.state.practiceChain[num].letter });
            }

        }
        console.log("generator:", this.state.letter)
        //console.log('done')
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
        console.log(this.state.input)
        console.log(this.state.letter)
        if (this.state.input === this.state.letter) {
            alert("great")
        }
        else {
            console.log("Please Try again!");
        }
        this.generateLetter();


    }

    changeInput = (event) => {
        this.setState({ input: event.target.value })
    }

    render() {
        return (
            <div className="background">
                <Row className="entry-field">
                    <Link className="sound-btn" onClick={this.playSound}>Play Sound!</Link>
                    <input onChange={this.changeInput} />
                    <Link className="submit-btn" onClick={this.check}> Submit </Link>
                </Row>
            </div >
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
