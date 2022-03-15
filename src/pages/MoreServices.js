import React from 'react';
import Service from '../components/Service.js';

const MoreServies = () => {
  const services = [];
  return (
    <div>
      {services.map((service) => (
        <Service key={service._id} service={service}></Service>
      ))}
    </div>
  );
};

export default MoreServies;
