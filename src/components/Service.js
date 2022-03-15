import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const Service = ({ service }) => {
  const {
    _id,
    title,
    desc,
    price,
    img,
    rating,
    totalReview,
    from,
    destination,
    start_date,
    start_time,
    end_date,
  } = service;
  return (
    <Col className='my-3' sm={12} md={6} lg={4}>
      <Zoom>
        <Card
          style={{ height: '30em', width: '22rem' }}
          className='mx-1  shadow'
        >
          <div className='text-center'>
            <Card.Img
              style={{ width: '100%', height: '12rem' }}
              variant='top'
              src={img}
            />
          </div>
          <Card.Body>
            <Card.Title className='text-uppercase text-center'>
              {title}
            </Card.Title>
            <Card.Title className='text-center'>Price: {price}.00TK</Card.Title>
            <Card.Text>{desc.slice(0, 100)}...</Card.Text>
            <Card.Text className='text-center'>
              Rating:{' '}
              <Rating
                className='text-danger text-center mt-2'
                initialRating={rating}
                readonly
                emptySymbol='far fa-star'
                fullSymbol='fas fa-star'
              />{' '}
              {rating} ({totalReview})
            </Card.Text>

            <Link to={`/placeorder/${_id}`}>
              <button className='btn mt-2 mx-2 btn-primary text-center'>
                Event Details
              </button>
            </Link>
            <Link to={`/placeorder/${_id}`}>
              <button className='btn mt-2 mx-2 btn-primary text-center'>
                Book Package
              </button>
            </Link>
          </Card.Body>
        </Card>
      </Zoom>
    </Col>
  );
};

export default Service;
