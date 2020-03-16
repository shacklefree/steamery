import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Explore from '../pages/Explore';

const Routes = () => (
  <Switch>
    <Route path="*">
      <Explore />
    </Route>
  </Switch>
);

export default Routes;
