import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDashboard from '../NavbarDashboard/NavbarDashboard';

import Sidebar from '../Sidebar/Sidebar';



const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Dashboard = () => {

    return (
        <section>
            <div style={containerStyle} className="fluid-container">
                <NavbarDashboard></NavbarDashboard>
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;