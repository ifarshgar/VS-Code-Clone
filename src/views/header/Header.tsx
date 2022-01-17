import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoginButton from 'views/LoginButton';
import LogoutButton from 'views/LogoutButton';

import './style.css';

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="header">
      <ul className="menu-bar">
        <li>Home</li>
        <li>About</li>
        <li>{!isAuthenticated ? (
          <div className="login">
            <LoginButton />
          </div>
        ) : (
          <div className="logout">
            <LogoutButton />
          </div>
        )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
