import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <main>  
        <section className='hero-section'>
            <div className='hero-content'>
                <h1 className='hero-h1'>You got the travel plans, we got the travel vans.</h1>
                <p className='hero-p'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className='hero-btn'>Find your van</button>
            </div>
        </section>  
    </main>
  )
}

export default Hero
