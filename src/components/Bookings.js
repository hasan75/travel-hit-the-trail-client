import React, { useEffect, useState } from 'react';
import { Spinner, Table, Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(bookings);

  useEffect(() => {
    fetch('/bookings.json')
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, []);

  return (
    <div className='px-2  mx-md-2 bg-white' style={{ borderRadius: '15px' }}>
      <h3 className='text-center mb-4 fw-bold'>Manage all Bookings</h3>
      {loading ? (
        <div className='text-center my-5 private-spinner py-5'>
          <Spinner variant='danger' animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <h6>Loading...</h6>
        </div>
      ) : (
        <Table hover borderless responsive>
          <Toaster position='bottom-left' reverseOrder={false} />
          <thead className='bg-light'>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Phone</th>
              <th>Address</th>
              <th>service</th>
              <th>Deletion</th>
              <th>Status</th>
            </tr>
          </thead>
          {bookings.map((order) => {
            return (
              <tbody key={order._id} style={{ fontWeight: '500' }}>
                <tr>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>{order.address}</td>
                  <td title={order.desc}>{order.desc.slice(0, 10)}...</td>
                  <td>
                    <Button variant='outline-danger' className='p-1 ml-3 mb-0'>
                      <i className='fas mx-1 fa-trash'></i>
                      Delete
                    </Button>
                  </td>
                  <td>
                    <select
                      className={
                        order.status === 'Pending'
                          ? 'btn btn-danger'
                          : order.status === 'Done'
                          ? 'btn btn-success'
                          : 'btn btn-info'
                      }
                      defaultValue={order.status}
                    >
                      <option className='bg-white text-muted'>Pending</option>
                      <option className='bg-white text-muted'>On going</option>
                      <option className='bg-white text-muted'>Done</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      )}
    </div>
  );
};

export default Bookings;
