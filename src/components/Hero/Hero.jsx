import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero-image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"


const Hero = () => {
    
    const mobile = window.innerWidth <=768 ? false : true;


    return (
        <div className='hero' id='hero'>
            <div className="blur hero-blur"></div>
            <div className="left-h"><Header />
                {/* The best ad  */}
                <div className="the-best-ad">
                    <div></div>
                    <span>The Best Fitness Club In The Town</span>
                </div>
                {/*Hero heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape</span>
                        <span> Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/*Figures */}
                <div className="figures">
                    <div>
                        <span>1</span>
                        <span>Expert Coach</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>
                {/*hero button */}
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>
            <div className="right-h">
                {mobile && <button className="btn">Join Now</button>}

                {mobile && <div className="heart-rate">
                    <img src={heart} alt='' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>}
                {/*hero images */}
                <img src={hero_image} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back' />
                {/*calories */}
                <div className="calories">
                    <img src={calories} alt="" />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
