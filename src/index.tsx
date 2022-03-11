import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/index.css';
import { GlobalStyles } from 'twin.macro';
import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
