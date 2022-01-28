import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import ProtectedRoute from 'auth/ProtectedRoute';

import Header from 'views/header/Header';
import HomePage from 'views/HomePage';
import ProfilePage from 'views/ProfilePage';
import PageNotFound from 'views/PageNotFound';

const Router = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage isAuthenticated={isAuthenticated} />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
