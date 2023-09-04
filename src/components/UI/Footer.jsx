import React from "react";
import '../../styles/footer.css';
import logo from '../../assets/img/dumble.png'

const Footer = () => {
    const year = new Date().getFullYear()
    return <footer className="footer" data-aos="fade-up" data-aos-duration="2000">
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__box">
                <div className="logo">
                    <div className="logo__img">
                        <img src= {logo} alt=" "/>
                    </div>
                    <h2>FitBody</h2>
                </div>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> Optio dolor rem accusantium aliquid 
                vitae itaque similique harum quam, perspiciatis assumenda!
                </p>
            </div>
            
            <div className="footer__box">
                <h4 className="footer__title">Company</h4>
                <ul className="footer__links">
                    {/* <li>
                        <a href="#">Company</a>
                    </li> */}

                    <li>
                        <a href="#">Our Program</a>
                    </li>

                    <li>
                        <a href="#">Our Plan</a>
                    </li>

                    <li>
                        <a href="#">Become a member</a>
                    </li>

                </ul>
            </div>

            <div className="footer__box">
                <h4 className="footer__title">Quick Links</h4>
                <ul className="footer__links">
                    {/* <li>
                        <a href="#">Company</a>
                    </li> */}

                    <li>
                        <a href="#">About Us</a>
                    </li>

                    <li>
                        <a href="#">Contact Us</a>
                    </li>

                    <li>
                        <a href="#">Support</a>
                    </li>

                </ul>
            </div>

            <div className="footer__box">
                <h4 className="footer__title">Quick Links</h4>
                <ul className="footer__links">
                    {/* <li>
                        <a href="#">Company</a>
                    </li> */}

                    <li>
                        <a href="#">About Us</a>
                    </li>

                    <li>
                        <a href="#">Contact Us</a>
                    </li>

                    <li>
                        <a href="#">Support</a>
                    </li>

                </ul>
            </div>

        </div>
        <p className="copyright">Copyright - {year} developed by subahan shaik. All rights reserved.</p>
    </div>
</footer>
}
export default Footer;