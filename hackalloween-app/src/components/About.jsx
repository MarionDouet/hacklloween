import React from 'react';
import PhotoMarion from '../images/Photomarion.jpg';
import PhotoEricka from '../images/Photoericka.jpg';
import PhotoLucie from '../images/Photolucie.jpg';
import PhotoInes from '../images/Photoines.jpg'
import {Link} from 'react-router-dom'
import "./About.css"

function About () {
  let audio = new Audio("music.mp3");
  audio.play()
  return (
    
    
    <Link to="/about">
     
    <div >
      <section className="about-section" >
     
      <div className="description">
           <p> Hello, I'm Inès. I love watching horror movies. But I don’t like watching them alone. My favorite horror movies are The circle, Shinning and SAW.</p>
          <img src={PhotoInes} alt="Photo_développeuse" className="img-about" />
        </div>
        
        <div className="description">
           <p> Hello, i'm ericka I'm web developer in Js, happy halloween !!! The first horror film I saw was 'the circle'. I couldn't sleep for the next three days. ^^</p>
          <img src={PhotoEricka} alt="Photo_éveloppeuse" className="img-about" />
        </div>
        <div className="description">
           <p>Hello, je m'apelle luciee je suis dev web depuis peu, j'ai peur de tout , je suis une vrai flipette  </p>
          <img src={PhotoLucie} alt="Photo_développeuse" className="img-about" />
        </div>
        <div className="description">
           <p> Redrum rEdrum reDrum redRum redrUm redruM Redrum rEdrum reDrum redRum redrUm redruM Redrum rEdrum reDrum redRum redrUm redruM Redrum rEdrum reDrum redRum redrUm redruM</p>
          <img src={PhotoMarion} alt="Photo_développeuse" className="img-about" />
        </div>
        
      </section>      
    </div >
    </Link>
  )
  
}

export default About