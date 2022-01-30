import React from 'react';

const Profile = React.lazy(() => import('views/profile/Profile'))

const ProfilePage = () => {
  return (
    <div className="App-body">
      <Profile />
    </div>
  );
};

export default ProfilePage;
