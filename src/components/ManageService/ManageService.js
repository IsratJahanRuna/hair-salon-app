import React, { useEffect, useState } from 'react';
import NavbarDashboard from '../Dashboard/NavbarDashboard/NavbarDashboard';
import Sidebar from '../Dashboard/Sidebar/Sidebar';


const ManageService = () => {
    const [service, setService] = useState([]);
    
    useEffect(() => {
        fetch('https://shrouded-bastion-35026.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const deleted = () => {
        fetch('https://shrouded-bastion-35026.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }

    const handleDelete = (id) => {

        fetch(`https://shrouded-bastion-35026.herokuapp.com/deleteServices/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Product Deleted Successfully');
                    deleted();
                }
            })
    }

    return (
        <div className="fluid-container">
       <NavbarDashboard></NavbarDashboard>
        <div className="row mx-0">
            <div className='col-md-2 p-0'>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 mx-auto">
                <h1 className="border-bottom mb-2">Manage Service</h1>
                    <div className="col-md-12">
                        <h3 className="mb-3 text-primary">Total Product: {service.length}</h3>

                        <table className="table table-sm table-success text-center table-bordered " >
                            <thead>
                                <tr>
                                    <th className="w-25">Service</th>
                                    <th className="w-25">description</th>
                                    <th className="w-25">Price</th>
                                    <th className="w-25">Image</th>
                                    <th className="w-25">Action</th>
                                </tr>
                            </thead>
                        {
                            service.map(service =>
                                
                                                <tbody>
                                                    <td className="w-25">{service.title}</td>
                                                    <td className="w-25">{service.description}</td>
                                                    <td className="w-25">${service.price}</td>
                                                    <td className="w-25">
                                                        {
                                                            service.image ? <img style={{ width: "8rem", height: "8rem" }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                                                                :
                                                                <img style={{ width: "8rem", height: "8rem" }} className="img-fluid mb-3" src={`http://localhost:5500/${service.img}`} alt="" />
                                                        }
                                                    </td>
                                                    <td className="w-25">
                                                        <button className="btn btn-danger m-4"  style={{backgroundColor:"red"}}
                                                            onClick={() => handleDelete(service._id)} >Delete</button>
                                                    </td>
                            </tbody>)
                        }
                    </table>
                </div>
            
        </div>
    </div>
</div>
    );
};

export default ManageService;