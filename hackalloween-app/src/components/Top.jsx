import React from 'react';
import './Top.css';
import {Link} from 'react-router-dom';
import Forest from '../images/Forest - 17844.mp4';


function Top() {
    return (
        <Link to="/top">
            <div className="videoforest">
                <video className='forest' autoPlay loop muted>
                    <source src={Forest} type='video/mp4'/>
                    <source src={Forest} type='video/ogg' />
                </video>
            </div>
            <div className="top-movies" id="top-movies">
                    <p>
                        <a to ="/top-gore">Top gore</a>
                    </p>
                    <p>
                        <a to ="/top-nanar">Top nanar</a>
                    </p>
                    <p>
                        <a to ="/top-omg">Top omg</a>
                    </p>

            </div>
        </Link>
    
    
    );
 }

 export default Top;