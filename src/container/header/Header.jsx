import React from 'react';
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's  Build SomeThing Amazing Here With Pluto OpenAl </h1>
        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>   
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people"/>
          <p>1000 people requested the access in last 24hrs</p>
        </div>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt="any"/>
        </div>
      
    </div>
  )
}

export default Header