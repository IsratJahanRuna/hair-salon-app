import React, { useEffect, useState } from 'react';
import hairCut from '../../../images/hair-cut.jpg';
import hairMassage from '../../../images/hair-massage.jpg';
import hairSalon from '../../../images/hair-salon.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Service.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://shrouded-bastion-35026.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="services-container mt-3" style={{backgroundColor:"#f7dfd2",color:"#721946"}}>
            <div className="text-center">
                <div className="pt-5">
                <h2 >WHAT WE’RE OFFERING</h2>
                </div>
               
            </div>
            <div className="d-flex justify-content-center service">
            <div className="w-75 row mt-2 pt-4">
                {
                    services.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;