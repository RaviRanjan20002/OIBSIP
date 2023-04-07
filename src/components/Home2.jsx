import React from 'react';
import rcb from "../images/rcb.webp";
import csk from "../images/csk.jpg";
import Mumbai from "../images/Mumbai.jpg";
import kolk from "../images/kolk.jpg";
import guj from "../images/guj.jpg";
import delhi from "../images/delhi.jpg";
import lsg from "../images/lsg.jpg";
import raj from "../images/raj.jpg";
import pun from "../images/pun.jpg";
import srh from "../images/srh.webp";
const Home2 = () => {
  return (
    <div className='home2'>
    <div className='h'>
    <h1>PARTICIPATING TEAMS</h1>
    </div>
    <div className='team'>
     <div className='rcb'>
      <img className='rc' src={rcb} alt="rcb"/>
     </div>
     
     <div className='csk'>
      <img className='cs' src={csk} alt="rcb"/>
     </div>

     <div className='mi'>
      <img className='mum' src={Mumbai} alt="rcb"/>
     </div>

     <div className='ko'>
      <img className='kol' src={kolk} alt="rcb"/>
     </div>

    </div>



    <div className='team'>
     <div className='rcb'>
      <img className='rc' src={raj} alt="rajsthan"/>
     </div>
     
     <div className='csk'>
      <img className='cs' src={lsg} alt="lucknow"/>
     </div>

     <div className='mi'>
      <img className='mum' src={guj} alt="gujarat"/>
     </div>

     <div className='ko'>
      <img className='kol' src={delhi} alt="delhi"/>
     </div>
    </div>





    <div className='team'>
     <div className='rcb'>
      <img className='rc' src={srh} alt="rajsthan"/>
     </div>
     
     <div className='csk'>
      <img className='cs' src={pun} alt="lucknow"/>
     </div>
    </div>

    </div>
  )
}

export default Home2