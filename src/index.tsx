import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="ifarshgar.eu.auth0.com"
      clientId="ibJWm6JN9VdzNQS00fdtFmDhOqTGlh3u"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
