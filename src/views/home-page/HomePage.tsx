import { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { styled } from '@mui/material/styles';

import MaterialButton from 'components/common/material-button/MaterialButton';
import ProgrammingLanguagesList from './ProgrammingLanguagesList';
import { useLocation, useNavigate } from 'react-router-dom';

type HomePageProps = {
  isAuthenticated: boolean;
};

const HomeContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.background,
}));

const Text = styled('div')(({ theme }) => ({
  padding: '10px',
  fontSize: '30px',
  color: theme.font,
}));

const SmallText = styled('div')(({ theme }) => ({
  padding: '5px',
  fontSize: '20px',
  color: theme.font,
}));

const HomePage: FC<HomePageProps> = ({ isAuthenticated }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <HomeContainer>
      <div className="App-body">
        <Text>You are inside the home page! :)</Text>
        {!isAuthenticated && (
          <div>
            <br />
            <SmallText>You are seeing this page as a guest since you are not logged in.</SmallText>
            <MaterialButton value="Sign in" onClick={() => loginWithRedirect()} />
          </div>
        )}
        <ProgrammingLanguagesList />
      </div>
    </HomeContainer>
  );
};

export default HomePage;
