import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import routesConfig from 'settings/navigation/config';

const AppRouter = (): React.ReactNode => (
    <HashRouter>
        <Routes>
            {routesConfig.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
        </Routes>
    </HashRouter>
);

export default AppRouter;
