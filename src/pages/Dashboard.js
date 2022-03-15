import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import Profile from '../components/Profile.js';
import Bookings from '../components/Bookings.js';
import { NavLink } from 'react-router-dom';
import '../assets/css/admin.css';
import AddReview from '../components/AddReview.js';
import Payment from '../components/Payment.js';
import AddService from '../components/AddService.js';
import ManageServices from '../components/ManageServices.js';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className='text-center my-5 private-spinner py-5'>
        <Spinner variant='danger' animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
        <h6>Loading...</h6>
      </div>
    );
  }
  return (
    <div>
      <div className='mx-2 dashboard'>
        <Row>
          <Col className='admin-side-bar'>
            <div>
              <ul>
                <h6 className='fw-bold text-uppercase'>User Dashboard</h6>

                <li className='sideBarLink'>
                  <NavLink to={`${url}/profile`}>
                    <i className='fas fa-user-circle'></i> Profile
                  </NavLink>
                </li>

                <li className='sideBarLink'>
                  <NavLink to={`${url}/bookings`}>
                    <i className='fas fa-list'></i> Bookings List
                  </NavLink>
                </li>

                <li className='sideBarLink'>
                  <NavLink to={`${url}/mybooking`}>
                    <i className='fas fa-cart-arrow-down'></i> My Booking
                  </NavLink>
                </li>

                <li className='sideBarLink'>
                  <NavLink to={`${url}/addService`}>
                    <i className='fas fa-file-medical'></i> Add Service
                  </NavLink>
                </li>

                <li className='sideBarLink'>
                  <NavLink to={`${url}/makeAdmin`}>
                    <i className='fas fa-user-plus'></i>Make admin
                  </NavLink>
                </li>

                <li className='sideBarLink'>
                  <NavLink to={`${url}/payment`}>
                    <i className='fab fa-amazon-pay'></i>Payment
                  </NavLink>
                </li>

                <li className='sideBarLink'>
                  <NavLink to={`${url}/manageService`}>
                    <i className='fas fa-cog'></i> Manage Services
                  </NavLink>
                </li>

                <li className='sideBarLink'>
                  <NavLink to={`${url}/review`}>
                    <i className='fas fa-comment-dots'></i> Review
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={8} lg='9' className='admin-container'>
            <Switch>
              <Route exact path={path}>
                <Profile></Profile>
              </Route>
              <Route exact path={`${path}/profile`}>
                <Profile></Profile>
              </Route>
              <Route exact path={`${path}/Bookings`}>
                <Bookings></Bookings>
              </Route>
              <Route exact path={`${path}/addService`}>
                <AddService></AddService>
              </Route>
              <Route exact path={`${path}/review`}>
                <AddReview></AddReview>
              </Route>
              <Route exact path={`${path}/payment`}>
                <Payment />
              </Route>
              <Route exact path={`${path}/manageService`}>
                <ManageServices />
              </Route>
            </Switch>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
