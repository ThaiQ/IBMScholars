import React, { Component } from "react";
import UserNavbar from "../../../components/navbar/navbar";
import Board from "../../../components/boards-cards/board";
import Card from "../../../components/boards-cards/card";

import "./ABCGame2.css";

export default class ABCGame2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1"
    };
  }

  //we need a function that changes "draggable" to false when the card is in the right board
  //we also need a function that when the all the cards are not draggable, the game ends

  render() {
    return (
      <div>
        <UserNavbar />
        <div className="abcgame2">
          <div className="instructions-banner">
            <h1 className="text-center" style={{paddingTop: 5}}>ABC Matching Game</h1>
            <p className="lead text-center">
              {" "}
              It's time to put your lessons to practice! On the left of the page
              is a word bank. For every picture, drag and drop the corresponding letter
              and word. Win up to 50 points when you finish!
            </p>
          </div>
          <main className="flexbox">
            <Board id="board-1" className="word-board">
              <Card id="card-a" className="card" draggable="true">
                <p>A</p>
              </Card>
              <Card id="card-b" className="card" draggable="true">
                <p>B</p>
              </Card>
              <Card id="card-c" className="card" draggable="true">
                <p>C</p>
              </Card>
              <Card id="card-a-word" className="card" draggable="true">
                <p>Apple</p>
              </Card>
              <Card id="card-b-word" className="card" draggable="true">
                <p>Banana</p>
              </Card>
              <Card id="card-c-word" className="card" draggable="true">
                <p>Cat</p>
              </Card>
            </Board>

            <Board id="board-2" className="board">
              <Card id="card-2" className="card" draggable="true">
                <p>Card Two</p>
              </Card>
            </Board>
          </main>
        </div>
      </div>
    );
  }
}
