import React, { Component } from "react";
import UserNavbar from "../../../components/navbar/navbar";
import Board from "../../../components/boards-cards/board";
import Card from "../../../components/boards-cards/card";
import { Button } from "reactstrap";

import "./ABCGame2.css";

export default class ABCGame2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: "card-a",
          word: "A"
        },
        {
          id: "card-b",
          word: "B"
        },
        {
          id: "card-c",
          word: "C"
        },
        {
          id: "card-a-word",
          word: "Apple"
        },
        {
          id: "card-b-word",
          word: "Banana"
        },
        {
          id: "card-c-word",
          word: "Cat"
        }
      ],
      aBoard: [],
      bBoard: [],
      cBoard: []
    };
  }

  checkAnswers() {
    console.log("Submitted");
  }

  render() {
    return (
      <div>
        <UserNavbar />
        <div className="abcgame2">
          <div className="instructions-banner">
            <h1 className="text-center" style={{ paddingTop: 5 }}>
              ABC Matching Game
            </h1>
            <p className="lead text-center">
              {" "}
              It's time to put your lessons to practice! On the left of the page
              is a word bank. For every picture, drag and drop the corresponding
              letter and word. Press submit when you're done. Win up to 50
              points each time you finish!
            </p>
          </div>
          <div>
            <h1 className="bank-label"> WORD BANK </h1>
          </div>
          <main className="flexbox flex-container wrap-reverse">
            <Board id="word-board" className="word-board">
              {this.state.cards.map(card => (
                <Card id={card.id} className="card" draggable="true">
                  <p>{card.word}</p>
                </Card>
              ))}
            </Board>
            <Board id="board-a" className="board">
              <img
                className="card-image"
                src={"https://i.imgur.com/afw4QTR.png"}
                alt={"apple pic"}
              />
            </Board>
            <Board id="board-b" className="board">
              <img
                className="card-image"
                src={"https://i.imgur.com/lKcpdPX.png"}
                alt={"banana pic"}
              />
            </Board>
            <Board id="board-c" className="board">
              <img
                className="card-image"
                src={"https://i.imgur.com/1D5ZtxD.png"}
                alt={"cat pic"}
              />
            </Board>
          </main>
          <Button className="the-btns" href="/matching">
            Start Over
          </Button>
          <Button
            onClick={() => {
              this.checkAnswers();
            }}
            className="the-btns"
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}
