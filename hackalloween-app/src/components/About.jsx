import React from 'react';
import PhotoMarion from '../images/Photomarion.jpg'
import {Link} from 'react-router-dom'

function About () {
  return (
    
    <Link to="/about">
    <div className="About" >
      <section >
        <img src={PhotoMarion} alt="Photo développeuse"/>
      </section>      
    </div >
    </Link>
  )
  
}

export default About