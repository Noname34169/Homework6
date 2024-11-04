import React, { useState } from 'react'
import './Header.scss'

const Header = () => {

  const [isActive, setIsActive]  = useState(false)


  const toggleBurger = () => {
    setIsActive(!isActive)
  }



  return (
    <>
    <header className="header">
        <div className="container">
            <div className="header__wrapper">

            <h2>Digital Agency</h2>

            <div className={`header__menu ${isActive ? 'active' : ''}`}>
                <a href="">home</a>
                <a href="">about</a>
                <a href="">testimonials</a>
                <a href="">contact</a>
            </div>

            <div onClick={toggleBurger} className={`burger ${isActive ? 'active' : ''}`}>
                <div></div>
                <div></div>
            </div>

            </div>
        </div>
    </header>
    </>
  )
}

export default Header