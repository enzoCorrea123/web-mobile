import React from 'react';
import HeaderSite from './components/header';
import Images from './components/images';
import House from './components/house';
import Product from './components/products'
import Rooms from './components/rooms';
import Benefits from './components/benefits';
import Footer from './components/footer';
import './App.css'

const App = () => {
  return (
    <>
      <HeaderSite/>
      <Images tamanho="500px"/>
      <House/>
      <Product/>
      <Rooms/>
      <Benefits/>
      <Footer/>
    </>
    )
};

export default App;
