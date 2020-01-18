import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

import Main from '~/pages/Main';
import Error404 from '~/pages/Error404';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Main} />
      <Route exact path="*" component={Error404} />
    </Switch>
  );
};

export default Routes;
