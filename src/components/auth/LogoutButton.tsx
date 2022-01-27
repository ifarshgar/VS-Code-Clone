import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import SesamButton from '../common/sesam-button/SesamButton';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <SesamButton text="Log out" onClick={() => logout({ returnTo: window.location.origin })} />
  );
};

export default LogoutButton;
