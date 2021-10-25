import React, { FC } from 'react';
import { Route } from 'react-router-dom';

const AppRoute: FC = ({ path, component, exact }: any) => (
    <Route path={path} component={component} exact={exact} />
);

export default AppRoute;
