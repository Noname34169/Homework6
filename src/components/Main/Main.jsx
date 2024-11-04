import React from 'react'
import './Main.scss'

const Main = () => {
  return (
    <>
    <section className="main">
        <div className="container">
            <div className="main__wrapper">
                <p>TESTIMONIALS</p>
                <h2>Read What Other have to Say</h2>

                <div className="main__cards">
                <div className="main__card">
                    <img src="/western-man.png" alt="" />
                    <h3>Andrew Rathore</h3>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Scelerisque Mi, In Malesuada Felis Malesuada Vel. </p>
                </div>
                <div className="main__card">
                    <img src="/western-woman1.png" alt="" />
                    <h3>Vera Duncan</h3>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Scelerisque Mi, In Malesuada Felis Malesuada Vel. </p> 
                </div>
                <div className="main__card">
                    <img src="/western-woman2.png" alt="" />
                    <h3>Mark Smith</h3>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Scelerisque Mi, In Malesuada Felis Malesuada Vel. </p>
                </div>                    
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Main