import React from 'react';
import './Home.css';
import Moon from '../images/Moon.mp4';



function Home() {
  return (
    <div className="containervideo">
<video className='videoTag' autoPlay loop muted>
    <source src={Moon} type='video/mp4' />
    <source src={Moon} type='video/ogg' />
</video>  
    </div>
  );
}


export default Home;