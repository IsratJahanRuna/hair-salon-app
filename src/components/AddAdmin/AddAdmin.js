import React from 'react';
import NavbarDashboard from '../Dashboard/NavbarDashboard/NavbarDashboard';



const AddAdmin = () => {

    const handleAdminSubmit = e => {
        const newAdminInfo = {
            email: e.target.email.value
        };

        console.log(newAdminInfo);

        const url = 'https://shrouded-bastion-35026.herokuapp.com/addAdmin';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAdminInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    e.target.reset();
                    alert('Admin added successfully.')
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <NavbarDashboard></NavbarDashboard>
            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Add an Admin</h2>
                <br />
                <form onSubmit ={handleAdminSubmit}>
                    <h5>Email</h5>
                    <input type="email" class="form-control w-50" placeholder="Email" name="email" aria-label="First name" required />

                    <br />
                    <input className="btn btn-success mb-3" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};
export default AddAdmin;
