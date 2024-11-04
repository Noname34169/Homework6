import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <>
    <section className="hero">
        <div className="container">
            <div className="hero__wrapper">

                <img src="/designer-team.png" alt="" />

                <div className="hero__box">
                    <h2>Branding & Design system</h2>
                    <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>

                    <img src="/Arrow.png" alt="" />
                    </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Hero