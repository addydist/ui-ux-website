import React from 'react';
import './brand.css';
import img1 from "../../assets/google.png";
import img2 from "../../assets/shopify.png";
import img3 from "../../assets/slack.png";
import img4 from "../../assets/dropbox.png";
import img5 from "../../assets/atlassian.png";

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={img1} alt="google"/>
      </div>
      <div>
        <img src={img2} alt="shopify"/>
      </div>
      <div>
        <img src={img3} alt="slack"/>
      </div>
      <div>
        <img src={img4} alt="dropbox"/>
      </div>
      <div>
        <img src={img5} alt="atlassian"/>
      </div>
    </div>
  )
}

export default Brand