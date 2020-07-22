import React, { Component } from 'react';
import './home.css';
import {Grid, Cell} from 'react-mdl'


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
            src="https://lh3.googleusercontent.com/proxy/OxTanxC8f6oEfxLrntPb2VnLzTdnFRFdnwx_0Jqmu_l1npmTk4K9wkrRsaXvKrHfbIM52s7rlzs-N7kIxrc4RnVdqapWvdAbGasgCYA"
            alt="homepage"
            className="homepage-img"
            />
            <div className = "banner-text">
              <h1>Baby Steps Education</h1>
            <hr/>
            <p>
              Enter info about the org here. 
            </p>
            </div>
          </Cell>

        </Grid>

      </div>
    )
  }
}

export default home