import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from './pages/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <Provider>
    <Router>
    <App />
    </Router>
    </Provider>
    
  </React.StrictMode>
);

