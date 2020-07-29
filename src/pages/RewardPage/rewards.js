import React, { Component } from 'react';
import './rewards.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Label, Row, Col, Button, CardImg, Card, CardBody, CardHeader, CardText } from 'reactstrap';
import axios from 'axios';
import UserNavbar from '../../components/navbar/navbar';
const { AutismColors } = require('../../const')
const { base_URL } = require('../../const')
const value = 7.80;

class Rewards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            price: '',
            id: '',
            theme: AutismColors.blue,
            totalPrice: 0,
            randomID: 0,
            itemInCart: [],
            rewardType: [
                {
                    item: 'RULER',
                    img: '/photos/Ruler.jpg',
                    point: '300'
                },
                {
                    item: 'NOTE CARDS',
                    img: '/photos/Note_Cards.jpg',
                    point: '300'
                },
                {
                    item: 'PENCILS',
                    img: '/photos/Pencils.jpg',
                    point: '400'
                },
                {
                    item: 'CRAYONS',
                    img: '/photos/Crayons.jpg',
                    point: '500',
                },
                {
                    item: 'C PENCILS',
                    img: '/photos/Colored_Pencils.jpg',
                    point: '500',
                },

                {
                    item: 'NOTE BOOK',
                    img: '/photos/Notebooks.jpg',
                    point: '700'
                },

                {
                    item: 'STORY BOOK',
                    img: '/photos/Story_Book.jpg',
                    point: '1000'
                },

                {
                    item: 'CALCULATOR',
                    img: '/photos/Calculator.jpg',
                    point: '2000'
                },
                {
                    item: 'IPAD PRO',
                    img: '/photos/IPAD.jpg',
                    point: '50000'
                },
            ],
            instructions: [
                '1. Select A Prize',
                '2. Check The Shopping Cart',
            ]
        }
        this.getItem = this.getItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.rand = this.rand.bind(this);
    }

    componentDidMount() {
        this.getItem();
        this.initTheme();
    }

    initTheme() {
        let theme = JSON.parse(localStorage.getItem('theme'))
        theme && this.setState({ theme: theme })
    }

    getItem() {
        axios.get(`${base_URL}/getItems`)
            .then(result => { this.setState({ itemInCart: result.data }, () => { this.getTotal(result.data) }) })
            .catch((err) => { console.log(err) })
    }

    // A function that takes in an array of items and adds up the total cost!
    getTotal(list) {
        let totalPrice = 0;
        list.forEach((item) => {
            totalPrice += item.price;
        })
        this.setState({ totalPrice: totalPrice });
    }

    // A function that returns an randomized ID per added item.
    rand(num) {
        let constant = parseInt(num, 10);
        let randomID = Math.random() * constant;
        randomID = Math.ceil(randomID);
        return randomID;
    }

    addItem(name, cost, id) {
        let obj = {
            item: name,
            price: cost,
            id: id,
        }
        axios.post(`${base_URL}/addItem`, obj)
            .then((result) => { this.getItem() })
            .catch((err) => { console.log(err) })
    }

    deleteItem(name, id) {
        let obj = {
            item: name,
            id: id,
        }
        axios.post(`${base_URL}/deleteItem`, obj)
            .then((result) => { this.getItem() })
            .catch((err) => { console.log(err) })
    }

    render() {
        return (
            <div className='parent-container' style={{ backgroundColor: this.state.theme.normal }}>
                <div><UserNavbar reward={() => this.initTheme()} /></div>
                <h2>REWARD</h2>
                <br></br>
                <div className="grid-container">
                    <div className='reward-container'>
                        {this.state.rewardType.map((type, ind) => (
                            <div className='reward-card-wrapper' key={ind}>
                                <Card style={{ backgroundColor: this.state.theme.light }} className='indv-card'>
                                    <CardHeader className='card-header'>{type.item}</CardHeader>
                                    <CardImg className='img' top width="100%" src={type.img} alt="Card image cap" />
                                    <CardBody>
                                        <CardText className='points'>{type.point} {''} POINTS </CardText>
                                        <div className='select-btn-wrapper'>
                                            <Button className='select-btn' theme="secondary"
                                                onClick={() => {
                                                    this.addItem(type.item, type.point, this.rand(type.point));
                                                }}
                                            >
                                                SELECT ITEM
                                </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <div className="points-container" style={{ backgroundColor: this.state.theme.light }}>
                        <h1>
                            Claim Your Reward  &emsp;
                    </h1>
                        <hr />
                        <div>
                            <h4 className='bold-header'>Instructions</h4>
                            {this.state.instructions.map((type, ind) => (
                                <div key={ind} className='instructions-text'>
                                    <Label>{type}</Label>
                                </div>
                            ))
                            }
                        </div> <br></br>
                        <div style={{ width: '70%' }}>
                            <CircularProgressbar
                                className='circle'
                                value={value} maxValue={value * 1000}
                                text={`${value * 100}` + 'PTS'}
                                styles={buildStyles({
                                    pathColor: this.state.theme.normal,
                                    pathColor: this.state.theme.normal,
                                    textColor: '#778899',
                                    trailColor: this.state.theme.normal,
                                })}
                            />
                        </div>
                        <hr />
                        <div>
                            <p className='card-header'>Shopping Cart</p>
                            {this.state.itemInCart ? this.state.itemInCart.map((type, ind) =>
                                <div key={ind}>
                                    <Row className='shopping-list' >
                                        <Col>{type.item}</Col>
                                        <Col>{type.price} POINTS</Col>
                                        <button className='btn'
                                            onClick={() => this.deleteItem(type.item, type.id)}>
                                            <i className="fa fa-trash" />
                                        </button>
                                    </Row>
                                </div>
                            ) : 'No Item In Cart'}
                        </div>
                        <hr />
                        <Row className='shopping-list'>
                            <Col>TOTAL COST:</Col><Col> {this.state.totalPrice} POINTS</Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rewards;
