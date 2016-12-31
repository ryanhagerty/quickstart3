import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import HomePage from '../pages/home.page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
  </Route>
);
