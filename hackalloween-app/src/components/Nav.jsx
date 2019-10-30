import React from 'react';
import './Nav.css';
import Eye from '../images/Eye.png';

function Nav() {
  return (
    <nav className="nav">
      <div className="title-logo">
        <img src={Eye} alt="Website logo" className="img-nav" />
        <h1 className="title-site">Fear focus</h1>
      </div>
      <div className="about-contact">
        <p>
          <a href="#.h">About</a>
        </p>
        <p>
          <a href="#.h">Contact</a>
        </p>
      </div>
    </nav>
  );
}

export default Nav;