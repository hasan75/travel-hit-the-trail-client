import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useServices from '../hooks/useServices.js';
import Service from './Service.js';
import Bounce from 'react-reveal/Bounce';

const Services = () => {
  const services = useServices();
  const count = services.length;

  return (
    <>
      {!count ? (
        <div className='text-center my-5 private-spinner py-5'>
          <Spinner variant='danger' animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <h6>Loading...</h6>
        </div>
      ) : (
        <Container className='mb-5'>
          <Bounce top cascade>
            <h2 className='text-center text-uppercase mt-5 mb-4 feature'>
              Popular Packages
            </h2>
            <p
              style={{ maxWidth: '650px' }}
              className='text-center mx-auto mt-3'
            >
              {' '}
              A superb collection of great and comfortable tour packages for
              adults & children makes our package connection unique than others
            </p>
          </Bounce>
          <Row>
            {services?.map((service) => (
              <Service kay={service._id} service={service} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Services;
