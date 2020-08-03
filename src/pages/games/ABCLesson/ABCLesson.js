import React, { Component } from "react";
import './ABCLesson.css';
import alphabets from './alphabets.json'
import classNames from 'classnames';
import UIfx from 'uifx';
import btnSound from "../../sounds/state-change_confirm-up.wav";
import Navbar from "../../../components/navbar/navbar.js";
const { base_URL, AutismColors } = require('../../../const')

//Creates a sample ABC lesson
class ABCGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: AutismColors.blue,
            alphabets: alphabets,
            currentPosition: 0,
            alphaTick: 0,
            audioVal: '',
            audioInt: 0,
            audioPath: '',
            audioLetter: ['a', 'b', 'c'],
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.playSound = this.playSound.bind(this);

    }

    initTheme() {
        let theme = JSON.parse(localStorage.getItem('theme'))
        theme && this.setState({ theme: theme })
    }

    //Function to create Audio component
    playSound = () => {
        this.setState({ audioVal: this.state.alphabets[this.state.currentPosition].letterSound },
            () => {
                this.audio = new Audio(base_URL + '/mp3/' + this.state.audioVal);
                this.audio.load();
                this.audio.play();
            }
        );
    }

    componentDidMount() {
        this.initTheme()
        this.setState({ audioVal: this.state.alphabets[this.state.currentPosition].letterSound });
    }

    //Function to control the "next" button
    //Changes variables as per the current alphabet on display
    next() {
        if (this.state.currentPosition < 3) {
            if (this.state.alphaTick < 2) {
                this.setState({ alphaTick: this.state.alphaTick + 1, currentPosition: this.state.currentPosition });
            }
            else {
                this.setState({ currentPosition: this.state.currentPosition + 1, alphaTick: 0 });
            }
        }
        const nSound = new UIfx(btnSound);
        nSound.play();
        this.setState({ audioPath: base_URL + '/mp3/' + this.state.audioLetter[this.state.currentPosition] });
    }

    //Function to control the "previous" button
    //Changes variables as per the current alphabet on display
    previous() {
        //alerts for edge cases when the students tries illegal options
        if (this.state.currentPosition === 0) {
            this.setState({ currentPosition: 0 });
        }
        else if (this.state.alphaTick <= 2 && this.state.alphaTick !== 0) {
            this.setState({ alphaTick: this.state.alphaTick - 1 });
        }
        else if (this.state.alphaTick == 0) {
            this.setState({ currentPosition: this.state.currentPosition - 1, alphaTick: 0 });
        }
        else {
            this.setState({ currentPosition: this.state.currentPosition + 1, alphaTick: 0 });
        }
    }

    render() {
        let showImage = this.state.alphaTick !== 0 ? true : false;
        let showWord = this.state.alphaTick === 2 ? true : false;
        let len = this.state.alphabets[this.state.currentPosition].word.length
        let str = this.state.alphabets[this.state.currentPosition].word.substring(1, len);

        return (
            <div className="overview">
                <Navbar lesson={() => this.initTheme()} />
                <div className="game" style={{ backgroundColor: this.state.theme.dark }}>
                    <div className="option">
                        <div className="fields">
                            <div className="field-block" style={{ backgroundColor: this.state.theme.normal, color: this.state.theme.dark }}>
                                {this.state.alphabets[this.state.currentPosition].letter}
                            </div>
                        </div>
                        <div className="buttons-row">
                            <a onClick={this.previous} className="button prev">Previous</a>
                            <a onClick={this.playSound} className="button sound">Play Sound
                        <img className="icon" src="https://i.imgur.com/VoGIU6b.png" /></a>
                            <a onClick={this.next} className="button next">Next!</a>
                        </div>
                        <div className="fields">
                            <div className="field-block" style={{ backgroundColor: this.state.theme.normal }}>
                                <div className="left-field">
                                    <div className={classNames('placeholder-span', { hide: showImage })}> Click Next to view Image</div>
                                    <img className={classNames('letter-image', { hide: !showImage })}
                                        alt={this.state.alphabets[this.state.currentPosition].word}
                                        src={this.state.alphabets[this.state.currentPosition].image} />
                                </div>
                                <div className="right-field">
                                    <div className={classNames('placeholder-span', { hide: showWord })}> Click Next to view Spelling</div>
                                    <div className={classNames('word', { hide: !showWord })}>
                                        <div className="first-char" style={{ color: this.state.theme.dark }}> {this.state.alphabets[this.state.currentPosition].word.charAt(0).toUpperCase()} </div>
                                        {str}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default ABCGame;
