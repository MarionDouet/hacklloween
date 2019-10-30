import React from 'react';
import PhotoMarion from '../images/Photomarion.jpg'
import {Link} from 'react-router-dom'
import "./About.css"

function About () {
  return (
    
    <Link to="/about">
    <div >
      <section >
        <div className="Marion-description">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro rerum, nihil aperiam asperiores ut,
             voluptatum velit ea pariatur dolore quidem adipisci architecto nam dignissimos molestiae. Blanditiis dolorem deserunt eaque.</p>
          <img src={PhotoMarion} alt="Photo développeuse" className="img-about" />
        </div>
        
      </section>      
    </div >
    </Link>
  )
  
}

export default About