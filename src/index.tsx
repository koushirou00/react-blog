import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css";
import App from './App';  // Ensure this path is correct
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
if (!container) throw new Error('Root container not found');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
