import { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import MaterialButton from 'components/common/material-button/MaterialButton';
import ProgrammingLanguagesList from './ProgrammingLanguagesList';
import HomeContainer from 'components/common/HomeContainer';
import HeaderText from 'components/common/HeaderText';
import ParagraphText from 'components/common/ParagraphText';

type HomePageProps = {
  isAuthenticated: boolean;
};

const HomePage: FC<HomePageProps> = ({ isAuthenticated }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <HomeContainer>
      <div className="App-body">
        <HeaderText>You are inside the home page! :)</HeaderText>
        {!isAuthenticated && (
          <div>
            <br />
            <ParagraphText>
              You are seeing this page as a guest since you are not logged in.
            </ParagraphText>
            <MaterialButton value="Sign in" onClick={() => loginWithRedirect()} />
          </div>
        )}
        <ProgrammingLanguagesList />
      </div>
    </HomeContainer>
  );
};

export default HomePage;
