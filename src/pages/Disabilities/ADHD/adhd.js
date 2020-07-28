import React, { Component } from 'react';
import Navbar from "../../../components/navbar/navbar.js";
import GameLayout from '../Autism/gameLayout.js'
import '../Autism/disabilities.css'
const {AutismColors} = require('../../../const')
export default class ADHD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: AutismColors.blue,
    };
  }
  componentDidMount () {
    this.initTheme ()
  }

  initTheme () {
    let theme = JSON.parse(localStorage.getItem('theme'))
    theme && this.setState({theme:theme})
  }
  render() {
    return (
      <div className='adhd-page'>
        <Navbar adhd={()=>this.initTheme()}/>
        <div style={{ width: '100%', margin: 'auto' }}>
          <div className='adhd-page'>       
        <div className="banner-texts">
              <h1>About Us</h1>
              <p className='lead text-center'>
                <br/>
                THIS PAGE IS CURRENTLY UNDER CONSTRUCTION
            </p>           
            </div>
            </div>        
          </div>
        </div>
        )
      }
    }
