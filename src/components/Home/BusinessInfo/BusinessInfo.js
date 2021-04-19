import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Uttara,Dhaka',
        icon: faMapMarker,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="container">
            <div className="w-100 mb-5 pb-5 mt-5 d-flex justify-content-between ">
                {
                    infosData.map(info =><InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;