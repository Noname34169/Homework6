import React from 'react'
import './Catalog.scss'

const Catalog = () => {
  return (
    <>
    <section className="catalog">
        <div className="container">
            <div className="catalog__wrapper">
                
                <p>Trusted By 4,000+ Companies</p>

                <nav className="nav">
                    <a  href="">
                        <img className='a' src="/Vector.png" alt="" />
                    </a>
                    <a href="">
                        <img  className='aa' src="/Slack.png" alt="" />
                    </a>
                    <a href="">
                        <img className='aaa' src="/dropbox.png" alt="" />
                    </a>
                    <a href="">
                        <img className='aaaa' src="/zoom.png" alt="" />
                    </a>
                </nav>

            </div>
        </div>
    </section>
    </>
  )
}

export default Catalog