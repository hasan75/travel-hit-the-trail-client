import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const Profile = () => {
  const [profile, setProfile] = useState('');
  useEffect(() => {
    fetch('/profile.json')
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);
  const { displayName, email, picture } = profile;
  return (
    <Container style={{ maxWidth: '30rem', marginBottom: '25px' }}>
      <Card className='border-0 shadow'>
        <Card.Header as={'h4'} className='text-center border-0 mt-1'>
          Profile
        </Card.Header>
        <Card.Body className='card-body'>
          <div className='d-flex flex-column align-items-center text-center'>
            <img
              src={picture}
              alt='Admin'
              className='rounded-circle'
              width='150'
            />
            <div className='mt-3'>
              <h4>{displayName}</h4>
              <p className='text-secondary mb-1'>{email}</p>
            </div>
            <Button className='px-4 logout-btn btn-main'>Logout</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
