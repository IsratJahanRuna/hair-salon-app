import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";

import './Login.css'
import { UserContext } from '../../App';

import { useHistory, useLocation } from 'react-router';
import photo from '../../images/login.png';
import img from '../../images/login2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import firebaseConfig from './firebase.config';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
  
   
  
    const handleGoogleSignIn = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }
        setLoggedInUser(signedInUser);
        storeAuthToken();
      }).catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }
  
    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem('token', idToken);
          history.replace(from);
        }).catch(function (error) {
          // Handle error
        });
    }
    return (
      <main style={{height:'600px'}} className="row d-flex align-items-center w-100 ">
      <div className="col-md-5 offset-md-1" style={{marginTop:"60px", marginLeft:"170px"}}>
          <img src={photo} alt=""/>
          <h1 style={{color: '#3A4256', fontFamily:"serif"}}><span style={{color: '#5C0731'}} ><b>PLEASE SING IN</b></span> <br/> <b>FOR TREATMENT</b></h1>
          <button  className="btn-style rounded-pill p-3" style={{backgroundColor:'#A52564',color:'white', border:"none"}} onClick={handleGoogleSignIn} ><FontAwesomeIcon icon={faGoogle} ></FontAwesomeIcon> Google Sign in</button>
      </div>
      <div className="col-md-4">
          <img style={{width:"400px", height:"400px",marginTop:"65px"}} src={img} alt="" className="img-fluid"/>
      </div>
      <div className=" mt-3 text-center">
            
          </div>
  </main>  
    
    );
};

export default Login;