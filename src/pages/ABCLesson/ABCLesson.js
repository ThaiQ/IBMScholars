import React, { Component } from "react";
import './ABCLesson.css';
import { Button, Container, Input, Label, Col, Alert } from 'reactstrap';
import alphabets from './alphabets.json'
import classNames from 'classnames';
import Modal from 'react-modal';
import UIfx from 'uifx';
import btnSound from "../sounds/state-change_confirm-up.wav";
import Navbar from "../../components/navbar/navbar.js";
const { base_URL } = require('../../const')


class ABCGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
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

    playSound = () => {

        console.log("playing..");
        console.log(this.state.currentPosition);
        this.setState({ audioVal: this.state.alphabets[this.state.currentPosition].letterSound },
            () => {
                this.audio = new Audio(base_URL + '/mp3/' + this.state.audioVal);
                this.audio.load();
                this.audio.play();
            }
        );


        //base_URL + '/mp3/' + this.state.audioLetter[this.state.currentPosition]
    }

    componentDidMount() {
        this.setState({ audioVal: this.state.alphabets[this.state.currentPosition].letterSound });
    }

    next() {
        if (this.state.currentPosition < 3) {
            if (this.state.alphaTick < 2) {
                this.setState({ alphaTick: this.state.alphaTick + 1, currentPosition: this.state.currentPosition });
            }
            else {
                this.setState({ currentPosition: this.state.currentPosition + 1, alphaTick: 0 });
            }
        }
        else {
            alert("CONGRATS! You have reached the end");
        }
        console.log('next button clicked');
        const nSound = new UIfx(btnSound);
        nSound.play();
        console.log(this.state.currentPosition);
        this.setState({ audioPath: base_URL + '/mp3/' + this.state.audioLetter[this.state.currentPosition] });
        console.log(this.state.audioPath);
        //this.setState({ audioVal: this.state.alphabets[this.state.currentPosition].letterSound });
        //console.log(this.state.audioVal);

    }

    previous() {
        console.log('previous button clicked');

        if (this.state.alphaTick <= 2 && this.state.alphaTick !== 0) {
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
        //const tick = new UIfx(this.state.alphabets[this.state.currentPosition].letterSound);
        //tick.setVolume(0.8);

        return (
            <div className="overview">
                <Navbar />

                <div className="game">
                    <div className="option">
                        <div className="fields">
                            <div className="field-block">
                                {this.state.alphabets[this.state.currentPosition].letter}
                            </div>
                        </div>
                        <div className="buttons">
                            <a onClick={this.previous} className="button prev">Previous</a>
                            <a onClick={this.playSound} className="button sound">Play Sound Again
                        <img className="icon" src="https://i.imgur.com/VoGIU6b.png" /></a>
                            {/* <a onClick={() => tick.play()} className="button sound">Play Sound Again</a> */}
                            <a onClick={this.next} className="button next">Next!</a>

                        </div>

                        <div className="fields">
                            <div className="field-block">
                                <div className="left-field">
                                    <div className={classNames('placeholder-span', { hide: showImage })}> Click Next to view Image</div>
                                    <img className={classNames('letter-image', { hide: !showImage })}
                                        alt={this.state.alphabets[this.state.currentPosition].word}
                                        src={this.state.alphabets[this.state.currentPosition].image} />
                                </div>
                                <div className="right-field">
                                    <div className={classNames('placeholder-span', { hide: showWord })}> Click Next to view Spelling</div>
                                    <div className={classNames('word', { hide: !showWord })}>
                                        {this.state.alphabets[this.state.currentPosition].word.toUpperCase()}
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