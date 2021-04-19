import React from 'react';
import { useHistory } from 'react-router';

const ServiceDetail = ({ service }) => {
    const history=useHistory()
    const handleChoose=(_id)=>{
        history.push(`/order/${_id}`)
    }
    return (
        
            <div className="col-md-4 text-center pb-4 service"  onClick={()=>handleChoose(service._id)}>
                {
                service.image ? <img style={{ width: "15rem", height: "18rem" }} src={`data:image/png;base64,${service.image.img}`} alt=""/>
                    :
                    <img style={{ width: "15rem", height: "18rem" }} className="img-fluid mb-3" src={`https://shrouded-bastion-35026.herokuapp.com/${service.img}`} alt="" />
            }
                <h5 className="mt-3 mb-3">{service.title} </h5>
                <p>{service.price} BDT</p>
                <p className="text-secondary">{service.description}</p>
                <button onClick={()=>handleChoose(service._id)} style={{backgroundColor:"#721946", color:"white"}} className="btn">Choose Now</button>
            </div>
        
    );
};

export default ServiceDetail;