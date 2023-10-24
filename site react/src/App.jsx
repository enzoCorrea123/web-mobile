import React from 'react';
import HeaderSite from './components/header';
import Images from './components/images';
import House from './components/house';
import Product from './components/products'
import './App.css'

const App = () => {
  return (
    <>
      <HeaderSite/>
      <Images tamanho="500px"/>
      <House/>
      <Product/>
    </>
    )
};

export default App;
