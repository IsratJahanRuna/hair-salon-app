import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    
    const ourAddress = [
        {name: "New York - 101010 Hudson"},
        {name: "Yards"},
       
    ]
    const OurService= [
        {name: "Hair Cut" , link: "/services"},
        {name: "Hair Spa" , link: "/services"},
        {name: "Hair Massage" , link: "/services"},
        
    ]
    const Gallery = [
        {name: "Hair Straight" , link: "/service"},
        {name: "Herbal Spa" , link: "/service"},
        {name: "Herbal Massage" , link: "/service"},
       
    ]
    return (
        <footer className="footer-area ">
            <div className="container  pt-5">
                <div className="row py-4 justify-content-center">
                
                    <FooterCol key={2} menuTitle="Services" menuItems={OurService}/>
                    <FooterCol key={3} menuTitle="Hair Treatment" menuItems={Gallery}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5 ms-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center ">
                    <p className="text-white">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;