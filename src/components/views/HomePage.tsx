import React, { FC } from 'react';

type HomePageProps = {
  isAuthenticated: boolean;
};

const HomePage: FC<HomePageProps> = ({ isAuthenticated }) => {
  return (
    <div className="App-body">
      <h2>You are inside the home page! :)</h2>
      {!isAuthenticated && (
        <div>
          <br />
          <p>You are seeing this page as a guest since you are not logged in.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
