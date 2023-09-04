import React from "react";
import '../../styles/start.css';
import trainerImg from '../../assets/img/trainer.png'

const Start = () => {
    return <section id="classes">
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src= {trainerImg} alt="" data-aos="fade-left" data-aos-duration="2000"/>
                </div>

                <div className="start__content" data-aos="fade-right" data-aos-duration="2000">
                    <h2 className="section__title">Ready to make a <span 
                    className="highlights">change?</span></h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,voluptate magni molestias 
                    voluptatem qui velit nobis ut ab nesciunt architecto. Ea suscipit nemo non similique tenetur facilis 
                    vel omnis porro!
                    </p>
                    <button className="register__btn">Get Started</button>
                </div>

            </div>
        </div>
    </section>
}
export default Start;