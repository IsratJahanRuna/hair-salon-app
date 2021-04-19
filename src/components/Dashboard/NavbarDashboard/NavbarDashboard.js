import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg';
import firebase from "firebase/app";
import { UserContext } from '../../../App';

const NavbarDashboard = () => {
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
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#423D42" }}>
                <Link class="navbar-brand" to="#"><img style={{ width: "50px", height: "30px", marginLeft: "20px" }} src={logo} alt="" className="logo" /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link mr-5 text-white me-2" href="/">Home</a>
                        </li>

                        <li class="nav-item">
                            <Link to="#" className="nav-link active text-dark  fw-bolder">{loggedInUser.name || loggedInUser.email}</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/login" className="nav-link text-light border-gradient-red fw-bolder" onClick={handleSignOut}>{loggedInUser.email ? 'Logout' : 'Login'}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavbarDashboard;