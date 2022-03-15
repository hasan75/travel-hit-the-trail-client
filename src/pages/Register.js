import React from 'react';
import './../assets/css/register.css';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import avatar from './../assets/images/avater.png';
import { Spinner } from 'react-bootstrap';
const Register = () => {
  const history = useHistory();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log('data');
  };
  return (
    <div className='register-page'>
      <div
        style={{ height: '100vh' }}
        className='d-flex mx-3 align-items-center justify-content-center'
      >
        <div className='formContainer'>
          <div className='text-center mb-2'>
            <img width='120px' src={avatar} alt='' />
          </div>
          <h2 className='text-center text-white mt-3'>Please Register</h2>
          <form className='registerForm' onSubmit={handleSubmit(onSubmit)}>
            <input
              className='form-control'
              required
              type='text'
              {...register('name', { required: true })}
              placeholder='Enter your name'
            />
            <input
              className='form-control'
              required
              type='email'
              {...register('email', { required: true })}
              placeholder='Enter your email'
            />
            <input
              className='form-control'
              type='password'
              required
              {...register('password', { required: true })}
              placeholder='Enter your password'
            />
            <button className='btn register-btn' type='submit'>
              Register
            </button>
          </form>
          <h6 className='text-center text-white'>
            Already registered?{' '}
            <Link to='/login' className='text-warning'>
              {' '}
              Please Login!
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Register;
