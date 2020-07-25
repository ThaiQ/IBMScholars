import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Practice from '../../components/lesson-practice/practice'
const { base_URL } = require('../../const')

export default function Lesson(props) {
    const [letter, setLetter] = useState('a')
    const [previous, setPrevious] = useState('not')
    const [call, setCall] = useState(0)

    const practiceChain = [
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

    useEffect(() => {

    }, []);

    function generateLetter() {
        if (call<practiceChain.length*3){
            let num = Math.floor((Math.random() * practiceChain.length));
            if (practiceChain[num].letter===previous || practiceChain[num].call>=3) return generateLetter()
            else {
                practiceChain[num].call = practiceChain[num].call+1
                setPrevious(practiceChain[num].letter)
                setCall(call+1)
                return setLetter('b');
            }
        }
        console.log('done')
    }

    return (
        <div>

            <Practice letter={letter} generateLetter={generateLetter} />

        </div>
    );
}
