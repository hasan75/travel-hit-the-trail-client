import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import '../../Home/Testimonials/Testimonials.css';
import AddReview from './AddReview';

const Review = ({
  review: { name, description, address, img, _id },
  setEdit,
}) => {
  return (
    <section>
      <div
        className='testimonials mx-auto'
        style={{ borderRadius: '15px', maxWidth: '60rem' }}
      >
        <div className='review-title pt-2 text-center'>
          <h2>My Testimonials</h2>
        </div>
        <Card className='my-4 mx-auto' style={{ maxWidth: '30rem' }}>
          <Card.Img variant='top' src={img} width='60' />
          <Card.Body className='text-center'>
            <h5>
              {name} <br />
              <span>{address}</span>
            </h5>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
        <div className='text-center'>
          <Button
            variant='outline-success'
            onClick={() => setEdit(true)}
            className='py-1 px-2'
          >
            <FontAwesomeIcon icon={faEdit} className='mx-1' /> Edit
          </Button>
          <Button variant='outline-danger' className='py-1 px-2 ml-4'>
            <FontAwesomeIcon icon={faTrash} className='mx-1' /> Delete
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Review;
