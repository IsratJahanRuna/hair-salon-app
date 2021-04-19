import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ServiceOrder from './components/Dashboard/Service/ServiceOrder/ServiceOrder';
import Reviews from './components/Dashboard/Service/Reviews/Reviews';
import AddService from './components/Dashboard/AddService/AddService';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageService from './components/ManageService/ManageService';
import OrdersList from './OrdersList/OrdersList';
import ViewOrderList from './components/Dashboard/Dashboard/ViewOrderList/ViewOrderList';
import AddAdmin from './components/AddAdmin/AddAdmin';
import AboutUs from './components/Home/AboutUs/AboutUs';
import Services from './components/Home/Services/Services';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>



          <PrivateRoute path="/order/:id">
            <ServiceOrder></ServiceOrder>
          </PrivateRoute>

          <PrivateRoute path="/order">
            <ServiceOrder></ServiceOrder>
          </PrivateRoute>


          <PrivateRoute path="/serviceList">
            <ViewOrderList></ViewOrderList>
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute path="/OrdersList">
            <OrdersList></OrdersList>
          </PrivateRoute>

          <PrivateRoute path="/reviews">
            <Reviews></Reviews>
          </PrivateRoute>

          <PrivateRoute path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute>

          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>




        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;