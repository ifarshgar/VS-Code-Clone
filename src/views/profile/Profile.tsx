import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import ProfileCard from '../../components/common/profile-card/ProfileCard';
import './style.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated)
    return (
      <div className="App-body">
        <h2>You are not allowed to see this page until you login!</h2>
      </div>
    );

  return (
    isAuthenticated && (
      <div className="profile">
        <ProfileCard picture={user?.picture} name={user?.name} email={user?.email} />
      </div>
    )
  );
};

export default Profile;
