import React from 'react'
import heroImg from '../images/large-hero.jpg'

const Hero = () => {
    return (
        <div className='row middle-xs center-xs heroContainer' style={{background: `url(${heroImg}) no-repeat center center`}}>
            <div className='col-xs-12 heroTextContainer'>
                <h1>Tadasana Digital</h1>
                <h2>Connect Collaboratively.</h2>
            </div>
        </div>
    )
}

export default Hero