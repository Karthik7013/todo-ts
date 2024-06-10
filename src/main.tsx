import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.tsx';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
