import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
    <footer className="footer">

        <div className="container">

            <div className="footer__wrapper">

                <div className="footer__boxs">

                    <div className="footer__box active">
                        <h3>Digital Agency</h3>
                        <p>Building digital products, 
                        brands & experience</p>
                    </div>

                    <div className="footer__box">
                        <h3>Resources</h3>
                        <p>Guides</p>
                        <p>Blog</p>
                        <p>Cuistomer Stories</p>
                        <p>Glossery</p>
                    </div>

                    <div className="footer__box">
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Partners</p>
                        <p>Contact Us</p>
                    </div>

                    <div className="footer__box">
                        <h3>Social Media</h3>
                        <p>LinkedIn</p>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </div>
                </div>

                <p className='P'>© Matheus. Todos os direitos reservados</p>

            </div>

        </div>

    </footer>
    </>
  )
}

export default Footer