import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import ViewOrder from '../ViewOrder/ViewOrder';

import NavbarDashboard from '../../NavbarDashboard/NavbarDashboard';
import Sidebar from '../../Sidebar/Sidebar';
// import { UserContext } from '../../../App';
// import NavbarDashboard from '../../Dashboard/NavbarDashboard/NavbarDashboard';
// import Sidebar from '../../Dashboard/Sidebar/Sidebar';
// import ViewOrder from '../ViewOrder/ViewOrder';




// const courseData = [
//     {
//         img: service1,
//         name: 'Bangali Food',
//         desc: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
//     }
// ]



const ViewOrderList = () => {
    const [orders,setOrders] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://shrouded-bastion-35026.herokuapp.com/serviceList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])

    return (
        <div className="fluid-container">
            <NavbarDashboard></NavbarDashboard>
            <div className="row  mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className=" col-md-10 p-4 mx-auto">
                <h1 className="border-bottom mb-2">Order List</h1>
                    <div className="row"> 
                        {
                            orders.map(order => <ViewOrder order={order}></ViewOrder>)
                        }
                    </div>

                </div>
            </div>
        </div>

    );
};



export default ViewOrderList;




