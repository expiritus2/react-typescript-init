import React, { FC } from 'react';

import { useResize } from 'hooks';
import ScreenContext from 'contexts/screen';
import AppRouter from './AppRouter';

type ComponentProps = {};

const App: FC<ComponentProps> = () => {
    const { screen } = useResize();

    return (
        // @ts-ignore
        <ScreenContext.Provider value={{ screen }}>
            <AppRouter />
        </ScreenContext.Provider>
    );
};

export default App;
