import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import OutdoorsList from './components/OutdoorsList/OutdoorsList';
import About from './components/About/About';
import OutdoorsDetails from './components/OutdoorsDetails/OutdoorsDetails'; 
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<OutdoorsList />} /> 
        <Route path="about" element={<About />} />
        <Route path="details/:id" element={<OutdoorsDetails />} /> 
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();
