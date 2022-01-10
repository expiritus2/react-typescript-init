import React, { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import routesConfig from 'settings/navigation/config';

const AppRouter: FC = () => (
    <HashRouter>
        <Routes>
            {routesConfig.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
        </Routes>
    </HashRouter>
);

export default AppRouter;
