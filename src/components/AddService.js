import React from 'react';
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './../assets/css/AddService.css';

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log('ok');
  };

  return (
    <>
      <section className='add-service'>
        <h3 className='text-center mb-3 fw-bold'>Add a new service</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div
            className='pb-5 mx-auto  bg-white form-main'
            style={{ borderRadius: '15px', maxWidth: '85rem' }}
          >
            <Row className='justify-content-center'>
              <Form.Group as={Col} md={6} sm={12} className='mr-md-5'>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  Service Title
                </Form.Label>
                <Form.Control
                  type='text'
                  {...register('title', { required: true })}
                  placeholder='Enter service title'
                />
              </Form.Group>

              <Form.Group as={Col} md={6} sm={12}>
                <Form.Label style={{ fontWeight: 'bold' }}>Price</Form.Label>
                <Form.Control
                  type='number'
                  {...register('price', { required: true })}
                  placeholder='Enter service price'
                />
              </Form.Group>
            </Row>

            <Row>
              <InputGroup as={Col} className='mb-3 mt-md-3'>
                <Form.Label
                  className='d-block w-100'
                  style={{ fontWeight: 'bold' }}
                >
                  Phot URL
                </Form.Label>
                <InputGroup.Text id='basic-addon1'>
                  <i className='fas fa-link'></i>
                </InputGroup.Text>
                <FormControl
                  id='upload'
                  type='text'
                  {...register('img')}
                  placeholder='Enter a service image'
                />
              </InputGroup>
            </Row>
            <Row>
              <Form.Group as={Col} md={12} sm={12} className='mr-md-5 mt-md-3'>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  Description
                </Form.Label>
                <Form.Control
                  style={{ height: '10rem' }}
                  type='text'
                  as='textarea'
                  {...register('desc', { required: true })}
                  placeholder='Enter service description'
                />
              </Form.Group>
            </Row>

            <div className='text-center mt-4'>
              <Button type='submit' className='submit-btn btn-main'>
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </section>
    </>
  );
};

export default AddService;

/* 
     
*/
