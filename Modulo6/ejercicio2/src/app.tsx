import React from 'react';
import { ThemeProviderComponent } from 'core/theme';
import { RouterComponent } from 'core/router';

const App: React.FC = () => {
  return <RouterComponent />;
};

const AppProviders: React.FC = () => {
  return (
    <ThemeProviderComponent>
      <App />
    </ThemeProviderComponent>
  );
};

export default AppProviders;
