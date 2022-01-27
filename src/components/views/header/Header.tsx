import { useAuth0 } from '@auth0/auth0-react';
import { Link, Outlet } from 'react-router-dom';
import LoginButton from 'components/auth/LoginButton';
import LogoutButton from 'components/auth/LogoutButton';

import './style.css';

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <div className="header">
        <ul className="menu-bar">
          <li>
            <Link to="/" className="white-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="white-link">
              Profile
            </Link>
          </li>
          <li>
            {!isAuthenticated ? (
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
      <Outlet />
    </div>
  );
};

export default Header;
