import { useState } from 'react'
import { useEffect } from "react";
import viltrumWallpaper from './assets/viltrum-wp.jpg'
import viltrumLineup from './assets/viltrum-lineup.png'
import thraggSitting from './assets/thragg-sitting.jpg'
import thraggLook from './assets/thragg-look.jpg'
import anessa from './assets/anessa-pose.jpg'
import conquestBlood from './assets/conquest-drenched-in-blood.png'
import thraggPose from './assets/thragg-pose-space.png'
import { Link } from 'react-router-dom'
import Header from './Header'

function App() {

  return (
    <>
      <Header />
       <div className="home-hero">
         <img src={viltrumWallpaper} />
         <div className="home-overlay">
         <h2>"Viltrumites have conquered thousands of planets.Waged war across hundreds of light years. They rule over the largest empire the universe has ever seen."</h2>
         </div>
       </div>
       <div className="home-content-line"></div>
      <div>
        <div className="home-section war-text">
          <h2 className="layer-4">
            <span className="line1">WE WILL HONOR OUR FALLEN</span>
            <span className="line2">REBUILD OURSELVES AT ANY COST</span>
            <span className="line3">DESTROY THOSE WHO THOUGHT THEY COULD EXTINGUISH US</span>
          </h2>
        </div>
        <div className="home-section empire-visual">
          <img src={viltrumLineup} alt="viltrum lineup" className='viltrum-lineup-img'/>
          <div className='character-strip'>
            <img src={conquestBlood} alt="Conquest drenched in blood" className='conquest-blood-img'/>
            <img src={thraggLook} alt="Thragg looking" className='thragg-look-img'/>
            <img src={anessa} alt="Anessa pose" className='anessa-img'/>
            </div>
        </div>
        <div className="home-section quotes-section">
          <div className='emperor-argal-quote'>Emperor Argal showed us our strength. Taught us our greatness, gave us our destiny. Because of him, all is ours.</div>
          <div className='coalition-quote'>The coalition thinks it is strong, but they will shatter before our strength, our devotion, our vengeance. They think they are our equals, but they are not even the dust beneath our heels.</div>
        </div>
        <div className="home-section final-section">
          <h2 className="layer-3">
            <span>WE ARE VILTRUMITES</span><br />
            <span>WE ARE WITHOUT END</span>
          </h2>
        </div>
      </div>
      <div className='footer-line'></div>
      <div className='designed-by'>DESIGNED BY: Fuad</div>
    </>
  );
}

export default App
