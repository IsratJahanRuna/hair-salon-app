
import React from 'react';

const ViewOrder =  ({order}) => {
  
    
  
    return (
        <div className="col-md-4 text-center mb-5">
        
        <div class="card " style={{ width: "20rem", height:"35rem" }}>
             <div>
             {
               order.image ? <img style={{ width: "19.7rem", height: "18rem" }} src={`data:image/png;base64,${order.image.img}`} alt=""/>
                    :
                    <img style={{ width: "19.7rem", height: "18rem" }} className="img-fluid mb-3" src={`https://shrouded-bastion-35026.herokuapp.com/${order.img}`} alt="" />
            }
            
            
            <h4 className="mt-3 mb-3">{order.title}</h4>
            <h3>${order.price}</h3>
            <p>{order.description}</p>
            <button className='btn btn-primary'>{order.status}</button>
            
            </div>
            
        </div>
        </div>
    )
};


export default ViewOrder;