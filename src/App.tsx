import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi</h1>
      </header>
      <div className="login">
        {!isAuthenticated ? (
          <div>
            <h1>Please Login</h1>
            <LoginButton />
          </div>
        ) : (
          <div>
            <LogoutButton />
            <Profile />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
