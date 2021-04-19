import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../../App';
import PaymentProcess from '../../../PaymentProcess/PaymentProcess';
import NavbarDashboard from '../../NavbarDashboard/NavbarDashboard';
import Sidebar from '../../Sidebar/Sidebar';

const ServiceOrder = () => {
    const [serviceOrders, setServiceOrders] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();

const handlePaymentSuccess = paymentId => {
    const orderDetails = {
        ...loggedInUser,
        title:title,
        price:price,
        description:description,
        image:image,
        paymentId,
        status:'pending'
        // orderTime: new Date()
    }
    console.log(title)

    fetch('https://shrouded-bastion-35026.herokuapp.com/addOrder', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
    })
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert('your payment completed successfully.')
            }
        })
}

    useEffect(() => {
        fetch(`https://shrouded-bastion-35026.herokuapp.com/order/${id}`)
            .then(res => res.json())
            .then(data => setServiceOrders(data));
    }, [id])

    const {title,price,image,description} = serviceOrders;


    return (
        <div className="fluid-container  ">
            <NavbarDashboard></NavbarDashboard>
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    <h1 className="border-bottom mb-2 text-brand">Course Order</h1>
                    <div className="container">
                        <form>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">User Name</label>
                                <div class="col-sm-10">
                                    <input type="text" defaultValue={loggedInUser.name} class="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">User Email</label>
                                <div class="col-sm-10">
                                    <input type="email" defaultValue={loggedInUser.email} class="form-control" id="inputPassword3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">Course Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" value={title} />
                                </div>
                            </div>
                        </form>

                        <div className="col-md-12 bg-light shadow p-5 rounded">
                            <h3 className="text-primary">Payment</h3>
                            <PaymentProcess handlePayment={handlePaymentSuccess}></PaymentProcess>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceOrder;