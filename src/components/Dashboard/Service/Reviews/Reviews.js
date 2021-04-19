import React, { useContext, useState } from 'react';

import Sidebar from '../../Sidebar/Sidebar';
import Navbar from '../../NavbarDashboard/NavbarDashboard';
import { UserContext } from '../../../../App';

const Reviews = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        e.preventDefault();
        formData.append('name', loggedInUser.name);
        formData.append('comments', info.comments);

        fetch('https://shrouded-bastion-35026.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
               if(data){
                   alert('Review added Successfully');
               }
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="fluid-container">
            <Navbar></Navbar>
            <div className="row  mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className=" col-md-10 p-4 mx-auto">
                    <h1 className="border-bottom mb-2"> Give Review</h1>
                    <form class="row g-3 bg-secondary shadow mt-5 p-5 rounded container shadow" onSubmit={handleSubmit}>
                        <div className="col-md-12">
                            <label class="form-label fw-bolder text-white">Name</label>
                            <input type="text" name="name" defaultValue={loggedInUser.name} onBlur={handleBlur} class="form-control" placeholder="Enter Name" />
                        </div>
                        
                        <div className="col-md-12">
                            <label class="form-label fw-bolder text-white">Comments</label>
                            <textarea type="text" onBlur={handleBlur} name="comments" class="form-control" style={{height:'15vh'}} placeholder="comments" />
                        </div>

                        <div className="col-md-12 d-flex align-items-center">
                            <input type="submit" className="mt-3 btn text-white" style={{backgroundColor:"#610e61"}} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reviews;