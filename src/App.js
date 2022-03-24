import React from 'react';
import { Article,Brand,Cta,Feature,Navbar } from './components';
import {Header,Features,Footer,WhatGPT3,Possibilities,Blog} from './container';
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibilities/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App