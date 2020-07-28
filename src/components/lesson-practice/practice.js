import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import './practice.css';
import UIfx from 'uifx';
import { Redirect } from 'react-router-dom';
const { base_URL } = require('../../const')

class practice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            letter: props.letter,
            input: props.input,
        }
        // const [letter, setLetter] = useState(props.letter)
        // const [input, setInput] = useState('')

    }

    Practice(props) {
        if (this.state.input.toLowerCase() === this.letter.toLowerCase()) {
            console.log('good')
            console.log(props.letter);
            //props.generateLetter()
            this.audio = new Audio(base_URL + '/mp3/' + 'a');
            this.audio.load();
            this.audio.play();
        }
        else console.log('bad')

    }

    render() {
        return (
            <div>

                {/* <a className="sound-btn" onClick={this.Practice}>Play Sound!</a>
                <input onChange={(event) => { this.setState({ input: event.target.value }) }} />
                <button onClick={() => this.Practice}> submit </button> */}

            </div>
        );
    }
}

export default practice;

// export default function Practice(props) {


//     const [letter, setLetter] = useState(props.letter)
//     const [input, setInput] = useState('')



//     useEffect(() => {
//     }, []);

//     function checkInput() {
//         if (input.toLowerCase() === letter.toLowerCase()) {
//             console.log('good')
//             props.generateLetter()
//         }
//         else console.log('bad')
//     }


//     return (
//         <div>

//             <audio controls>
//                 <source src={base_URL + '/mp3/' + letter} type="audio/mp3" />
//                  Your browser does not support the audio tag.
//             </audio>

//             <input onChange={(event) => { setInput(event.target.value) }} />

//             <button onClick={() => { checkInput() }}> submit </button>

//         </div>
//     );
// }
