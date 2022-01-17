import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Profile from './views/profile/Profile';

import './App.css';
import Header from 'views/header/Header';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      
      <div className="App-body">
        {isAuthenticated && <Profile />}
        {!isAuthenticated && 
          <h2>Please log in to see the user details</h2>
        }
      </div>
    </div>
  );
}

export default App;
