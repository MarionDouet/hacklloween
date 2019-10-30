import React from 'react';
import PhotoMarion from '../images/Photomarion.jpg';
import PhotoEricka from '../images/Photoericka.jpg';
import PhotoLucie from '../images/Photolucie.jpg';
import PhotoInes from '../images/Photoines.jpg'
import {Link} from 'react-router-dom'
import "./About.css"

function About () {
  return (
    
    <Link to="/about">
    <div >
      <section className="about-section" >

        <div className="description">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro rerum, nihil aperiam asperiores ut,
             voluptatum velit ea pariatur dolore quidem adipisci architecto nam dignissimos molestiae. Blanditiis dolorem deserunt eaque.</p>
          <img src={PhotoMarion} alt="Photo développeuse" className="img-about" />
        </div>
        <div className="description">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro rerum, nihil aperiam asperiores ut,
             voluptatum velit ea pariatur dolore quidem adipisci architecto nam dignissimos molestiae. Blanditiis dolorem deserunt eaque.</p>
          <img src={PhotoEricka} alt="Photo développeuse" className="img-about" />
        </div>
        <div className="description">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro rerum, nihil aperiam asperiores ut,
             voluptatum velit ea pariatur dolore quidem adipisci architecto nam dignissimos molestiae. Blanditiis dolorem deserunt eaque.</p>
          <img src={PhotoLucie} alt="Photo développeuse" className="img-about" />
        </div>
        <div className="description">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro rerum, nihil aperiam asperiores ut,
             voluptatum velit ea pariatur dolore quidem adipisci architecto nam dignissimos molestiae. Blanditiis dolorem deserunt eaque.</p>
          <img src={PhotoInes} alt="Photo développeuse" className="img-about" />
        </div>
        
      </section>      
    </div >
    </Link>
  )
  
}

export default About