import React, { FC } from 'react';

import { useResize } from 'hooks';
import ScreenContext from 'contexts/screen';
import AppRouter from './AppRouter';

type ComponentProps = {};

const App: FC<ComponentProps> = () => {
    const { screen, mobileOS, isMobile } = useResize();

    return (
        <ScreenContext.Provider value={{ screen, mobileOS, isMobile }}>
            <AppRouter />
        </ScreenContext.Provider>
    );
};

export default App;
