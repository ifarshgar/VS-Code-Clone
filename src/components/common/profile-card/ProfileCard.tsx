/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';

import './style.css';

type ProfileCardProps = {
  picture: string | undefined;
  name: string | undefined;
  email: string | undefined;
}

const ProfileCard: FC<ProfileCardProps> = ({
  picture = 'https://randomuser.me/api/portraits/women/21.jpg',
  name = 'Allison Walker',
  email="a@b.com",
}) => {
  return (
    <div className="profile-card-container">
      <div className="profile-card-header">
        <div className="profile-card-header-layer"></div>
        <div className="profile-card-avatar">
          <img src={picture} alt={name} />
        </div>
      </div>

      <div className="profile-card-body">
        <h2>{name}</h2>
        <div className="profile-card-divider"></div>
        <div className="profile-card-description">
          <p>Email: {email}</p>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti.</p>
        </div>
      </div>

      <div className="profile-card-footer">
        <div className="profile-card-footer-layer"></div>
      </div>
    </div>
  );
};

export default ProfileCard;
