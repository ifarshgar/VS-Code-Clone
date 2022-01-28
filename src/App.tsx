import AuthProvider from 'auth/AuthProvider';
import CustomThemeProvider from 'theme/CustomThemeProvider';
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
