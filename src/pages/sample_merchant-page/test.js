import React, {useState, useEffect} from 'react';
import axios from 'axios';
const {base_URL} = require('../../const')

export default function Mer(props) {
  const [merchants, setMerchants] = useState([]);
  useEffect(() => {
    getMerchant();
  }, []);

  function getMerchant() {
   axios.get(base_URL+'/get')
    .then(result=>{setMerchants(result.data)})
    .catch((err)=>{console.log(err)})
  }

  function createMerchant() {
    let name = prompt('Enter merchant name');
    let email = prompt('Enter merchant email');
    let obj = {
      name: name,
      email: email
    }
    axios.post(base_URL+'/createMerchants',obj)
    .then(()=>{getMerchant()})
    .catch((err)=>{console.log(err)})
  }
  
  function deleteMerchant() {
    let name = prompt('Enter merchant name');
    axios.post(base_URL+'/deleteMerchant',{name:name})
    .then(()=>{getMerchant()})
    .catch((err)=>{console.log(err)})
  }
  
  return (
    <div>
      <p>Merchant-Names</p>
      {merchants ? merchants.map((i,k)=><p key={k}>Name: {i.name}</p>) : 'There is no merchant data available'}
      <br />
      <button onClick={createMerchant}>Add merchant</button>
      <br />
      <button onClick={deleteMerchant}>Delete merchant</button>
      <br />
      <audio controls>
        <source src={base_URL+'/mp3/a'} type="audio/mp3"/>
        Your browser does not support the audio tag.
      </audio>
      <audio controls>
        <source src={base_URL+'/mp3/b'} type="audio/mp3"/>
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
