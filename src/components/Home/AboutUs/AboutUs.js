import React from 'react';
import hairCut from '../../../images/hairCut.jpg';
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut , faBrush } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    return (
        <div className="row mt-3 about-bg ">
            <div className="col-md-3 about-head" style={{ marginLeft: "40px", marginTop: "60px",fontStyle: "oblique" }}>
                <h1>THE RIGHT PLACE <br /> FOR YOUR HAIRS <br /> & BEARDS</h1>
            </div>
            <div className="col-md-3 m-auto about-mid" >
                <img src={hairCut} alt="" className="img-fluid" />

                <div className="d-flex  mt-4">
                    <div class="card hair-work" style={{marginRight:"30px"}}>
                        <div class="card-body" >
                            <b> <FontAwesomeIcon icon={faCut} /> Hair <br/> Cutting</b>
                     </div>
                    </div>

                    <div class="card hair-work">
                        <div class="card-body">
                            <b> <FontAwesomeIcon icon={faBrush} /> Hair <br/> Colour</b>
                     </div>
                    </div>
                </div>

            </div>
            <div className="col-md-5 about-para" style={{ marginTop: "65px",fontStyle: "oblique" }}>
                <h4 style={{ marginLeft: "7px" }} className="about-para"> <b>We are offering all the hair salon services in your area with the best quality you can ever imagine from a salon.</b></h4>
                <h6 className="mt-4">
                    <ul>
                        <li className="mt-3">Nsectetur cing elit.</li>
                        <li className="mt-3">Suspe ndisse suscipit sagittis leo.</li>
                        <li className="mt-3">Entum estibulum dignissim posuere.</li>
                        <li className="mt-3">If you are going to use a passage.</li>
                        <li className="mt-3">Lorem Ipsum gene on the tend to repeat.</li>

                    </ul>
                </h6>
            </div>
        </div>
    );
};

export default AboutUs;