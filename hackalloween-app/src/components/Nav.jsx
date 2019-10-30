import React from 'react';
import './Nav.css';
import Eye from '../images/Eye.png';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <div className="title-logo">
        <img src={Eye} alt="Website logo" className="img-nav" />
      </div>
      <h1 className="title-site">Fear focus</h1>
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