import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from 'components/common/loading/Loading';

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => children;

export default withAuthenticationRequired(ProtectedRoute, {
  onRedirecting: () => (
    <div className="App-body">
      <h2>Redirecting you to the login page...</h2>
      <br />
      <Loading />
    </div>
  ),
});
