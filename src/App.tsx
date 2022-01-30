import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from 'auth/AuthProvider';
import CustomThemeProvider from 'theme/CustomThemeProvider';
import Router from './Router';

import { CircularProgress } from '@mui/material';
import './App.css';

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <BrowserRouter>
        <AuthProvider>
          <CustomThemeProvider>
            <Router />
          </CustomThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
