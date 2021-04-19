import React from 'react';
import header from '../../../images/header.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main className="row d-flex justify-content-center" >
            <div className="col-md-6  mt-4" >
                <img src={header} alt="" className="img-fluid header-img w-75 h-100" />
            </div>
            <div className="col-md-6 mt-4 ">
                <div style={{color:"grey"}} className="text-center ">
                    <h1>YOUR COMPLETE </h1>
                    <br />
                    <h1 >HAIR CARE</h1>
                </div>
                <div className="title text-center">
                <button className="header-btn py-3 px-4 mt-4"> <b>Book Appointment</b></button>
                </div>
               
            </div>
        </main>
    );
};

export default HeaderMain;