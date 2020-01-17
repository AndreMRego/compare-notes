import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DefaultLayout from '~/pages/_layouts/default';

import Main from './pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={props => (
          <DefaultLayout>
            <Main {...props} />
          </DefaultLayout>
        )}
      />
    </Switch>
  );
}
