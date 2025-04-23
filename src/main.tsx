// filepath: c:\Users\nicol\github\codefend-nico\codefend-test\src\main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Base styles
// import './styles/index.scss'; // Your custom global styles if using SCSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);