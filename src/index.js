import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { HeroesApp } from './HeroesApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HeroesApp />
  </>
);

reportWebVitals();
