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
        <nav class="navbar navbar-expand-lg navbar-light background color">
        <div class="container-fluid">
        <Link  class="navbar-brand fw-bolder text-light " to="/home">Mremot</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item active">
                        <Link className="nav-link ms-5 text-light" to="/home">Home </Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-light" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-light " to="/login">Login</Link>
                    </li>
                </ul>
            </div>

            </div>
        </nav>
    );
};

export default Navbar;