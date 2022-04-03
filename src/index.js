import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@mui/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import ColorModeProvider from './components/ColorModeProvider';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log(theme);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorModeProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ColorModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
