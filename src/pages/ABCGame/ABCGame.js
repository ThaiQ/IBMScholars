import React, { Component } from "react";
import './ABCGame.css';
import { Button, Container, Input, Label, Col } from 'reactstrap';
import alphabets from './alphabets.json'
import classNames from 'classnames';
import UIfx from 'uifx';
import btnSound from "../sounds/state-change_confirm-up.wav";
import Sound from 'react-sound';
import UIFx from "uifx";
//import LAudio from '../sounds/jjucvgut.mp3';

class ABCGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alphabets: alphabets,
            currentPosition: 0,
            alphaTick: 0,
            audioVal: 0,
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    playSound() {
        //const tick = new UIfx({ asset: LAudio });
        //tick.setVolume(0.8);
        //tick.play();
        console.log("playing..");
    }

    next() {
        console.log('next button clicked');
        const nSound = new UIfx(btnSound);
        nSound.play();
        if (this.state.alphaTick < 2) {
            this.setState({ alphaTick: this.state.alphaTick + 1 });
        }
        else {
            this.setState({ currentPosition: this.state.currentPosition + 1, alphaTick: 0 });
        }
    }

    previous() {
        console.log('previous button clicked');
        const pSound = new UIfx(btnSound);
        pSound.play();
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
        const tick = new UIfx(this.state.alphabets[this.state.currentPosition].letterSound);
        tick.setVolume(0.8);
        console.log("playing..");
        console.log(this.state.alphabets[this.state.currentPosition].letterSound);
        return (
            <div className="game">
                <div className="option">
                    <div className="fields">
                        <div className="field-block">
                            {this.state.alphabets[this.state.currentPosition].letter}
                        </div>
                    </div>
                    <div className="buttons">
                        <a onClick={this.previous} className="button prev">Previous</a>
                        <a onClick={() => tick.play()} className="button sound">Play Sound Again</a>
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
        );

    }
}

export default ABCGame;