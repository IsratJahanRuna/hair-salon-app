import React from 'react';
import header from '../../../images/header.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main className="row my-5">
            <div className="col-md-4 offset-md-1" style={{ marginLeft: "170px" }}>
                <img src={header} alt="" className="img-fluid header-img" />
            </div>
            <div className="col-md-5 offset-md-1 mt-4 title">
                <div style={{color:"grey"}}>
                    <h1>YOUR COMPLETE </h1>
                    <br />
                    <h1 className="ms-1 ps-5">HAIR CARE</h1>
                </div>
                <button className="header-btn py-3 px-4 mt-4"> <b>Book Appointment</b></button>
            </div>
        </main>
    );
};

export default HeaderMain;