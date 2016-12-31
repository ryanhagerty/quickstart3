/**
 * App entry point
 */

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Routes
import Routes from './config/routes';

// Base styling
import './common/starter.css';

// Render the router
ReactDOM.render((
  <Router history={browserHistory}>
    {Routes}
  </Router>
), document.getElementById(`app`));
