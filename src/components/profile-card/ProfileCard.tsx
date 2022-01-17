/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './style.css';

const ProfileCard = () => {
  return (
    <div className="profile-card-container">
      <div className="profile-card-header">
        <div className="profile-card-header-layer"></div>
        <div className="profile-card-avatar">
          <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="Allison Walker" />
        </div>
      </div>

      <div className="profile-card-body">
        <h2>Allison Walker</h2>
        <div className="profile-card-divider"></div>
        <div className="profile-card-description">
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
