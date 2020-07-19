import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Mer() {
  const [merchants, setMerchants] = useState([]);
  useEffect(() => {
    getMerchant();
  }, []);

  function getMerchant() {
   axios.get('http://localhost:3001/get')
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
    axios.post('http://localhost:3001/createMerchants',obj)
    .then(()=>{getMerchant()})
    .catch((err)=>{console.log(err)})
  }
  
  function deleteMerchant() {
    let name = prompt('Enter merchant name');
    axios.post('http://localhost:3001/deleteMerchant',{name:name})
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
    </div>
  );
}