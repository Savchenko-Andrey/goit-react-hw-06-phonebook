import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { UserProvider } from 'components/CastomHook/Provider';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, presistor } from 'redux/store';
import { Phonebook } from 'components/App';
import { theme } from 'Thema';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={presistor}>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <Phonebook />
          </ThemeProvider>
        </UserProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
