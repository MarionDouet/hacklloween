import React from 'react';
import './Top.css';
import {Link} from 'react-router-dom';
import Forest from '../images/Forest - 17844.mp4';
import ImgSaw from '../img-top/saw-3.jpg';
import ImgCanibalHolocaust from'../img-top/Cannibal-Holocaust.jpg';
import ImgFinalDestination from '../img-top/final-destination2.jpg';
import ImgParanormalActivity from '../img-top/paranormal-activity.jpg';
import ImgTheExorcist from '../img-top/The-Exorcist.jpg';
import ImgScream from '../img-top/scream-4.jpg';
import ImgBlairWitch from '../img-top/Blair-Witch.jpg';
import ImgInsidious from '../img-top/insidious2.jpg';
import ImgPsychose from '../img-top/psychose.jpg';


function Top() {
    return (
        <Link to="/top">
            <div className="videoforest">
                <video className='forest' autoPlay loop muted>
                    <source src={Forest} type='video/mp4'/>
                    <source src={Forest} type='video/ogg' />
                </video>
            </div>
            <div >
                <div className="top-movies">
                    <div className="top-gore">
                            <p>
                                <h3>Top gore</h3>
                            </p>
                                    <img src={ImgSaw} alt="images saw" className="img-top" />
                                    <img src={ImgCanibalHolocaust} alt="images cannibal holocaust" className="img-top" />
                                    <img src={ImgFinalDestination} alt="images final destination" className="img-top" />
                    </div>   
                    <div className="top-nanar">

                                <p>
                                    <h3>Top nanar</h3>
                                </p>
                            <img src={ImgParanormalActivity} alt="images paranormal activity" className="img-top" />
                            <img src={ImgTheExorcist} alt="images the exorcist " className="img-top" />
                            <img src={ImgScream} alt="images scream " className="img-top" />
                    </div>
                    <div className="top-omg">
                                <p>
                                    <h3>Top omg</h3>
                                </p>

                            <img src={ImgBlairWitch} alt="images blair witch" className="img-top" />
                            <img src={ImgInsidious} alt="images insidious " className="img-top" />
                            <img src={ImgPsychose} alt="images psychose " className="img-top" />
                    </div>
                </div>
             </div>
             
        </Link>
    
    
    );
 }

 export default Top;