import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const { base_URL } = require('../../const')

export default function Practice(props) {
    const [letter, setLetter] = useState(props.letter)
    const [input, setInput] = useState('')


    useEffect(() => {
    }, []);

    function checkInput() {
        if (input.toLowerCase() === letter.toLowerCase()) {
            console.log('good')
            props.generateLetter()
        }
        else console.log('bad')
    }


    return (
        <div>

            <audio controls>
                <source src={base_URL + '/mp3/'+letter} type="audio/mp3" />
                 Your browser does not support the audio tag.
            </audio>

            <input onChange={(event)=>{setInput(event.target.value)}}/>

            <button onClick={()=>{checkInput()}}> submit </button>

        </div>
    );
}
