
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook,faList,faListAlt,faCommentDots,faPlus,faThLarge,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkAdmin, setCheckAdmin] = useState(false);


    useEffect(() => {
        fetch('https://shrouded-bastion-35026.herokuapp.com/checkAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setCheckAdmin(data));
    }, [loggedInUser.email]) 

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 " style={{ height: "100vh" }}>
            <ul className="list-unstyled">
            { !checkAdmin  &&
             <div>
                <li>
                    <Link to="/order/:id" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faBook}/> <span>Service Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/serviceList" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faList} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/reviews" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faCommentDots} /><span>Review</span>
                    </Link>
                </li>
                </div>}

                { checkAdmin  &&
                    <div>
                <li>
                    <Link to="/OrdersList" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faListAlt} /> <span>Orders List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addAdmin" className="text-white text-decoration-none" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>

                <li>
                    <Link to="/manageService" className="text-white text-decoration-none" >
                        <FontAwesomeIcon icon={faThLarge} /> <span>Manage Service</span>
                    </Link>
                </li>
                </div>}
            </ul>
        </div>
    );
};

export default Sidebar;