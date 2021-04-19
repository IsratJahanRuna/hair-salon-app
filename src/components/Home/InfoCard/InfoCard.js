import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-6 text-white info-card mt-2 ">
        <div className={`d-flex justify-content-center info-container rounded-pill info-${info.background}`}>
            <div>
                <FontAwesomeIcon className="info-icon me-2" icon={info.icon}></FontAwesomeIcon>
            </div>
            <div>
                <h6>{info.title}</h6>
                <small>{info.description}</small>
            </div>
        </div>
    </div>
    );
};

export default InfoCard;