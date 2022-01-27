import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import SesamButton from '../common/sesam-button/SesamButton';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <SesamButton text="Log in" onClick={() => loginWithRedirect()} />;
};

export default LoginButton;
