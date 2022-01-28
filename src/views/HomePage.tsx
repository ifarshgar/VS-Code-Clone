import { useAuth0 } from '@auth0/auth0-react';
import MaterialButton from 'components/common/material-button/MaterialButton';
import React, { FC } from 'react';

type HomePageProps = {
  isAuthenticated: boolean;
};

const HomePage: FC<HomePageProps> = ({ isAuthenticated }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="App-body">
      <h2>You are inside the home page! :)</h2>
      {!isAuthenticated && (
        <div>
          <br />
          <p>You are seeing this page as a guest since you are not logged in.</p>
          <MaterialButton value="Sign in" onClick={() => loginWithRedirect()} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
