import React from "react";
import '../../styles/pricing.css'

const Pricing = () =>{
    return <section id="pricing-plan">
        <div className="container">
            <div className="pricing__top">
                <h2 className="section__title">Gym <span 
                className="highlights">Pricing</span>Plan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing <br/>
                elit. Recusandae quod ratione velit doloremque facere enim.</p>
            </div>

            {/* ======================= Pricing Wrapper ================================= */}
            <div className="pricing__wrapper">
                <div className="pricing__item" data-aos="fade-up" data-aos-duration="2000">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Regular Member</h2>
                        <h2 className="pricing section__title">RS.2500 <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>unlimited access to the gym</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>customer support</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>personal trainer</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>standard options</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>5 classes per week</li>
                        </ul>

                        <button className="register__btn">Join Now</button>

                    </div>

                </div>

                <div className="pricing__item pricing__item02" data-aos="fade-up" data-aos-duration="2000">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Premium Member</h2>
                        <h2 className="pricing section__title">RS.5000 <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>unlimited access to the gym</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>customer support</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>personal trainer</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>standard options</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>5 classes per week</li>
                        </ul>

                        <button className="register__btn">Join Now</button>

                    </div>

                </div>

                <div className="pricing__item" data-aos="fade-up" data-aos-duration="2000">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Standard Member</h2>
                        <h2 className="pricing section__title">RS.10000 <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>unlimited access to the gym</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>customer support</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>personal trainer</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>standard options</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>5 classes per week</li>
                        </ul>

                        <button className="register__btn">Join Now</button>

                    </div>

                </div>



            </div>

        </div>
    </section>
}
export default Pricing;