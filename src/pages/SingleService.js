import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../hooks/useServices';
import '../assets/css/SingleService.css';

const SingleService = () => {
  const { _id } = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const matchedService = services.find((service) => service._id === _id);

  return (
    <div className='container my-2 py-2'>
      <h1 className='py-3 text-center text-primary'>{matchedService?.title}</h1>
      <div className='imgContainer pb-2'>
        <img
          src={matchedService?.img}
          alt='sundarban_img'
          className='img-fluid singlePicture'
        />
      </div>
      <section className='tourDetails px-5 mx-3 my-3'>
        <h4>Tour Details: </h4>
        <p className='fw-bold'>{matchedService?.desc}</p>
      </section>
    </div>
  );
};

export default SingleService;
