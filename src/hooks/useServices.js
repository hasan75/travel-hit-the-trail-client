import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'Please, try again',
        });
      });
  }, []);
  return services;
};

export default useServices;
