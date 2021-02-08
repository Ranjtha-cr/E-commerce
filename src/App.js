import React from 'react';
import ReactDOM from 'react-dom'; 

import './App.css';
import product  from './commonData';
import Card from "./components/Card"

function App() {
  return (
    <>
    {product?.map(product => <Card  product={product}/>)}
  </>
  );
}

export default App;




