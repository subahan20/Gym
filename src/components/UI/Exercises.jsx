import React from "react";
import '../../styles/exercises.css';
import lungs from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'

const Exercises = () => {
    return <section id="schedule">
        <div className="container excercise__comtainer">
            <div className="excercise__top">
                <h2 className="section__title">
                    Benfits of <span className="highlights">Exercise</span>
                </h2>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada <br/> fames ac turpis egestas.
                </p>
            </div>

        {/* ============================Excerise Lists ========================================== */}
        <div className="exercise__wrapper">
            <div className="exercise__item" data-aos="zoom-in" data-aos-duration="2000">
                <span className="excercise__icon">
                    <img src= {lungs} alt=""/>
                </span>
                <div className="exercise__content">
                    <h4>Healthy Life</h4>
                    <p>
                       Pellentesque habitant morbi tristique senectus.
                    </p>
                </div>
            </div>


            
            <div className="exercise__item" data-aos="zoom-in" data-aos-duration="2000">
                <span className="excercise__icon">
                    <img src= {yoga} alt=""/>
                </span>
                <div className="exercise__content">
                    <h4>Increased Flexibility</h4>
                    <p>
                       Pellentesque habitant morbi tristique senectus.
                    </p>
                </div>
            </div>

            <div className="exercise__item" data-aos="zoom-in" data-aos-duration="2000">
                <span className="excercise__icon">
                    <img src= {extended} alt=""/>
                </span>
                <div className="exercise__content">
                    <h4>Reducing Blood Pressure</h4>
                    <p>
                       Pellentesque habitant morbi tristique senectus.
                    </p>
                </div>
            </div>



        </div>
    </div>
    </section>
}
export default Exercises