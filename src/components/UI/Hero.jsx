import React from "react";
import heroImg from '../../assets/img/gym-02.png';
import dumbleIcon from '../../assets/img/dumble.png';
import '../../styles/hero.css'

const Hero = () =>{
    return <section id="home">
        <div className="container">
            <div className="hero__wrapper">
                 
                {/* ================ Hero Content =================================== */}
                <div className="hero__content">
                    <h2 className="section_title" data-aos='fade-up' data-aos-duration='2000'>
                      Excrise is the key to a 
                      <span className="highlights"> Healthy </span> Life style
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, <br/>eveniet quis dolore iusto vitae 
                       similique alias error fuga sit placeat.
                    </p>

                    <div className="hero__btns" data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
                        <button className="register__btn">Get Started</button>
                        <button className="watch__btn"><span><i class="ri-play-fill"></i></span>Watch Video</button>

                    </div>
                </div>
                {/* ================ Hero img ======================================= */}
                <div className="hero__img">
                    <div className="hero__img-wrapper">
                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box__img">
                                        <img src= {heroImg} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="heart__rate" data-aos="fade-right">
                            <h5>Heart Rate</h5>
                            <span><i class="ri-heart-pulse-fill"></i></span>
                            <h5>2567 BPM</h5>
                        </div>

                        <div className="gym__location" data-aos="fade-left">
                            
                            <span><i class="ri-map-pin-2-fill"></i></span>
                            <h5>
                               Find new <br/> gym near your
                            </h5>
                        </div>

                        <div className="dumble__icon" data-aos="fade-down">
                            <img src= {dumbleIcon} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Hero;