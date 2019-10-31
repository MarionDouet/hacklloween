import React, { useEffect } from 'react';
import './Nav.css';
import Eye from '../images/Eye.png';
import {Link} from 'react-router-dom';
import sound from '../images/bruit.mp3'


function Nav() {
  const audio = new Audio(sound);
  useEffect(() => audio.play(sound), [audio]);

  return (
    <nav className="nav">
      <Link to="/">
        <div className="title-logo">
     <img src={Eye} alt="Website logo" className="img-nav" />
     </div>
      
      <h1 className="title-site">Fear focus</h1>
      </Link>
      <div className="about-contact">
        <p>
          <Link to ="/about">About</Link>
        </p>
        <p>
          <Link to ="/top">Top</Link>
        </p>
      </div>
    </nav>
  );
}

export default Nav;