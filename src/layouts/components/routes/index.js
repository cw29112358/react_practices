import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { routes } from 'schemas/routes';

function RoutesComponent() {
  const render = () => <Redirect to="home" />;
  return (
    <Switch>
      <Route exact path="/" render={render} />
      {routes.map((item) => (
        <Route key={item.path} path={item.path} component={item.component} />
      ))}
    </Switch>
  );
}

export default React.memo(RoutesComponent);
