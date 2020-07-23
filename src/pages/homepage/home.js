import React, { Component } from 'react';
import './home.css';
import {Grid, Cell} from 'react-mdl'
import titlePage from './pictures/titlePage.png'


// export default function Home() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div> HEllo World</div>
//       </header>
//     </div>
//   );
// }

class home extends Component{
  render(){
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className = "landing-grid">
          <Cell col={12}>
            <img
            src={titlePage}
            className="homepage-img"
            />
            <div className = "banner-text">
              <h1>About Us</h1>
            <hr/>
            <p className = 'lead text-center'> 
            {' '}
            Every child deseverves the same opportunities. Our program hopes to give low-income elementary school kids with disabilities, 
            a personalized service which teaches them primary school topics geared to fit their needs. Our platform is about creating a community 
            for these students. 
            </p>
            </div>
          </Cell>

        </Grid>

      </div>
    )
  }
}

export default home