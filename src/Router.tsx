import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import ProtectedRoute from 'auth/ProtectedRoute';

import Layout from 'views/Layout';
import HomePage from 'views/home-page/HomePage';
import ProfilePage from 'views/ProfilePage';
import PageNotFound from 'views/PageNotFound';
import Loading from 'components/common/loading/Loading';
import CodeEditor from 'views/CodeEditor';

const Router = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage isAuthenticated={isAuthenticated} />} />
        <Route
          path="/workspace"
          element={
            <ProtectedRoute>
              <CodeEditor />
            </ProtectedRoute>
          }
        />
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
