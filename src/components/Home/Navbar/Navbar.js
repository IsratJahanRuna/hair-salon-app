import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css';
import firebase from "firebase/app";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            let signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
        })
            .catch((error) => {

            });
    }
    return (
        <nav className="navbar navbar-expand-lg color">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex flex-row-reverse me-5" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link mr-5 text-white me-2" href="/"><b>Home</b></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link mr-5 text-white me-2" href="/dashboard"><b>Dashboard</b></a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link mr-5 text-white me-2" href="/home/about"><b>About</b></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-5 text-white me-2" href="/home/ourServices"><b>Our Services</b></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-5 text-white me-2" href="/home/reviews"><b>Reviews</b></a>
                </li>
            
                <li className="nav-item">
                    <a className="nav-link mr-5 text-white " href="/home/contactUs"><b>Contact Us</b></a>
                </li> */}
                  <li class="nav-item">
                            <Link to="#" className="nav-link active text-dark  fw-bolder">{loggedInUser.name || loggedInUser.email}</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/login" className="nav-link text-light border-gradient-red fw-bolder" onClick={handleSignOut}>{loggedInUser.email ? 'Logout' : 'Login'}</Link>
                        </li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;