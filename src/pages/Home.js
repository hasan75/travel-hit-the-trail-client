import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../components/Service.js';
import Slider from '../components/Slider.js';
import useServices from '../hooks/useServices.js';
import './../assets/css/home.css';
import collection1 from './../assets/images/collection/c1.jpg';
import collection2 from './../assets/images/collection/c2.png';
import collection3 from './../assets/images/collection/c3.png';
import collection4 from './../assets/images/collection/c4.jpg';
import collection5 from './../assets/images/collection/c5.jpg';
import collection6 from './../assets/images/collection/c6.png';
import collection7 from './../assets/images/collection/c7.png';
import collection8 from './../assets/images/collection/c8.jpg';
import Bounce from 'react-reveal/Bounce';
import Testimonials from '../components/Testimonials.js';
const Home = () => {
  const services = useServices();
  return (
    <div>
      <Slider />
      <Container className='collections my-5 mx-auto'>
        <Bounce bottom cascade>
          <h2 className='text-center feature'>
            We successfully managed tours for the companies and Institues
          </h2>
        </Bounce>
        <p
          style={{ maxWidth: '650px' }}
          className='text-center mb-2 mx-auto mt-3'
        >
          <Bounce>
            A huge number of companies and educational institutions are our
            clients. We manages office tours and study tours for these renowned
            organizations
          </Bounce>
        </p>
        <Row className='mx-0'>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img'>
              <img className='img-fluid ms-0 ps-0' src={collection1} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection2} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection3} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection4} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection5} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection6} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection7} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection8} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Bounce bottom cascade>
          <h2 className='text-center feature'>MOST POPULAR Tour Packages</h2>
          <p style={{ maxWidth: '650px' }} className='text-center mx-auto mt-3'>
            {' '}
            A greate serviceion of packages of all kinds from various categories
            like coutryside, foreign tours are in our offers.
          </p>
        </Bounce>
        {!services.length ? (
          <div className='text-center my-5 private-spinner py-5'>
            <Spinner variant='danger' animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
            <h6>Loading...</h6>
          </div>
        ) : (
          <Row>
            {services?.slice(2, 8)?.map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </Row>
        )}
        <div className='text-center'>
          <Link to='/services'>
            <button className='btn btn-primary mb-5 mt-3'>
              Explore All Packages
            </button>
          </Link>
        </div>
      </Container>
      <Testimonials />
    </div>
  );
};

export default Home;
