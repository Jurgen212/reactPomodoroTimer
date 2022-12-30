import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Rutas y paginas
import { BrowserRouter } from 'react-router-dom';
import { PomodoroApp } from './PomodoroApp';


// Service Worker 
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// store
import { Provider } from 'react-redux'
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store= { store }>
      <BrowserRouter>
        
        <PomodoroApp/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


serviceWorkerRegistration.register();
reportWebVitals();
