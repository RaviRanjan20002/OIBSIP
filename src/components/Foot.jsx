import React from 'react';

import handmobile from "../images/hand-mobile.png";
import playstore from "../images/playstore.png";
import appstore from "../images/appstore.png";

const Foot = () => {
  return (
    <>
    <div className='ft'>
    <div className='txt'>
    <h1> Get the official IPL App </h1>
     <p className='t'>Get the latest scores on the go. Find the latest content, 
     including match highlights, press conferences and recap all at your 
     fingertips by downloading the official IPL app.</p>
     <p>Available on both App store and Playstore.</p>
     <p>Download here for free. </p>
      
     <img className='img' src={appstore} alt="phone"/>
     <img className='play' src={playstore} alt="phone"/>

      </div>
     <img className='hm' src={handmobile} alt="phone"/>
    </div>
    </>
  )
}
export default Foot