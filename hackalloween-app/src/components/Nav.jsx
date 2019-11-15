import React, { useEffect } from 'react';
import './Nav.css';
import Eye from '../images/Eye.png';
import { NavLink } from 'react-router-dom';
import sound from '../images/bruit.mp3';



function Nav() {
  const audio = new Audio(sound);
  useEffect(() => audio.play(sound), [audio]);

  return (
    <nav className="nav">
      <NavLink to="/" className="alink" >

        <div className="title-logo">
          <img src={Eye} alt="Website logo" className="img-nav" />
        </div>

        <h1 className="title-site">Fear focus</h1>
      </NavLink>
      <div className="about-contact">
        <p>
          <NavLink to="/about" >About</NavLink>
        </p>
        <p>
          <NavLink to="/top" >Top</NavLink>
        </p>
      </div>
    </nav>
  );
}

export default Nav;