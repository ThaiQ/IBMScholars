import React, { Component } from "react";
import UserNavbar from "../../../components/navbar/navbar";
import Board from "../../../components/boards-cards/board";
import Card from "../../../components/boards-cards/card";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ABCGame2.css";
import { Link } from "react-router-dom";
const { AutismColors } = require('../../../const')

export default class ABCGame2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: AutismColors.blue,
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
      modal: false,
      msg: '',
    };
  }

  checkAnswers() {
    var aBoard = document.getElementById("board-a");
    var bBoard = document.getElementById("board-b");
    var cBoard = document.getElementById("board-c");

    var aBoardArr = Array.prototype.slice.call(aBoard.children);
    var bBoardArr = Array.prototype.slice.call(bBoard.children);
    var cBoardArr = Array.prototype.slice.call(cBoard.children);

    var aCard = document.getElementById("card-a");
    var bCard = document.getElementById("card-b");
    var cCard = document.getElementById("card-c");
    var aWordCard = document.getElementById("card-a-word");
    var bWordCard = document.getElementById("card-b-word");
    var cWordCard = document.getElementById("card-c-word");

    if (aBoardArr.length > 3 || bBoardArr.length > 3 || cBoardArr.length > 3) {
      return this.toggleModal('Oops! Too many cards per picture!')
    }

    if (
      !aBoardArr.includes(aCard) ||
      !aBoardArr.includes(aWordCard) ||
      !bBoardArr.includes(bCard) ||
      !bBoardArr.includes(bWordCard) ||
      !cBoardArr.includes(cCard) ||
      !cBoardArr.includes(cWordCard)
    ) {
      return this.toggleModal('Oops, almost! Try Again.')
    } else {
      let usr = JSON.parse(localStorage.getItem("user"));
      localStorage.setItem('user', JSON.stringify({
        ...usr,
        points: usr.points + 50
      }))
      return this.toggleModal("Congrats! You've completed the game! +50 points")
    }
  }

  componentDidMount() {
    this.initTheme()
  }

  initTheme() {
    let theme = JSON.parse(localStorage.getItem('theme'))
    theme && this.setState({ theme: theme })
  }

  toggleModal(msg) {
    this.setState({msg: msg||''}, ()=> {
      this.setState({ modal: !this.state.modal })
    })
  }

  render() {
    return (
      <div>
        <UserNavbar matching={() => this.initTheme()} />
        <div className="abcgame2" style={{ background: this.state.theme.normal }}>
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
                <Card id={card.id} className="matching-card" draggable="true">
                  <p>{card.word}</p>
                </Card>
              ))}
            </Board>
            <Board id="board-a" className="board">
              <img
                id="apple-pic"
                className="card-image"
                src={"https://i.imgur.com/afw4QTR.png"}
                alt={"apple pic"}
                draggable="false"
              />
            </Board>
            <Board id="board-b" className="board">
              <img
                id="banana-pic"
                className="card-image"
                src={"https://i.imgur.com/lKcpdPX.png"}
                alt={"banana pic"}
                draggable="false"
              />
            </Board>
            <Board id="board-c" className="board">
              <img
                id="cat-pic"
                className="card-image"
                src={"https://i.imgur.com/1D5ZtxD.png"}
                alt={"cat pic"}
                draggable="false"
              />
            </Board>
          </main>
          <Link to="autism" id='game2-submit'>
            <Button className="the-btns">
              Back
          </Button>
          </Link>
          <Button
            onClick={() => {
              this.checkAnswers();
            }}
            className="the-btns"
          >
            Submit
          </Button>
        </div>

        <Modal isOpen={this.state.modal} toggle={() => { this.toggleModal() }}>
          <ModalBody>
            {this.state.msg}
          </ModalBody>
          <ModalFooter>
              <Button color="primary" style={{ backgroundColor: this.state.theme.dark }}
                onClick={() => { this.toggleModal() }}>OK!</Button>{' '}
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}
