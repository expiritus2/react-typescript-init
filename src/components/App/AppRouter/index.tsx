import React from 'react';
import { HashRouter as Router, Switch, RouteProps } from 'react-router-dom';
import routesConfig from 'settings/navigation/config';

import AppRoute from './AppRoute';

const AppRouter = () => (
    <Router>
        <Switch>
            {routesConfig.map(({ path, component, exact }: RouteProps) => (
                <AppRoute
                    // @ts-ignore
                    key={path}
                    path={path}
                    component={component}
                    exact={exact}
                />
            ))}
        </Switch>
    </Router>
);

export default AppRouter;
