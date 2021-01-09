import logo from './logo.svg';
import React from 'react';
import Anime, {anime} from 'react-anime';

import './App.css';

function App() {

  let time = new Date();

  let current_Hour = time.getHours();
  let current_Minute = time.getMinutes();
  let current_Seconds = time.getSeconds();

  // clock handle animation starting point//
  React.useEffect(() => {
    let timeline = anime.timeline({
      duration: 1000,
      easing: "easeOutExpo"
    });

    let seconds = (current_Seconds / 60) * 360;

    let minute = ((current_Minute * 60 + current_Seconds) / 3600) * 360;

    let hour =
      ((current_Hour * 3600 + current_Minute * 60 + current_Seconds) / 43200) *
      360;

    timeline
      .add({
        targets: ".hour",
        rotate: hour - 90
      })
      .add(
        {
          targets: ".minute",
          rotate: minute - 90
        },
        "-=700"
      )
      .add(
        {
          targets: ".second",
          rotate: seconds - 90
        },
        "-=500"
      );
  }, []);




  return (
    
    <div style={{display:'flex'}}>





<div class="loader">
<div className="container">
      
      <svg className='clock' width='100%' height="100%" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className='frame' d="M68 34C68 52.7777 52.7777 68 34 68C15.2223 68 0 52.7777 0 34C0 15.2223 15.2223 0 34 0C52.7777 0 68 15.2223 68 34Z" fill="white"/>
      
      <rect className='minute' x="32" y="34" width="21" height="3"  fill="black" />
      <rect className='hour' x="32" y="34" width="17" height="3.5"  fill="black"/>
      <rect className='second' x="32" y="35" width="22" height="2"  fill="#DD172A"/>
      </svg>
      
      
         

  <div class="face face1">
    <div class="circle"></div>
  </div>
  
  <div class="face face2">
    <div class="circle"></div>
  </div>
  </div>
  
</div>

    </div>
  );
}

export default App;
