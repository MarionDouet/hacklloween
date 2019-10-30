/* eslint-disable no-irregular-whitespace */
import React from 'react';
import './Footer.css';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';

function Footer() {
  return (
    <div className="containerfooter">
      <div className="sectionfooter">
        <div className="titlefooter">Fear focus</div>
        <p className="text-footer">
          Best selection of horror movies for unforgettable evenings
        </p>
      </div>
      <div className="network">
        <a href="https://www.instagram.com/?hl=fr">
          <img className="icone" src={instagram} alt="instagram" />
        </a>
        <a href="https://twitter.com">
          <img className="icone" src={twitter} alt="twitter" />
        </a>
        /
        <a href="https://facebook.com">
          <img className="icone" src={facebook} alt="facebook" />
        </a>
      </div>
      <div className="sectionfooter">
        <div className="titlefooter"> LINKS </div>
        <a className="links" href>
          About
        </a>
        <a className="links" href>
          Top
        </a>
      </div>
    </div>
  );
}

export default Footer;