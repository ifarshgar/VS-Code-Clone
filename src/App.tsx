import AuthProvider from 'components/auth/AuthProvider';
import CustomThemeProvider from 'components/theme/CustomThemeProvider';
import Router from './Router';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <CustomThemeProvider>
        <Router />
      </CustomThemeProvider>
    </AuthProvider>
  );
}

export default App;
