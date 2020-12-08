import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ContextProvider } from 'context';
import { DarkThemeProvider } from 'components';
import { Onboarding } from 'screens/PreAuth';
import NotificationHandler from 'components/NotificationHandler';

const App = () => {
  return (
    <ContextProvider>
      <DarkThemeProvider>
        <SafeAreaProvider>
          <Onboarding />
          <NotificationHandler />
        </SafeAreaProvider>
      </DarkThemeProvider>
    </ContextProvider>
  );
};

export default App;
