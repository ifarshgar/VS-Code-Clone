import { useAuth0 } from '@auth0/auth0-react';
import { Link, Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';

import LoginButton from 'auth/LoginButton';
import LogoutButton from 'auth/LogoutButton';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.commonColors.white,
  ':hover': {
    color: '#afffff',
  },
}));

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) return <LoginButton />;
  return <LogoutButton />;
};

const Header = () => {
  return (
    <div className="App">
      <div className="header">
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" sx={{ flex: 1, display: 'flex' }}>
              <StyledLink to="/">Code Editor App</StyledLink>
            </Typography>
            <Typography variant="body1" sx={{ marginRight: '20px' }}>
              <StyledLink to="/profile">Profile</StyledLink>
            </Typography>
            {/* <DarkModeSwitch /> */}
            <div style={{ alignContent: 'flex-end' }}>
              <AuthenticationButton />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
